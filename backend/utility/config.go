/**
 * @file main.go
 * @author Brett Carney (brettcarney.com)
 * @brief Interfaces with website config file
 * @version 1.0
 * @date 2020-02-19
 *
 */

package utility

import (
	"encoding/json"
	"fmt"
	"os"
)

// Config Represents the config file structure
type Config struct {
	GithubSecrets struct {
		PersonalRead string `json:"personal-read"`
	} `json:"github-secrets"`
	Port           string `json:"port"`
	Mode           string `json:"mode"`
	Certificate    string `json:"certificate"`
	CertificateKey string `json:"certificate-key"`
}

// LoadConfiguration Loads config file for gin
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
