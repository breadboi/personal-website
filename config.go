package main

import (
	"encoding/json"
	"fmt"
	"os"
)

type Config struct {
	Github_Secrets struct {
		Personal_Read string `json:"personal-read"`
	} `json:"github-secrets"`
	Port string `json:"port"`
	Mode string `json:"mode"`
}

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
