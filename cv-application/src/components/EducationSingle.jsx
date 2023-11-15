export default function EducationSingle({ single, setSingle, editMode, removeSingle }) {

    const handleChange = (e, name) => {
        setSingle(single, name, e.target.value)
    }

    return (
        <div className="education-single">
            <form>
                <label htmlFor="education-school">School: </label>
                <input
                    type="text"
                    name="education-school"
                    id="education-school"
                    value={single.school}
                    onChange={(e) => (handleChange(e, "school"))}
                    readOnly={!editMode}
                />

                <label htmlFor="education-degree">Degree: </label>
                <input
                    type="text"
                    name="education-degree"
                    id="education-degree"
                    value={single.degree}
                    onChange={(e) => (handleChange(e, "degree"))}
                    readOnly={!editMode}
                />

                <label htmlFor="education-start">Start Date: </label>
                <input
                    type="text"
                    name="education-start"
                    id="education-start"
                    value={single.start}
                    onChange={(e) => (handleChange(e, "start"))}
                    readOnly={!editMode}
                />

                <label htmlFor="education-end">Finish Date: </label>
                <input
                    type="text"
                    name="education-end"
                    id="education-end"
                    value={single.end}
                    onChange={(e) => (handleChange(e, "end"))}
                    readOnly={!editMode}
                />
            </form>

            <button onClick={() => removeSingle(single)}>Remove</button>
        </div>
    )
}