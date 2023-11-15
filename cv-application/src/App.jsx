import { useState } from 'react'
import './App.css'
import Info from './components/Info'
import Education from './components/Education'

function App() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    editable: true,
  })

  const [education, setEducation] = useState([])

  return (
    <div className='main-container'>
      <Info info={info} setInfo={setInfo} />
      <Education education={education} setEducation={setEducation} />
    </div>
  )
}

export default App
