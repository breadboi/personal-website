import { Box, Button, CardActions } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from "react";
import { BreakdownBar } from "../BreakdownBar/BreakdownBar";

const styles = {
    card: {
        // Provide some spacing between cards
        margin: 16,
    
        // Use flex layout with column direction for components in the card
        // (CardContent and CardActions)
        display: "flex",
        flexDirection: "column",
    
        // Justify the content so that CardContent will always be at the top of the card,
        // and CardActions will be at the bottom
        justifyContent: "space-between"
    }
}

export function Projects({ }) {
    const [projects, setProjects] = useState([]);
    const [languageColors, setLanguageColors] = useState([]);

    useEffect(() => {
        fetch('/api/github')
            .then(response => response.json())
            .then(setProjects);

        fetch('/api/github/languages')
            .then(response => response.json())
            .then(setLanguageColors);
    }, []);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            {projects.map(function (project, i) {
                return <Project key={i} project={project} languageColors={languageColors} />;
            })}
        </Box>
    );
}

const Project = props => {
    return (
        <Card style={styles.card} sx={{ minWidth: 275, maxWidth: 275, m: 2, height: 300}} >
            <CardContent>
                <Typography component={'span'} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <h4 className="card-title">{props.project.Name}</h4>
                    <p className="card-text">{props.project.Description}</p>
                </Typography>

                <BreakdownBar breakdownItems={props.project.Languages} colorMap={props.languageColors} width={200}></BreakdownBar>

            </CardContent>
            <CardActions>
                <Button stylevariant="outlined" href={"https://github.com/" + props.project.FullName} target="_blank">
                    See Source
                </Button>
            </CardActions>
        </Card>
    );
};