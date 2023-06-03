import { Card } from 'flowbite-react';
import React from 'react';

const backendLanguages = ["C#", "Golang", "Java", "Python"];
const frameworksList = ["React", "Dotnet", "Nextjs", "Bootstrap", "Material-UI"];
const otherList = ["Docker", "CICD Pipelines", "Agile Development", "Cloud Deployment", "Linux Varients"];

export default function Highlights() {
    return (
        <div className="flex justify-evenly flex-wrap text-black">
            <Card className="flex-grow-0 flex-shrink w-80 m-16 h-80 min-w-[20rem] max-w-xs rounded overflow-hidden shadow-lg">
                <div className="p-6">
                    <h3 className="text-lg font-bold mb-5">Preferred Backend Languages</h3>
                    <p className="text-base">
                        <ul>
                            {backendLanguages.map(function (language, i) {
                                return (
                                    <li key={'language' + i}>{language}</li>
                                )
                            })}
                        </ul>
                    </p>
                </div>
            </Card>

            <Card className="flex-grow-0 flex-shrink w-80 m-16 h-80 min-w-[20rem] max-w-xs rounded overflow-hidden shadow-lg">
                <div className="p-6">
                    <h3 className="text-lg font-bold mb-5">Frameworks</h3>
                    <p className="text-base">
                        <ul>
                            {frameworksList.map(function (framework, i) {
                                return (
                                    <li key={'framework' + i}>{framework}</li>
                                )
                            })}
                        </ul>
                    </p>
                </div>
            </Card>

            <Card className="flex-grow-0 flex-shrink w-80 m-16 h-80 min-w-[20rem] max-w-xs rounded overflow-hidden shadow-lg">
                <div className="p-6">
                    <h3 className="text-lg font-bold mb-5">Other</h3>
                    <p className="text-base">
                        <ul>
                            {otherList.map(function (other, i) {
                                return (
                                    <li key={'other' + i}>{other}</li>
                                )
                            })}
                        </ul>
                    </p>
                </div>
            </Card>
        </div>
    );
};
