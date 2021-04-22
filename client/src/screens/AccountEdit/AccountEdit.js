import './AccountEdit.css'
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { updateOneUser } from '../../services/auth'
import { Link } from "react-router-dom";
import Avatar from 'react-avatar-editor'

export default function AccountEdit(props) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        dob: '',
        cell_phone: '',
        gender: '',
        birth_place: '',
        about_me: '',
        facebook: '',
        instagram: '',
        current_city: '',
    })
    const { currentUser } = props
    const [imageSample, setImageSample] = useState()
    const [imageData, setImageDate] = useState()
    const [preview, setPreview] = useState()
    const id = currentUser?.user.id
    // console.log(currentUser)
    const history = useHistory();
    const { username,
        email,
        first_name,
        last_name,
        dob,
        cell_phone,
        gender,
        birth_place,
        about_me,
        facebook,
        instagram,
        current_city } = formData

    useEffect(() => {
        const prefillFormData = () => {
            setFormData({
                username: currentUser.user.username,
                email: currentUser.user.email,
                first_name: currentUser.user.first_name,
                last_name: currentUser.user.last_name,
                dob: currentUser.user.dob,
                cell_phone: currentUser.user.cell_phone,
                gender: currentUser.user.gender,
                birth_place: currentUser.user.birth_place,
                about_me: currentUser.user.about_me,
                facebook: currentUser.user.facebook,
                instagram: currentUser.user.instagram,
                current_city: currentUser.user.current_city
            });
        }
        if (currentUser) {
            prefillFormData();
        }
    }, [currentUser])
    console.log(gender)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedUser = await updateOneUser(id, formData, imageData);
        // setJobs(prevState => prevState.map((job) => {
        //     return job.id === Number(id) ? updatedJob : job
        // }));
        history.push('/account');
    }


    const handleImage = (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]))
        setImageSample(e.target.files[0])
    }

    const handleImageSave = () => {
        setImageDate(imageSample)
    }

    if (!currentUser) {
        return <p>Loading ...</p>;
    }

    return (
        <div className="account-container">

            <img
                src="https://userscontent2.emaze.com/images/bd7e18ec-b0dd-46b7-98b1-dbd3ab88928a/d1139ad6-60d6-453f-874d-9324ee309762.png"
                className="account-main-photo"
            />

            <div className="account-top-box">
                <img id="user-img" src={preview ? preview : currentUser?.image.url} />

                <div className="upload-box">
                    <label for="img-input" >
                        <h4 id="upload-text">Update Avatar Image</h4>
                    </label>
                    <input
                        id="img-input"
                        type="file"
                        onChange={handleImage}
                    />
                </div>

                <div className="upload-buttons">
                    {preview &&
                        <>
                            <button onClick={() => { setPreview(null) }} >Cancel</button>
                            <button onClick={handleImageSave}>Save</button>
                        </>}

                </div>


                <h1>{currentUser?.user.first_name} {currentUser?.user.last_name}</h1>
            </div>

            <div className="account-screens" >
                <h3 id="will-chosen">Personal Information</h3>
                <h3 id="chosen">My Listings</h3>
            </div>

            <div className="account-user-box">
                <p id="paragraph-head">Basic Info</p>
                <div className="account-user-left-right">
                    <div id="user-left">Username</div> <div id="user-right">
                        <input
                            type='text'
                            name='username'
                            value={username}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="account-user-left-right">
                    <div id="user-left">First Name</div> <div id="user-right">
                        <input
                            type='text'
                            name='first_name'
                            value={first_name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="account-user-left-right">
                    <div id="user-left">Last Name</div> <div id="user-right">
                        <input
                            type='text'
                            name='last_name'
                            value={last_name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="account-user-left-right">
                    <div id="user-left">Birthday</div> <div id="user-right">
                        <input
                            type='date'
                            name='dob'
                            value={dob}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="account-user-left-right">
                    <div id="user-left">Gender </div>
                    <div id="user-right">
                        <select value={gender} onChange={handleChange} name='gender'>
                            <option >Select</option>
                            <option value="male" >Male</option>
                            <option value="female" >Female</option>
                            <option value="other" >Other</option>
                            <option value="not" > Prefer not to say</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="account-user-box">
                <p id="paragraph-head">Contact Info</p>
                <div className="account-user-left-right">
                    <div id="user-left">Email</div> <div id="user-right">
                        <input
                            type='text'
                            name='email'
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="account-user-left-right">
                    <div id="user-left">Cell Phone</div> <div id="user-right">
                        <input
                            type='text'
                            name='cell_phone'
                            value={cell_phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className="account-user-box">
                <p id="paragraph-head">Choose what others see</p>
                <div className="account-user-left-right">
                    <div id="user-left">Birthplace: </div> <div id="user-right">
                        <input
                            type='text'
                            name='birth_place'
                            value={birth_place}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="account-user-left-right">
                    <div id="user-left">Current City:</div> <div id="user-right">
                        <input
                            type='text'
                            name='current_city'
                            value={current_city}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="account-user-left-right">
                    <div id="user-left">About Me: </div> <div id="user-right">
                        <textarea
                            type='text'
                            name='about_me'
                            value={about_me}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="account-user-left-right">
                    <div id="user-left">
                        <img src="https://img.icons8.com/cute-clipart/128/000000/facebook-new.png" />
                    </div>
                    <div id="user-right">
                        <input
                            type='text'
                            name='facebook'
                            value={facebook}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="account-user-left-right">
                    <div id="user-left">
                        <img src="https://img.icons8.com/cute-clipart/64/000000/instagram-new.png" />
                    </div>
                    <div id="user-right">
                        <input
                            type='text'
                            name='instagram'
                            value={instagram}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="account-user-left-right">
                    <div id="user-left">
                        <img src="https://img.icons8.com/cute-clipart/64/000000/twitter.png" />
                    </div>
                    <div id="user-right">
                        <input
                            type='text'
                            name='current_city'
                            value={instagram}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="account-user-left-right">
                    <div id="user-left">
                        <img src="https://img.icons8.com/plasticine/100/000000/telegram-app.png" />
                    </div>
                    <div id="user-right">
                        <input
                            type='text'
                            name='current_city'
                            value={instagram}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="account-user-left-right">
                    <div id="user-left">
                        <img src="https://img.icons8.com/cute-clipart/128/000000/whatsapp.png" />
                    </div>
                    <div id="user-right">
                        <input
                            type='text'
                            name='current_city'
                            value={instagram}
                            onChange={handleChange}
                        />
                    </div>
                </div>

            </div>

            <Link to="account-edit" className="account-user-edit-button">
                Save
        </Link>
            <Link to="account-edit" className="account-user-edit-button">
                Go Back
        </Link>
        </div >
    )
}