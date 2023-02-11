import { useState } from 'react'
import './App.css'
import OptionSelection from './components/OptionSelection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <OptionSelection></OptionSelection>
    </div>
  )
}

export default App
