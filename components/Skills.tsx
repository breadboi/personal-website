import React from 'react';

const backendLanguages = ["C#", "Golang", "Java", "Python"];
const frameworksList = ["React", "Dotnet", "Nextjs", "Bootstrap", "Material-UI"];
const otherList = ["Docker", "CICD Pipelines", "Agile Development", "Cloud Deployment", "Linux Varients"];

export default function Skills() {
    return (
        <div className="flex flex-col items-center p-4">
            <div className="w-full mt-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                        <div className="bg-white shadow-lg rounded p-4 text-black">
                            <h3 className="text-lg font-bold">Preferred Backend Languages</h3>
                            <p className="mt-2 text-gray-600">
                                <ul>
                                    {backendLanguages.map(function (language, i) {
                                        return (
                                            <li key={'language' + i}>{language}</li>
                                        )
                                    })}
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                        <div className="bg-white shadow-lg rounded p-4 text-black">
                            <h3 className="text-lg font-bold">Frameworks</h3>
                            <ul>
                                {frameworksList.map(function (framework, i) {
                                    return (
                                        <li key={'framework' + i}>{framework}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                        <div className="bg-white shadow-lg rounded p-4 text-black">
                            <h3 className="text-lg font-bold">Other</h3>
                            <ul>
                                {otherList.map(function (other, i) {
                                    return (
                                        <li key={'other' + i}>{other}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
