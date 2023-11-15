import '../styles/Info.css'

export default function Info({ info, setInfo }) {

    const handleNameChange = (e) => {
        const newInfo = { ...info }
        newInfo.name = e.target.value
        setInfo(newInfo)
    }

    const handleEmailChange = (e) => {
        const newInfo = { ...info }
        newInfo.email = e.target.value
        setInfo(newInfo)
    }

    const handlePhoneChange = (e) => {
        const newInfo = { ...info }
        newInfo.phone = e.target.value
        setInfo(newInfo)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const newInfo = { ...info }
        newInfo.editable = !newInfo.editable
        setInfo(newInfo)
    }

    return (
        <div className="info">
            <h1>User Contact Details</h1>
            <form>
                <label htmlFor="info-name">Name: </label>
                {info.editable ?
                    <input type="text" name="info-name" id="info-name" value={info.name} onChange={handleNameChange} />
                    :
                    <h3>{info.name}</h3>
                }

                <label htmlFor="info-email">Email: </label>
                {info.editable ?
                    <input type="email" name="info-email" id="info-email" value={info.email} onChange={handleEmailChange} />
                    :
                    <h3>{info.email}</h3>
                }

                <label htmlFor="info-phone">Phone: </label>
                {info.editable ?
                    <input type="tel" name="info-phone" id="info-phone" value={info.phone} onChange={handlePhoneChange} />
                    :
                    <h3>{info.phone}</h3>
                }
            </form>

            <button type="submit" id="info-submit-button" onClick={onSubmit}>
                {info.editable ? "Submit" : "Edit"}
            </button>
        </div>
    )
}