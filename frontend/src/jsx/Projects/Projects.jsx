import { Box, Button, CardActions } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from "react";

export function Projects({ }) {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/api/github')
            .then(response => response.json())
            .then(setProjects);
    }, []);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            {projects.map(function (project, i) {
                return <Project key={i} project={project} />;
            })}
        </Box>
    );
}

const Project = props => {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 275, m: 2 }}>
            <CardContent>
                <Typography component={'span'} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <h4 className="card-title">{props.project.Name}</h4>
                    <p className="card-text">{props.project.Description}</p>
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" href={"https://github.com/" + props.project.FullName} target="_blank">
                    See Source
                </Button>
            </CardActions>
        </Card>
    );
};