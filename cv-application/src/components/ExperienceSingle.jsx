export default function ExperienceSingle({ single, setSingle, editMode, removeSingle }) {

    const handleChange = (e, name) => {
        setSingle(single, name, e.target.value)
    }

    return (
        <div className="experience-single">
            <form>
                <label htmlFor="experience-company">Company Name: </label>
                <input
                    type="text"
                    name="experience-company"
                    id="experience-company"
                    value={single.company}
                    onChange={(e) => (handleChange(e, "company"))}
                    readOnly={!editMode}
                />

                <label htmlFor="experience-position">Position Title: </label>
                <input
                    type="text"
                    name="experience-position"
                    id="experience-position"
                    value={single.position}
                    onChange={(e) => (handleChange(e, "position"))}
                    readOnly={!editMode}
                />

                <label htmlFor="experience-start">Start Date: </label>
                <input
                    type="text"
                    name="experience-start"
                    id="experience-start"
                    value={single.start}
                    onChange={(e) => (handleChange(e, "start"))}
                    readOnly={!editMode}
                />

                <label htmlFor="experience-end">Finish Date: </label>
                <input
                    type="text"
                    name="experience-end"
                    id="experience-end"
                    value={single.end}
                    onChange={(e) => (handleChange(e, "end"))}
                    readOnly={!editMode}
                />

                <label htmlFor="experience-description">Description: </label>
                <textarea
                    type="text"
                    name="experience-description"
                    id="experience-description"
                    value={single.description}
                    onChange={(e) => (handleChange(e, "description"))}
                    readOnly={!editMode}
                />
            </form>

            <button onClick={() => removeSingle(single)}>Remove</button>
        </div>
    )
}