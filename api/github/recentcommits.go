package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"sort"
	"strings"

	"github.com/google/go-github/github"
	"golang.org/x/oauth2"
)

// Repo Represents a single GitHub repository
type Repo struct {
	Name          string
	FullName      string
	Description   string
	StarsCount    int
	ForksCount    int
	LastUpdatedBy string
	UpdatedAt     github.Timestamp
	Languages     map[string]float64
}

func RecentCommits(w http.ResponseWriter, r *http.Request) {
	repositories := GetRecentRepos()

	// Only display the most recent six repositories
	trimmedRepositories := append(repositories[:6])

	jsonResp, err := json.Marshal(trimmedRepositories)

	if err != nil {
		fmt.Printf("Error happened in JSON marshal. Err: %s", err)
	} else {
		w.Write(jsonResp)
	}
}

// GetRecentRepos Gets the repos in order of most recently committed to least recent
func GetRecentRepos() []Repo {

	githubToken := os.Getenv("GITHUB_TOKEN")

	tokenService := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: githubToken},
	)

	context := context.Background()

	tokenClient := oauth2.NewClient(context, tokenService)

	client := github.NewClient(tokenClient)

	// list all repositories for the authenticated user
	repos, _, err := client.Repositories.List(context, "", nil)

	// Handle our nil case
	if err != nil {
		fmt.Printf("Problem in getting repository information %v\n", err)
		os.Exit(1)
	}

	// Create empty list
	repositories := []Repo{}

	/*
	 * Iterate through repositories where the name and desc. are not nil
	 * and append to our repository list.
	 */
	for _, element := range repos {

		// Check if we have nil values for the name or description strings
		if element.FullName != nil && element.Description != nil {
			ownerRepoSplit := strings.Split(*element.FullName, "/")
			languages, _, _ := client.Repositories.ListLanguages(context, ownerRepoSplit[0], ownerRepoSplit[1])

			// Convert bytes to percentages
			sum := 0
			for _, languageAmount := range languages {
				sum += languageAmount
			}

			var languagePercentages = make(map[string]float64)
			for languageString, languageAmount := range languages {
				languagePercentages[languageString] = float64(languageAmount*1.0) / float64(sum) * 100.0
			}

			pack := Repo{
				Name:        *element.Name,
				FullName:    *element.FullName,
				Description: *element.Description,
				ForksCount:  *element.ForksCount,
				StarsCount:  *element.StargazersCount,
				UpdatedAt:   *element.UpdatedAt,
				Languages:   languagePercentages,
			}

			// Append to our repositories list
			repositories = append(repositories, pack)
		}

	}

	// Sort our repositories by time updated
	sort.SliceStable(repositories, func(i, j int) bool {
		return repositories[i].UpdatedAt.After(repositories[j].UpdatedAt.Time)
	})

	return repositories
}
