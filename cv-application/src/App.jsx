import { useState } from 'react'
import './App.css'
import Info from './components/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <Info/>
    </div>
  )
}

export default App
