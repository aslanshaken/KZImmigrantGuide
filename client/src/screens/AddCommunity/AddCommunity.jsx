import { useState } from 'react'
import './AddCommunity.css'

export default function AddCommunity(props) {
    const [formData, setFormData] = useState({
        city: '',
        contact_email: '',
        contact_name: '',
        contact_phone: '',
        facebook: '',
        members_count: '',
        name_community: '',
        state: '',
        telegram: '',
        whatsapp: ''
    })
    const { city, contact_email, contact_name, contact_phone, facebook, members_count, name_community, state, telegram, whatsapp } = formData
    const { currentUser } = props

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    // const handleCreate = async (e) => {
    //     e.preventDefault();
    //     const newJob = await postNewJobForEmployee(formData);
    //     setJobs(prevState => [...prevState, newJob]);
    //     history.push('/available-jobs');
    // }


    return (
        <div>
            {currentUser ?
                <div className="community-add-main-container">
                    <form className="community-add-box">
                        <p className="community-add-box-header">Add New Community</p>
                        <div className="community-add-box-name-members">
                            <label>
                                <p>Community Name </p>
                                <input
                                    type='text'
                                    name='name_community'
                                    value={name_community}
                                    maxLength="35"
                                    onChange={handleChange} />
                            </label>
                            <label>
                                <p>How many members? </p>
                                <input
                                    type='number'
                                    name='members_count'
                                    value={members_count}
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="community-add-box-name-members">
                            <label>
                                <p>State </p>
                                <input
                                    type='text'
                                    name='state'
                                    value={state}
                                    onChange={handleChange} />
                            </label>
                            <label>
                                <p>City </p>
                                <input
                                    type='text'
                                    name='city'
                                    value={city}
                                    maxLength="300"
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="community-add-box-name-members">
                            <label>
                                <p>Admin </p>
                                <input
                                    type='text'
                                    name='contact_name'
                                    value={contact_name}
                                    onChange={handleChange} />
                            </label>
                            <label>
                                <p>Email </p>
                                <input
                                    type='email'
                                    name='contact_email'
                                    value={contact_email}
                                    onChange={handleChange} />
                            </label>
                            <label>
                                <p>CellPhone </p>
                                <input
                                    type='numbers'
                                    name='contact_phone'
                                    value={contact_phone}
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="community-add-box-name-members">
                            <label>
                                <p>Facebook </p>
                                <input
                                    type='text'
                                    name='facebook'
                                    value={facebook}
                                    onChange={handleChange} />
                            </label>
                            <label>
                                <p>Telegram </p>
                                <input
                                    type='text'
                                    name='telegram'
                                    value={telegram}
                                    onChange={handleChange} />
                            </label>
                            <label>
                                <p>WhatsApp </p>
                                <input
                                    type='text'
                                    name='whatsapp'
                                    value={whatsapp}
                                    onChange={handleChange} />
                            </label>
                        </div>
                    </form>
                </div>
                :
                <div className="community-add-main-container">
                    Loading ....
                </div>
            }
        </div>
    )
}