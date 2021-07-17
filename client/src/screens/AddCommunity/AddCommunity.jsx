import { useState } from 'react'
import './AddCommunity.css'
import Empty from '../../assets/empty-image.jpg'

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
    const [newImage, setNewImage] = useState(false)
    const [preview, setPreview] = useState(false)

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

    const handleImage = (e) => {
        e.preventDefault();
        setPreview(URL.createObjectURL(e.target.files[0]))
        setNewImage(e.target.files[0])
    }

    return (
        <div>
            {currentUser ?
                <div className="community-add-main-container">
                    <form className="community-add-box">
                        <p className="community-add-box-header">Add New Community</p>
                        <div className="community-add-box-div">
                            <label>
                                <p>Community Name </p>
                                <input
                                    type='text'
                                    name='name_community'
                                    value={name_community}
                                    maxLength="35"
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="community-add-box-div">
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
                            <label>
                                <p>How many members? </p>
                                <input
                                    type='number'
                                    name='members_count'
                                    value={members_count}
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="community-add-box-div">
                            <label>
                                <p>Admin name </p>
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
                        <div className="community-add-box-div">
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
                        <div className="community-add-box-div">
                            <img  className="community-add-box-img" src={preview ? preview : Empty} />
                        </div>
                        <div className="community-add-box-div">
                            <label>
                                <h5>Add Image</h5>
                                <input
                                    type="file"
                                    onChange={handleImage}
                                />
                            </label>
                        </div>
                        <div className="community-add-box-div">
                            <button>Submit</button>
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