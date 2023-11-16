import { useState } from 'react'
import '../styles/Experience.css'
import ExperienceSingle from './ExperienceSingle'
import { v4 as uuid } from 'uuid'

export default function Experience({ experience, setExperience }) {
    const [editMode, setEditMode] = useState(true)

    const addExperience = () => {
        const newEd = [...experience]
        newEd.push({
            id: uuid(),
            start: "",
            end: "",
            company: "",
            position: "",
            description: "",
        })
        setExperience(newEd)
    }

    const setSingle = (single, name, newValue) => {
        const newEd = [...experience]
        const newSingle = newEd.find(ed => ed == single)
        if (newSingle) {
            newSingle[name] = newValue
        }
        setExperience(newEd)
    }

    const removeSingle = (single) => {
        const removed = experience.filter(ed => ed != single)
        console.log(removed)
        setExperience(removed)
    }

    const updateEditMode = () => {
        if (editMode) setEditMode(false)
        else setEditMode(true)
    }

    return (
        <div className='experience'>
            <h1>Experience</h1>

            {
                experience.map(ed => <ExperienceSingle key={ed.id} single={ed} setSingle={setSingle} removeSingle={removeSingle} editMode={editMode} />)
            }

            <button onClick={addExperience}>Add a work experience</button>

            <button onClick={updateEditMode}>
                {editMode ? "Submit" : "Edit"}
            </button>
        </div>
    )
}