package githubRepos

import (
	"github.com/google/go-github/github"
	"golang.org/x/oauth2"
	"context"
	"fmt"
	"os"
)

type Repo struct {
	FullName      string
	Description   string
	StarsCount    int
	ForksCount    int
	LastUpdatedBy string
}
 
// Get my pinned Repositories
func GetRepos () []Repo {
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

	// Populate
	for i := 0; i < len(repos); i++ {
		pack := Repo {
			FullName: *repos[i].FullName,
			Description: *repos[i].Description,
			ForksCount: *repos[i].ForksCount,
			StarsCount: *repos[i].StargazersCount,
		}

		repositories = append(repositories, pack)
	}

	return repositories
}
