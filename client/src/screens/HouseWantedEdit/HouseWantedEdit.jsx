import './HouseWantedEdit.css'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';
import { updateOneHouseWanted } from '../../services/postHousesWanted'

export default function HouseWantedEdit(props) {
    const [formData, setFormData] = useState({
        bathroom: '',
        cellphone: '',
        city: '',
        date_move_in: '',
        about_me: '',
        email: '',
        name: '',
        state: '',
    })
    const { id } = useParams();
    const { currentUser, houseWanted, setHouseWanted } = props
    const history = useHistory();
    const { name, about_me, state, city, date_move_in, bathroom, cellphone, email} = formData;
    const [newImage, setNewImage] = useState(false)
    const [preview, setPreview] = useState(false)

    useEffect(() => {
        const prefillFormData = () => {
            const House = houseWanted.find((arr) => arr.post_house_wanted.id === Number(id));
            setFormData({
                name: House.post_house_wanted.name,
                about_me: House.post_house_wanted.about_me,
                state: House.post_house_wanted.state,
                city: House.post_house_wanted.city,
                date_move_in: House.post_house_wanted.date_move_in,
                bathroom: House.post_house_wanted.bathroom,
                cellphone: House.post_house_wanted.cellphone,
                email: House.post_house_wanted.email,
            });
            setNewImage(House.image)
        }
        if (houseWanted.length) {
            prefillFormData();
        }
    }, [houseWanted, id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updateHouse = await updateOneHouseWanted(id, formData);
        const newH = { image: newImage, post_house_wanted: updateHouse }
        setHouseWanted(prevState => prevState.map((arr) => {
            return arr.post_house_wanted.id === Number(id) ? newH : arr
        }));
        history.push('/account/listings');
    }


    const handleImage = (e) => {
        e.preventDefault();
        setPreview(URL.createObjectURL(e.target.files[0]))
        setNewImage(e.target.files[0])
    }

    const checkImage = () => {
        if (newImage?.url) {
            return newImage[0]?.url
        } else {
            return "https://as2.ftcdn.net/jpg/01/75/38/45/500_F_175384555_nJHTQaacAVkFekOTpZCtPCzUzy572yGf.jpg"
        }
    }

    return (
        <div className="house-wanted-edit">
            <div className="house-wanted-edit-main-photo">
                <img id="house-wanted-edit-user-image" src={currentUser?.image === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU" : currentUser?.image.url} />
                <h2>{currentUser?.user.first_name} {currentUser?.user.last_name}</h2>
            </div>
            <div className="house-wanted-edit-links">
                <h3><Link to="/account" id="none">Personal Information</Link></h3>
                <h3><Link to="/account/listings" id="none">Listings</Link></h3>
            </div>
            <div className="house-wanted-edit-main-container">
                <div>
                    <img id="house-wanted-edit-img" src={preview ? preview : checkImage()} />
                    <div className="house-wanted-edit-upload-box">
                        <label for="img-input" >
                            <h5 id="house-wanted-edit-text">Update Image</h5>
                        </label>
                        <input
                            id="img-input"
                            type="file"
                            onChange={handleImage}
                        />
                    </div>
                </div>
                <form
                    className="house-wanted-edit-box"
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
                    <label> About Me:
                        <input
                            type='text'
                            name='about_me'
                            value={about_me}
                            onChange={handleChange}
                        />
                    </label>
                    <label> Bathroom:
                        <input
                            type='number'
                            name='bathroom'
                            value={bathroom}
                            onChange={handleChange}
                        />
                    </label>
                    <label> Date Move In:
                        <input
                            className='house-wanted-edit-date'
                            type='date'
                            name='date_move_in'
                            value={date_move_in}
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

                    <div id="house-wanted-edit-button">
                        <Link to="/account/listings" className="house-wanted-edit-button">Go Back</Link>
                        <button className="house-wanted-edit-save-button">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}