import { Header } from './jsx/Header';
import { Skills } from './jsx/Skills';
import { Projects } from './jsx/Projects';
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
