import { GitHubLanguageColors, GitHubProjectData, GitHubProjectLanguageData } from "@/types/Projects/GitHubProjectData";
import { Card, Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { BreakdownBar } from "./BreakdownBar";

export function Projects({ }) {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [projects, setProjects] = useState<GitHubProjectData[]>([]);
    const [languageColors, setLanguageColors] = useState<GitHubLanguageColors>({});

    useEffect(() => {
        Promise.allSettled([
            fetchGithub(),
            fetchLanguages()
        ]).then(() => {
            setLoading(false);
        })
    }, [])

    async function fetchGithub() {
        try {
            const response = await fetch("/api/github");
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.log(error);
        }
    };

    async function fetchLanguages() {
        try {
            const response = await fetch("/api/languages");
            const data = await response.json();
            setLanguageColors(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (isLoading) ? (
        <div className="h-screen flex justify-center flex-wrap">
            <Spinner
                aria-label="Loading Projects Component"
                size="xl"
            />
        </div>
    ) : (
        <div className="flex justify-evenly flex-wrap">
            {projects.map((project: GitHubProjectData, i: number) => (
                <Project key={i} projectData={project} languageColors={languageColors} />
            ))}
        </div>
    );
}

const Project: React.FC<GitHubProjectLanguageData> = ({ projectData, languageColors }) => {
    return (
        <Card className="flex-grow-0 flex-shrink w-80 m-16 h-80 min-w-[20rem] max-w-xs rounded overflow-hidden shadow-lg">
            <div className="p-6">
                <h3 className="text-lg font-bold mb-5">{projectData.Name}</h3>
                <p className="text-base">{projectData.Description}</p>

                <BreakdownBar
                    breakdownItems={projectData.Languages}
                    colorMap={languageColors}
                    width={210}
                />
            </div>

            <div className="px-6 py-4">
                <a
                    className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded"
                    href={"https://github.com/" + projectData.FullName}
                    target="_blank"
                >
                    See Source
                </a>
            </div>
        </Card>
    );
};