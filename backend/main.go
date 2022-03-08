/**
 * @file main.go
 * @author Brett Carney (brettcarney.com)
 * @brief Main entrypoint and router
 * @version 1.0
 * @date 2020-02-19
 *
 */

package main

import (
	"net/http"

	"brettcarney.com/utility"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {

	config := utility.LoadConfiguration("./configs/config.json")

	gin.SetMode(config.Mode)

	router := setupRouter()

	// Listen and Serve
	if config.Certificate != "" && config.CertificateKey != "" {
		router.RunTLS(config.Port, config.Certificate, config.CertificateKey)
	} else {
		router.Run(config.Port)
	}
}

/**
 * @brief Gin router setup for github api and our
 * public static files
 */
func setupRouter() *gin.Engine {

	// Disable Console Color
	// gin.DisableConsoleColor()

	router := gin.Default()

	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./public", true)))

	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "pong",
			})
		})
		api.GET("/github", GithubHandler)
	}

	return router
}

/**
 * @brief GET handler for our github api
 * functionality.
 *
 * @param *gin.Context Pipe Golang gin context
 */
func GithubHandler(c *gin.Context) {

	repositories := utility.GetRecentRepos()

	// Only display the most recent six repositories
	trimmedRepositories := append(repositories[:6])

	c.Header("Content-Type", "application/json")

	c.JSON(http.StatusOK, trimmedRepositories)
}
