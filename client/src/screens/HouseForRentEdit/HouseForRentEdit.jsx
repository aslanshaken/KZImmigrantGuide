import './HouseForRentEdit.css'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';
import { updateOneHouseForRent } from '../../services/postHouses'
import { UsaStatesAndCities, Bedrooms } from '../../assets/Usa'

export default function HouseForRentEdit(props) {
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
    const { id } = useParams();
    const states = UsaStatesAndCities() // get all states
    const bedroomTypes = Bedrooms() // get all bedroom types
    const { currentUser, housesForRent, setHousesForRent } = props
    const history = useHistory();
    const { name, description, state, city, date_move_in, bathroom, cellphone, email, price } = formData;
    const [newImage, setNewImage] = useState(false)
    const [preview, setPreview] = useState(false)

    useEffect(() => {
        const prefillFormData = () => {
            const House = housesForRent.find((arr) => arr.post_house.id === Number(id));
            setFormData({
                name: House.post_house.name,
                description: House.post_house.description,
                state: House.post_house.state,
                city: House.post_house.city,
                date_move_in: House.post_house.date_move_in,
                price: House.post_house.price,
                bathroom: House.post_house.bathroom,
                cellphone: House.post_house.cellphone,
                email: House.post_house.email,
            });
            setNewImage(House.images)
        }
        if (housesForRent.length) {
            prefillFormData();
        }
    }, [housesForRent, id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updateHouse = await updateOneHouseForRent(id, formData);
        const newH = { images: newImage, post_house: updateHouse }
        setHousesForRent(prevState => prevState.map((arr) => {
            return arr.post_house.id === Number(id) ? newH : arr
        }));
        history.push('/account/listings');
    }


    const handleImage = (e) => {
        e.preventDefault();
        setPreview(URL.createObjectURL(e.target.files[0]))
        setNewImage(e.target.files[0])
    }

    const checkImage = () => {
        if (newImage[0]?.url) {
            return newImage[0].url
        } else {
            return "http://www.mylaporetimes.com/wp-content/uploads/2020/07/rent-clipart-for-rent-sign-vector-art-illustration-612.jpg"
        }
    }

    const cities = states[state] // take current state and save all cities to "cities variable"

    console.log(state, city, cities)

    return (
        <div className="house-edit">
            <div className="house-edit-main-photo">
                <img id="house-edit-user-image" src={currentUser?.image === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU" : currentUser?.image.url} />
                <h2>{currentUser?.user.first_name} {currentUser?.user.last_name}</h2>
            </div>
            <div className="house-edit-links">
                <h3><Link to="/account" id="none">Personal Information</Link></h3>
                <h3><Link to="/account/listings" id="none">Listings</Link></h3>
            </div>
            <div className="house-edit-main-container">
                <div>
                    <img id="house-edit-img" src={preview ? preview : checkImage()} />
                    <div className="house-edit-upload-box">
                        <label for="img-input" >
                            <h5 id="house-edit-text">Update Image</h5>
                        </label>
                        <input
                            id="img-input"
                            type="file"
                            onChange={handleImage}
                        />
                    </div>
                </div>
                <form
                    className="house-edit-box"
                    onSubmit={handleUpdate}
                >
                    <h2>Edit</h2>
                    <label>Name:
                        <input
                            type='text'
                            name='name'
                            value={name}
                            maxLength="35"
                            onChange={handleChange}
                        />
                    </label>
                    <label> Bathroom:
                        <select value={bathroom} name="bathroom" onChange={handleChange}>
                            <option selected disabled> Bedroom</option>
                            {bedroomTypes?.map((data) =>
                                <option value={data}>{data}</option>
                            )}
                        </select>
                    </label>
                    <label> Price:
                        <input
                            type='number'
                            name='price'
                            value={price}
                            onChange={handleChange}
                        />
                    </label>
                    <label> Date Move In:
                        <input
                            className='house-edit-date'
                            type='date'
                            name='date_move_in'
                            value={date_move_in}
                            onChange={handleChange}
                        />
                    </label>
                    <label> State:
                        <select value={state} name="state" onChange={(e) => {
                            handleChange(e)
                            formData.city = states[e.target.value][cities?.indexOf(formData.city)] // for city selected update
                        }}>
                            <option selected disabled>State</option>
                            {Object.keys(states).map((oneState) =>
                                <option value={oneState}>{oneState}</option>
                            )}
                        </select>
                    </label>
                    <label> City:
                        <select value={city} name="city" onChange={handleChange}>
                            <option selected disabled> City</option>
                            {cities?.map((data) =>
                                <option value={data}>{data}</option>
                            )}
                        </select>
                    </label>
                    <label> Description:
                        <textarea
                            type='text'
                            name='description'
                            value={description}
                            onChange={handleChange}
                        />
                    </label>
                    <label> Email:
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={handleChange}
                        />
                    </label>
                    <label> CellPhone:
                        <input
                            type='numbers'
                            name='cellphone'
                            value={cellphone}
                            onChange={handleChange}
                        />
                    </label>

                    <br />

                    <div id="house-edit-button">
                        <Link to="/account/listings" className="house-edit-button">Go Back</Link>
                        <button className="house-edit-save-button">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}