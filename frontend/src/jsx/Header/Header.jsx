import React from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material";
import myAvatar from '../../../assets/ProfPhoto300x300.png';

export function Header({ }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Avatar
        alt="Brett Carney"
        src={myAvatar}
        sx={{ width: 300, height: 300 }}
      />
      <h1>Brett Carney</h1>
      <h2>Software Engineer</h2>
      <Button variant="outlined" href='../../../assets/Resume_BrettCarney.PDF'>
        Resume
      </Button>
    </Box>
  );
}