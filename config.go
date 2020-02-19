/**
 * @file main.go
 * @author Brett Carney (brettcarney.com)
 * @brief Interfaces with website config file
 * @version 1.0
 * @date 2020-02-19
 *
 */

package main

import (
	"encoding/json"
	"fmt"
	"os"
)

// Represents our config file
type Config struct {
	Github_Secrets struct {
		Personal_Read string `json:"personal-read"`
	} `json:"github-secrets"`
	Port string `json:"port"`
	Mode string `json:"mode"`
}

/**
 * @brief Handles reading our config file and returning
 * a Config object that represents the file's contents.
 * 
 * @param file Represents the filepath to config.json
 */
func LoadConfiguration(file string) Config {
	var config Config

	configFile, err := os.Open(file)

	defer configFile.Close()

	if err != nil {
		fmt.Println(err.Error())
	}

	jsonParser := json.NewDecoder(configFile)

	jsonParser.Decode(&config)

	return config
}
