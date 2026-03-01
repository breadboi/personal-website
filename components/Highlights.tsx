import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const backendLanguages = ["C#", "Golang", "Java", "Python"];
const frameworksList = ["React", "Dotnet", "Nextjs", "Bootstrap", "Material-UI"];
const otherList = ["Docker", "CICD Pipelines", "Agile Development", "Cloud Deployment", "Linux Varients"];

export default function Highlights() {
    return (
        <div className="flex justify-evenly flex-wrap text-black">
            <Card className="flex-grow-0 flex-shrink w-80 m-16 h-80 min-w-[20rem] max-w-xs">
                <CardHeader>
                    <CardTitle className="text-lg font-bold">Preferred Backend Languages</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                    <ul>
                        {backendLanguages.map(function (language, i) {
                            return (
                                <li key={'language' + i}>{language}</li>
                            )
                        })}
                    </ul>
                </CardContent>
            </Card>

            <Card className="flex-grow-0 flex-shrink w-80 m-16 h-80 min-w-[20rem] max-w-xs">
                <CardHeader>
                    <CardTitle className="text-lg font-bold">Frameworks</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                    <ul>
                        {frameworksList.map(function (framework, i) {
                            return (
                                <li key={'framework' + i}>{framework}</li>
                            )
                        })}
                    </ul>
                </CardContent>
            </Card>

            <Card className="flex-grow-0 flex-shrink w-80 m-16 h-80 min-w-[20rem] max-w-xs">
                <CardHeader>
                    <CardTitle className="text-lg font-bold">Other</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                    <ul>
                        {otherList.map(function (other, i) {
                            return (
                                <li key={'other' + i}>{other}</li>
                            )
                        })}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
};
