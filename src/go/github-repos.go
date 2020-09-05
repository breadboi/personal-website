/**
 * @file main.go
 * @author Brett Carney (brettcarney.com)
 * @brief Handles communication with github api
 * @version 1.0
 * @date 2020-02-19
 *
 */

package main

import (
	"context"
	"fmt"
	"os"
	"sort"

	"github.com/google/go-github/github"
	"golang.org/x/oauth2"
)

// Repo Represents a single GitHub repository
type Repo struct {
	Name          string
	FullName	  string
	Description   string
	StarsCount    int
	ForksCount    int
	LastUpdatedBy string
	UpdatedAt     github.Timestamp
}

// GetRepos Request repos in no specific order
func GetRepos() []Repo {
	
	config := LoadConfiguration("config.json")

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
				Name:   	 *element.Name,
				FullName: 	 *element.FullName,
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

	config := LoadConfiguration("config.json")

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
			pack := Repo{
				Name:    	 *element.Name,
				FullName: 	 *element.FullName,
				Description: *element.Description,
				ForksCount:  *element.ForksCount,
				StarsCount:  *element.StargazersCount,
				UpdatedAt:   *element.UpdatedAt,
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
