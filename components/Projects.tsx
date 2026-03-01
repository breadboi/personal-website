import { GitHubLanguageColors, GitHubProjectData, GitHubProjectLanguageData } from "@/types/Projects/GitHubProjectData";
import React, { useEffect, useState } from "react";
import { BreakdownBar } from "./BreakdownBar";
import { GoMarkGithub } from 'react-icons/go';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function Projects({ }) {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [projects, setProjects] = useState<GitHubProjectData[]>([]);
    const [languageColors, setLanguageColors] = useState<GitHubLanguageColors>({});

    async function fetchGithub() {
        try {
            const response = await fetch("/api/github/recentcommits");
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.log(error);
        }
    };

    async function fetchLanguages() {
        try {
            const response = await fetch("/api/github/languages");
            const data = await response.json();
            setLanguageColors(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        Promise.allSettled([
            fetchGithub(),
            fetchLanguages()
        ]).then(() => {
            setLoading(false);
        })
    }, [])

    return (isLoading) ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
                <Card key={`skeleton-${i}`} className="mx-auto w-full max-w-sm h-80 flex flex-col">
                    <CardHeader>
                        <Skeleton className="h-6 w-2/3" />
                    </CardHeader>
                    <CardContent className="flex-1 space-y-3 overflow-hidden">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-3 w-1/3" />
                    </CardContent>
                    <CardFooter>
                        <Skeleton className="h-9 w-40" />
                    </CardFooter>
                </Card>
            ))}
        </div>
    ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: GitHubProjectData, i: number) => (
                <Project key={i} projectData={project} languageColors={languageColors} />
            ))}
        </div>
    );
}

const Project: React.FC<GitHubProjectLanguageData> = ({ projectData, languageColors }) => {
    return (
        <Card className="mx-auto w-full max-w-sm h-80 flex flex-col">
            <CardHeader>
                <CardTitle className="text-2xl truncate">{projectData.Name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-4 overflow-hidden">
                <p className="text-base [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden">
                    {projectData.Description}
                </p>

                <BreakdownBar
                    breakdownItems={projectData.Languages}
                    colorMap={languageColors}
                    width={200}
                />
            </CardContent>
            <CardFooter className="mt-auto">
                <Button asChild variant="secondary" className="gap-2">
                    <a
                        href={"https://github.com/" + projectData.FullName}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GoMarkGithub />
                        View Source on GitHub
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
};
