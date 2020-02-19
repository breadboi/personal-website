package main

import (
	"context"
	"fmt"
	"os"
	"sort"

	"github.com/google/go-github/github"
	"golang.org/x/oauth2"
)

type Repo struct {
	Name          string
	FullName	  string
	Description   string
	StarsCount    int
	ForksCount    int
	LastUpdatedBy string
	UpdatedAt     github.Timestamp
}

// Get my repos
func GetRepos() []Repo {
	
	config := LoadConfiguration("config.json")

	github_token := config.Github_Secrets.Personal_Read

	context := context.Background()

	tokenService := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: github_token},
	)

	tokenClient := oauth2.NewClient(context, tokenService)

	client := github.NewClient(tokenClient)

	// list all repositories for the authenticated user
	repos, _, err := client.Repositories.List(context, "", nil)

	if err != nil {
		fmt.Printf("Problem in getting repository information %v\n", err)
		os.Exit(1)
	}

	// Create empty list
	repositories := []Repo{}

	//var pack Repo

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

// Get my most recent repos
func GetRecentRepos() []Repo {

	config := LoadConfiguration("config.json")

	github_token := config.Github_Secrets.Personal_Read

	context := context.Background()

	tokenService := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: github_token},
	)

	tokenClient := oauth2.NewClient(context, tokenService)

	client := github.NewClient(tokenClient)

	// list all repositories for the authenticated user
	repos, _, err := client.Repositories.List(context, "", nil)

	if err != nil {
		fmt.Printf("Problem in getting repository information %v\n", err)
		os.Exit(1)
	}

	// Create empty list
	repositories := []Repo{}

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

	sort.SliceStable(repositories, func(i, j int) bool {
		return repositories[i].UpdatedAt.After(repositories[j].UpdatedAt.Time)
	})

	return repositories
}
