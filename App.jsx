import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <h1>Hola Mundo</h1>
      <ItemListContainer greeting="Hola" />
      
    </div>
  );
}

export default App
