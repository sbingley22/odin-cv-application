import { useState } from 'react'
import './App.css'
import Info from './components/Info'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    editable: true,
  })

  const [education, setEducation] = useState([])
  const [experience, setExperience] = useState([])

  return (
    <div className='main-container'>
      <Info info={info} setInfo={setInfo} />
      <Education education={education} setEducation={setEducation} />
      <Experience experience={experience} setExperience={setExperience} />
    </div>
  )
}

export default App
