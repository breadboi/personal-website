import React from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const languagesList = ["C#", "Java", "JavaScript", "Golang", "Python", "SQL"];
const frameworksList = ["React", "ASP.NET", "Angular", "Bootstrap", "Material-UI"];
const otherList = ["Docker", "CICD Pipelines", "Agile Development", "Cloud Deployment", "Linux Varients"];

export function Skills({ }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography component={'span'} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <ul>
                            {languagesList.map(function (language, i) {
                                return (
                                    <li key={'language'+i}>{language}</li>
                                )
                            })}
                        </ul>
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography component={'span'} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <ul>
                            {frameworksList.map(function (framework, i) {
                                return (
                                    <li key={'framework'+i}>{framework}</li>
                                )
                            })}
                        </ul>
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography component={'span'} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <ul>
                            {otherList.map(function (other, i) {
                                return (
                                    <li key={'other'+i}>{other}</li>
                                )
                            })}
                        </ul>
                    </Typography>
                </CardContent>
            </Card>

        </Box>
    );
}