package handler

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

type reviewTransport func(*http.Request) (*http.Response, error)

func (f reviewTransport) RoundTrip(r *http.Request) (*http.Response, error) { return f(r) }

func TestRecentCommitsOnlyReturnsPublicRepositories(t *testing.T) {
	original := http.DefaultTransport
	t.Cleanup(func() { http.DefaultTransport = original })
	t.Setenv("GITHUB_TOKEN", "review-test-token")
	http.DefaultTransport = reviewTransport(func(r *http.Request) (*http.Response, error) {
		body := `{"Go":100}`
		switch r.URL.Path {
		case "/user/repos":
			if r.URL.Query().Get("visibility") != "public" {
				t.Errorf("expected public visibility, got %s", r.URL.RawQuery)
			}
			body = `[{"name":"public","full_name":"breadboi/public","description":"Public project","private":false,"stargazers_count":1,"forks_count":0,"updated_at":"2026-10-01T00:00:00Z"},{"name":"private","full_name":"breadboi/private","description":"Private project","private":true,"stargazers_count":0,"forks_count":0,"updated_at":"2026-10-02T00:00:00Z"}]`
		case "/repos/breadboi/public/languages":
		default:
			t.Errorf("unexpected request: %s", r.URL)
		}
		return &http.Response{StatusCode: 200, Header: make(http.Header), Body: io.NopCloser(strings.NewReader(body)), Request: r}, nil
	})
	recorder := httptest.NewRecorder()
	RecentCommits(recorder, httptest.NewRequest("GET", "/api/github/recentcommits", nil))
	var repos []Repo
	if err := json.Unmarshal(recorder.Body.Bytes(), &repos); err != nil {
		t.Fatal(err)
	}
	if len(repos) != 1 || repos[0].FullName != "breadboi/public" {
		t.Fatalf("unexpected public response: %s", recorder.Body.String())
	}
	if repos[0].Languages["Go"] != 100 {
		t.Fatalf("language percentages changed: %+v", repos[0].Languages)
	}
}

func TestRecentCommitsHandlesGitHubFailure(t *testing.T) {
	original := http.DefaultTransport
	t.Cleanup(func() { http.DefaultTransport = original })
	t.Setenv("GITHUB_TOKEN", "review-test-token")
	http.DefaultTransport = reviewTransport(func(r *http.Request) (*http.Response, error) { return nil, fmt.Errorf("test upstream unavailable") })
	recorder := httptest.NewRecorder()
	RecentCommits(recorder, httptest.NewRequest("GET", "/api/github/recentcommits", nil))
	if recorder.Body.String() != "[]" {
		t.Fatalf("expected an empty project list, got %s", recorder.Body.String())
	}
}
