import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import stateData from "./state_data.js"
import StateSelector from "./components/StateSelector.jsx"

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <div className="App">
        <StateSelector states={stateData}/>
    </div>
  )
}

export default App
