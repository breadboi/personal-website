export interface GitHubProjectData {
    Name:          string;
    FullName:      string;
    Description:   string;
    StarsCount:    number;
    ForksCount:    number;
    LastUpdatedBy: string;
    UpdatedAt:     Date;
    Languages:     GitHubLanguage;
}

export interface GitHubLanguage {
    [Language: string]: number;
}

export interface GitHubLanguageColors {
    [LanguageColor: string]: string;
}

export interface GitHubProjectLanguageData {
    projectData: GitHubProjectData;
    languageColors: GitHubLanguageColors;
}