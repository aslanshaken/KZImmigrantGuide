import './CreateHouseOffer.css'
import { useState } from 'react';
import { UsaStatesAndCities, Bedrooms } from '../../assets/Usa'
import { postNewHouseForRent } from '../../services/postHouses'
import Empty from '../../assets/empty-image.jpg'

export default function CreateHouseOffer(props) {

    // Root
    const [formData, setFormData] = useState({
        bathroom: '',
        cellphone: '',
        city: '',
        date_move_in: '',
        description: '',
        email: '',
        name: '',
        price: '',
        state: '',
    })
    const { name, description, state, city, date_move_in, bathroom, cellphone, email, price } = formData;

    // From App.js
    const { currentUser, setHousesForRent } = props

    // States,Cities and received message
    const [cities, setCities] = useState([])
    const bedroomsType = Bedrooms()
    const [stateToggle, setStateToggle] = useState(true)
    const [received, setReceived] = useState(false)
    const states = UsaStatesAndCities()

    // Images
    const [newImage, setNewImage] = useState(false)
    const [preview, setPreview] = useState(false)

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
        const newHouse = await postNewHouseForRent(formData);
        setHousesForRent(prevState => [...prevState, newHouse]);
        setReceived(true)
        setCities()
        setFormData({
            bathroom: '',
            cellphone: '',
            city: '',
            date_move_in: '',
            description: '',
            email: '',
            name: '',
            price: '',
            state: '',
        })
    }


    function Call() {
        return (
            <div className="create-house-received-text">
                Thank you! We have received your information. It will be reviewed by administration and submitted within 2 hours.
            </div>

        )
    }

    return (
        <div>
            {currentUser ?
                <div className="create-house-main-container">
                    <form className="create-house-box" onSubmit={(e) => handleCreate(e)}>
                        <p className="create-house-box-header">Add House Offer</p>
                        <div className="create-house-box-div">
                            <label>
                                <p>Title*</p>
                                <input
                                    className="create-house-box-input-full"
                                    type='text'
                                    name='name'
                                    value={name}
                                    maxLength="50"
                                    required
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="create-house-box-div">
                            <label>
                                <p>Email*</p>
                                <input
                                    className="create-house-box-input-full"
                                    type='email'
                                    name='email'
                                    value={email}
                                    required
                                    maxLength="30"
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="create-house-box-div">
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
                                <p>Date to move in*</p>
                                <input
                                    type='date'
                                    name='date_move_in'
                                    value={date_move_in}
                                    required
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="create-house-box-div">
                            <label>
                                <p>Bathroom*</p>
                                <select name="bathroom" onChange={handleChange}>
                                    <option selected disabled value=''>Bedroom</option>
                                    {bedroomsType.map((type) =>
                                        <option value={type}>{type}</option>
                                    )}
                                </select>
                            </label>
                            <label>
                                <p>Price /monthly*</p>
                                <input
                                    type='number'
                                    name='price'
                                    placeholder="$"
                                    value={price}
                                    required
                                    onChange={handleChange} />
                            </label>
                            <label>
                                <p>Cellphone*</p>
                                <input
                                    type='text'
                                    name='cellphone'
                                    value={cellphone}
                                    required
                                    maxLength="12"
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="create-house-box-div">
                            <textarea
                                className="create-house-box-textarea-full"
                                type='text'
                                placeholder="Description"
                                name='description'
                                value={description}
                                required
                                onChange={handleChange} />
                        </div>
                        <div className="create-house-box-div">
                            <img className="create-house-box-img" src={preview ? preview : Empty} />
                        </div>
                        <div className="create-house-box-div-img-input">
                            <label>
                                <input
                                    type="file"
                                    onChange={handleImage}
                                />
                            </label>
                        </div>
                        <div className="create-house-box-div">
                            <button>Submit</button>
                        </div>
                    </form>
                    {received && Call()}
                </div>
                :
                <div className="create-house-main-container">
                    Loading ....
                </div>
            }
        </div >
    )
}