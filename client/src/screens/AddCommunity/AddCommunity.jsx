import { useState } from 'react'
import './AddCommunity.css'
import Empty from '../../assets/empty-image.jpg'
import { postNewCommunity } from '../../services/communities'
import { UsaStatesAndCities } from '../../assets/Usa'

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
    const { currentUser, setAllCommunities } = props
    const [newImage, setNewImage] = useState(false)
    const [preview, setPreview] = useState(false)
    const [received, setReceived] = useState(false)
    const states = UsaStatesAndCities()
    const [cities, setCities] = useState([])
    const [stateToggle, setStateToggle] = useState(true)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleImage = (e) => {
        e.preventDefault();
        setPreview(URL.createObjectURL(e.target.files[0]))
        setNewImage(e.target.files[0])
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        const newCommunity = await postNewCommunity(formData);
        setAllCommunities(prevState => [...prevState, newCommunity]);
        setReceived(true)
        setCities()
        // setStateToggle(false)
        setFormData({
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
    }

    function Call() {
        return (
            <div className="community-add-received-text">
                Thank you! We have received your information. It will be reviewed by administration and submitted within 24 hours.
            </div>

        )
    }

    // If state selected map thru all states find that state, and then save selected state's cities to variable called cities.
    // formData?.state && Object.keys(states).map((oneState) => oneState == formData.state && cities.push(states[oneState]))


    return (
        <div>
            {currentUser ?
                <div className="community-add-main-container">
                    <form className="community-add-box" onSubmit={(e) => handleCreate(e)}>
                        <p className="community-add-box-header">Add New Community</p>
                        <div className="community-add-box-div">
                            <label>
                                <p>Community Name*</p>
                                <input
                                    className="community-add-box-input-full"
                                    type='text'
                                    name='name_community'
                                    value={name_community}
                                    maxLength="50"
                                    required
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="community-add-box-div">
                            <label>
                                <p>State*</p>
                                <select required="required" name='state' onChange={(e) => {
                                    handleChange(e)
                                    setCities(states[e.target.value])
                                }}>
                                    <option selected disabled> Select State </option>
                                    {stateToggle && Object.keys(states).map((oneState) => <option value={oneState}>{oneState}</option>)}
                                </select>
                            </label>
                            <label>
                                <p>City*</p>
                                <select name='city' required="required" onChange={(e) => handleChange(e)} >
                                    <option selected disabled > Select City </option>
                                    {cities && cities.map((city) => <option value={city}>{city}</option>)}
                                </select>
                            </label>
                            <label>
                                <p>How many members?*</p>
                                <input
                                    type='number'
                                    name='members_count'
                                    value={members_count}
                                    required
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="community-add-box-div">
                            <label>
                                <p>Admin name*</p>
                                <input
                                    type='text'
                                    name='contact_name'
                                    value={contact_name}
                                    required
                                    maxLength="23"
                                    onChange={handleChange} />
                            </label>
                            <label>
                                <p>Email*</p>
                                <input
                                    type='email'
                                    name='contact_email'
                                    value={contact_email}
                                    required
                                    maxLength="30"
                                    onChange={handleChange} />
                            </label>
                            <label>
                                <p>Cellphone*</p>
                                <input
                                    type='text'
                                    name='contact_phone'
                                    value={contact_phone}
                                    required
                                    maxLength="12"
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="community-add-box-div">
                            <label>
                                <p>Facebook URL </p>
                                <input
                                    type='text'
                                    name='facebook'
                                    value={facebook}
                                    onChange={handleChange} />
                            </label>
                            <label>
                                <p>Telegram URL </p>
                                <input
                                    type='text'
                                    name='telegram'
                                    value={telegram}
                                    onChange={handleChange} />
                            </label>
                            <label>
                                <p>WhatsApp URL </p>
                                <input
                                    type='text'
                                    name='whatsapp'
                                    value={whatsapp}
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="community-add-box-div">
                            <img className="community-add-box-img" src={preview ? preview : Empty} />
                        </div>
                        <div className="community-add-box-div-img-input">
                            <label>
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
                    {received && Call()}
                </div>
                :
                <div className="community-add-main-container">
                    Loading ....
                </div>
            }
        </div >
    )
}