import React from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material";
import myResume from '../../../assets/Resume_BrettCarney_2022.pdf'

export function Header({ }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Avatar
        alt="Brett Carney"
        src='https://avatars.githubusercontent.com/u/32111055?v=4'
        sx={{ width: 300, height: 300 }}
      />
      <h1>Brett Carney</h1>
      <h2>Software Engineer</h2>
      <Button variant="outlined" href={myResume}>
        Resume
      </Button>
    </Box>
  );
}