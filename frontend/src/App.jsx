import { Header } from './jsx/Header';
import { Skills } from './jsx/Skills';
import { Projects } from './jsx/Projects';
import './App.css'
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Header />
      </Box>

      <div className='skills-section'>
        <h1 className='center-text'>Skills</h1>
        <Skills />
      </div>

      <div className='projects-section'>
        <h1 className='center-text'>Projects</h1>
        <Projects />
      </div>
    </div>
  )
}

export default App
