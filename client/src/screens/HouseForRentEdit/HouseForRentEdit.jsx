import './HouseForRentEdit.css'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';
import { updateOneHouseForRent } from '../../services/postHouses'

export default function HouseForRentEdit(props) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        state: '',
        city: '',
        date_move_in: '',
        price: '',
        bathroom: '',
        cellphone: '',
        email: '',
    })
    const { id } = useParams();
    const { currentUser, houseForRent, setHouseForRent } = props
    const history = useHistory();
    const { name, description, state, city, date_move_in, bathroom, cellphone, email, price } = formData;
    const [newImage, setNewImage] = useState(false)
    const [preview, setPreview] = useState(false)

    useEffect(() => {
        const prefillFormData = () => {
            const Houses = houseForRent.find((arr) => arr.post_house.id === Number(id));
            setFormData({
                name: Houses.post_house.name,
                description: Houses.description,
                state: Houses.post_house.state,
                city: Houses.post_house.city,
                date_move_in: Houses.post_house.date_move_in,
                price: Houses.post_house.price,
                bathroom: Houses.post_house.bathroom,
                cellphone: Houses.post_house.cellphone,
                email: Houses.post_house.email,
            });
        }
        if (houseForRent.length) {
            prefillFormData();
        }
    }, [houseForRent, id])

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
        setHouseForRent(prevState => prevState.map((arr) => {
            return arr.post_house.id === Number(id) ? updateHouse : arr
        }));
        history.push('/account-listings');
    }


    const handleImage = (e) => {
        e.preventDefault();
        setPreview(URL.createObjectURL(e.target.files[0]))
        setNewImage(e.target.files[0])
    }

    const checkImage = () => {
        if (currentUser?.image === null) {
            return "https://socialmediaweek.org/wp-content/blogs.dir/1/files/FB-Admins.jpg"
        } else {
            return currentUser?.image.url
        }
    }

    return (
        <div className="house-edit">
            <div className="house-edit-main-photo">
                <img id="house-edit-user-image" src={currentUser?.image === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU" : currentUser?.image.url} />
                <h2>{currentUser?.user.first_name} {currentUser?.user.last_name}</h2>
            </div>
            <div className="house-edit-links">
                <h3><Link to="/account" id="none">Personal Information</Link></h3>
                <h3><Link to="/account-listings" id="none">Listings</Link></h3>
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
                            name='name_house'
                            value={name_house}
                            maxLength="35"
                            onChange={handleChange}
                        />
                    </label>
                    <label> State:
                        <input
                            type='text'
                            name='state'
                            value={state}
                            onChange={handleChange}
                        />
                    </label>
                    <label> City:
                        <input
                            type='text'
                            name='city'
                            value={city}
                            maxLength="300"
                            onChange={handleChange}
                        />
                    </label>
                    <label> Members:
                        <input
                            type='number'
                            name='members_count'
                            value={members_count}
                            onChange={handleChange}
                        />
                    </label>
                    <label> Name:
                        <input
                            type='text'
                            name='contact_name'
                            value={contact_name}
                            onChange={handleChange}
                        />
                    </label>
                    <label> Email:
                        <input
                            type='email'
                            name='contact_email'
                            value={contact_email}
                            onChange={handleChange}
                        />
                    </label>
                    <label> CellPhone:
                        <input
                            type='numbers'
                            name='contact_phone'
                            value={contact_phone}
                            onChange={handleChange}
                        />
                    </label>
                    <label> Facebook:
                        <input
                            type='text'
                            name='facebook'
                            value={facebook}
                            onChange={handleChange}
                        />
                    </label>
                    <label> Telegram:
                        <input
                            type='text'
                            name='telegram'
                            value={telegram}
                            onChange={handleChange}
                        />
                    </label>
                    <label> WhatsApp:
                        <input
                            type='text'
                            name='whatsapp'
                            value={whatsapp}
                            onChange={handleChange}
                        />
                    </label>

                    <br />

                    <div id="house-edit-button">
                        <Link to="/account-listings" className="house-edit-button">Go Back</Link>
                        <button className="house-edit-save-button">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}