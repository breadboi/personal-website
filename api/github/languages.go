package handler

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func Languages(w http.ResponseWriter, r *http.Request) {
	languages := GetLanguageColors()

	jsonResp, err := json.Marshal(languages)

	if err != nil {
		fmt.Printf("Error happened in JSON marshal. Err: %s", err)
	} else {
		w.Write(jsonResp)
	}
}

func GetLanguageColors() map[string]string {
	url := "https://raw.githubusercontent.com/doda-zz/github-language-colors/master/colors.json"

	req, _ := http.NewRequest("GET", url, nil)

	res, err := http.DefaultClient.Do(req)
	if err != nil {
		fmt.Printf("Error happened in HTTP request. Err: %s", err)
		return nil
	}

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	// result, _ := json.Marshal(body)

	colors := make(map[string]string)
	json.Unmarshal(body, &colors)

	return colors
}
