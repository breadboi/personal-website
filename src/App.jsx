import { Header } from './jsx/Header'
import { Links } from './jsx/Links';
import { Skills } from './jsx/Skills';
import { Projects } from './jsx/Projects';
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header     />

      <Skills     />

      <Projects   />

      <Links   e={e}  />
    </div>
  )
}

export default App
