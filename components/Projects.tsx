import { GitHubLanguageColors, GitHubProjectData, GitHubProjectLanguageData } from "@/types/Projects/GitHubProjectData";
import { Card, Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { BreakdownBar } from "./BreakdownBar";
import { GoMarkGithub } from 'react-icons/go';

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
        <div className="flex justify-center flex-wrap">
            <Spinner
                aria-label="Loading Projects Component"
                size="xl"
            />
        </div>
    ) : (
        <div className="flex justify-between flex-wrap">
            {projects.map((project: GitHubProjectData, i: number) => (
                <Project key={i} projectData={project} languageColors={languageColors} />
            ))}
        </div>
    );
}

const Project: React.FC<GitHubProjectLanguageData> = ({ projectData, languageColors }) => {
    return (
        <Card className="w-screen md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3 xl:w-1/4 xl:h-1/4 m-5 rounded overflow-hidden shadow-lg flex flex-col">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                    {projectData.Name}
                </p>
            </h5>
            <div className="pt-5">                
                <p className="text-base pb-2">{projectData.Description}</p>

                <BreakdownBar
                    breakdownItems={projectData.Languages}
                    colorMap={languageColors}
                    width={200}
                />
            </div>

            <div className="mt-auto">
                <a
                    className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded flex items-center"
                    href={"https://github.com/" + projectData.FullName}
                    target="_blank"
                >
                    <GoMarkGithub className="mr-2"/>
                    View Source on GitHub
                </a>
            </div>
        </Card>
    );
};