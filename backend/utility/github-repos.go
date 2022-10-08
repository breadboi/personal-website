/**
 * @file main.go
 * @author Brett Carney (brettcarney.com)
 * @brief Handles communication with github api
 * @version 1.0
 * @date 2020-02-19
 *
 */

package utility

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
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

// GetRepos Request repos in no specific order
func GetRepos() []Repo {

	config := LoadConfiguration("configs/config.json")

	githubToken := config.GithubSecrets.PersonalRead

	context := context.Background()

	tokenService := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: githubToken},
	)

	tokenClient := oauth2.NewClient(context, tokenService)

	client := github.NewClient(tokenClient)

	// list all repositories for the authenticated user
	repos, _, err := client.Repositories.List(context, "", nil)

	// Handle nil case
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
			pack := Repo{
				Name:        *element.Name,
				FullName:    *element.FullName,
				Description: *element.Description,
				ForksCount:  *element.ForksCount,
				StarsCount:  *element.StargazersCount,
			}

			// Append to our repositories list
			repositories = append(repositories, pack)
		}

	}

	return repositories
}

// GetRecentRepos Gets the repos in order of most recently committed to least recent
func GetRecentRepos() []Repo {

	config := LoadConfiguration("configs/config.json")

	githubToken := config.GithubSecrets.PersonalRead

	context := context.Background()

	tokenService := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: githubToken},
	)

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

func GetLanguageColors() map[string]string {
	url := "https://raw.githubusercontent.com/doda-zz/github-language-colors/master/colors.json"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	// result, _ := json.Marshal(body)

	colors := make(map[string]string)
	json.Unmarshal(body, &colors)

	return colors
}
