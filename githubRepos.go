package main

import (
	"context"
	"fmt"
	"os"

	"github.com/google/go-github/github"
	"golang.org/x/oauth2"
)

type Repo struct {
	FullName      string
	Description   string
	StarsCount    int
	ForksCount    int
	LastUpdatedBy string
}

// Get my pinned Repositories
func GetRepos() []Repo {
	context := context.Background()
	tokenService := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: "5662af414edb4e381124b71b96d6f808fa944287"},
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
