import './AccountEdit.css'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { updateOneUser } from '../../services/auth'
import { Link } from "react-router-dom";

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
    const { currentUser, setCurrentUser } = props
    const [newImage, setNewImage] = useState(false)
    const [preview, setPreview] = useState(false)
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


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    // console.log(newImage)

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedUser = await updateOneUser(id, formData, newImage);
        console.log(updatedUser)
        history.push('/account');
        history.go(0)
    }

    const handleImage = (e) => {
        e.preventDefault();
        setPreview(URL.createObjectURL(e.target.files[0]))
        setNewImage(e.target.files[0])
    }

    const checkImage = () => {
        if (currentUser.image === null) {
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU"
        } else {
            return currentUser?.image.url
        }
    }

    // console.log(id)
    // console.log(formData)
    // console.log(newImage)

    if (!currentUser) {
        return <p>Loading ...</p>;
    }

    return (
        <div className="account-edit-container">
            <div className="account-edit-middle">
                <div className="account-edit-left">
                    <div className="account-edit-box">
                        <div className="account-edit-image">
                            <h2>{currentUser?.user.first_name} {currentUser?.user.last_name}</h2>
                            <img id="user-edit-img" src={preview ? preview : checkImage()} />
                            <div className="upload-box">
                                <label for="img-input" >
                                    <h5 id="upload-text">Update Avatar Image</h5>
                                </label>
                                <input
                                    id="img-input"
                                    type="file"
                                    onChange={handleImage}
                                />
                            </div>
                        </div>
                        <p id="paragraph-edit-head">My Profile</p>
                        <div className="account-edit-left-right">
                            <div id="user-edit-left">Username</div>
                            <div id="user-edit-right">
                                <input
                                    type='text'
                                    name='username'
                                    value={username}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="account-edit-left-right">
                            <div id="user-edit-left">Password</div>
                            <div id="user-edit-password">
                                <Link to="/forgotpassword" id="none"> change password</Link>
                            </div>
                        </div>
                        <div className="account-edit-left-right">
                            <div id="user-edit-left">First Name</div> <div id="user-edit-right">
                                <input
                                    type='text'
                                    name='first_name'
                                    value={first_name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="account-edit-left-right">
                            <div id="user-edit-left">Last Name</div> <div id="user-edit-right">
                                <input
                                    type='text'
                                    name='last_name'
                                    value={last_name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="account-edit-left-right">
                            <div id="user-edit-left">Birthday</div> <div id="user-edit-right">
                                <input
                                    type='date'
                                    name='dob'
                                    value={dob}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="account-edit-left-right">
                            <div id="user-edit-left">Gender </div>
                            <div id="user-edit-right">
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

                    <div className="account-edit-box">
                        <p id="paragraph-head">Contact Info</p>
                        <div className="account-user-left-right">
                            <div id="user-edit-left">Email</div> <div id="user-edit-right">
                                <input
                                    type='text'
                                    name='email'
                                    value={email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="account-edit-left-right">
                            <div id="user-edit-left">Cell Phone</div> <div id="user-edit-right">
                                <input
                                    type='text'
                                    name='cell_phone'
                                    value={cell_phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <Link to="account" className="account-edit-button">
                        Go Back
                    </Link>
                </div>

                <div className="account-edit-right">
                    <div className="account-edit-box">
                        <p id="paragraph-edit-head">Choose what others see</p>
                        <div className="account-edit-left-right">
                            <div id="user-edit-left">Birthplace: </div> <div id="user-edit-right">
                                <input
                                    type='text'
                                    name='birth_place'
                                    value={birth_place}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="account-edit-left-right">
                            <div id="user-edit-left">Current City:</div> <div id="user-edit-right">
                                <input
                                    type='text'
                                    name='current_city'
                                    value={current_city}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="account-edit-left-right">
                            <div id="user-edit-left">About Me: </div> <div id="user-edit-right">
                                <textarea
                                    maxLength="200"
                                    type='text'
                                    name='about_me'
                                    value={about_me}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="account-edit-left-right">
                            <div id="user-edit-left">
                                <img src="https://img.icons8.com/cute-clipart/128/000000/facebook-new.png" />
                            </div>
                            <div id="user-edit-right">
                                <input
                                    type='text'
                                    name='facebook'
                                    value={facebook}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="account-edit-left-right">
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
                        <div className="account-edit-left-right">
                            <div id="user-edit-left">
                                <img src="https://img.icons8.com/cute-clipart/64/000000/twitter.png" />
                            </div>
                            <div id="user-edit-right">
                                <input
                                    type='text'
                                    name='current_city'
                                    value={instagram}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="account-edit-left-right">
                            <div id="user-edit-left">
                                <img src="https://img.icons8.com/plasticine/100/000000/telegram-app.png" />
                            </div>
                            <div id="user-edit-right">
                                <input
                                    type='text'
                                    name='current_city'
                                    value={instagram}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="account-edit-left-right">
                            <div id="user-edit-left">
                                <img src="https://img.icons8.com/cute-clipart/128/000000/whatsapp.png" />
                            </div>
                            <div id="user-edit-right">
                                <input
                                    type='text'
                                    name='current_city'
                                    value={instagram}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="account-edit-button" onClick={handleUpdate}>
                        Save
                    </div>
                </div>
            </div>
        </div >
    )
}