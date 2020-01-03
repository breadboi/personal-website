package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	router := setupRouter()
	// Listen and Server in localhost:8080
	router.Run(":8080")
}

// Function that returns a pointer to a gin Engine
func setupRouter() *gin.Engine {
	// Disable Console Color
	// gin.DisableConsoleColor()
	router := gin.Default()

	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./public", true)))

	return router
}
