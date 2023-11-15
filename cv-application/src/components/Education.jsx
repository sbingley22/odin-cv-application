import { useState } from 'react'
import '../styles/Education.css'
import EducationSingle from './EducationSingle'
import { v4 as uuid } from 'uuid'

export default function Education({ education, setEducation }) {
    const [editMode, setEditMode] = useState(true)

    const addEducation = () => {
        const newEd = [...education]
        newEd.push({
            id: uuid(),
            start: "",
            end: "",
            school: "",
            degree: "",
        })
        setEducation(newEd)
    }

    const setSingle = (single, name, newValue) => {
        const newEd = [...education]
        const newSingle = newEd.find(ed => ed == single)
        if (newSingle) {
            newSingle[name] = newValue
        }
        setEducation(newEd)
    }

    const removeSingle = (single) => {
        const removed = education.filter(ed => ed != single)
        console.log(removed)
        setEducation(removed)
    }

    const updateEditMode = () => {
        if (editMode) setEditMode(false)
        else setEditMode(true)
    }

    return (
        <div className='education'>
            <h1>Education</h1>

            {
                education.map(ed => <EducationSingle key={ed.id} single={ed} setSingle={setSingle} removeSingle={removeSingle} editMode={editMode} />)
            }

            <button onClick={addEducation}>Add a Degree</button>

            <button onClick={updateEditMode}>
                {editMode ? "Submit" : "Edit"}
            </button>
        </div>
    )
}