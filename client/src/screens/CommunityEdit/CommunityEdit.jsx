import './CommunityEdit.css' // CSS

import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';

import { updateOneCommunity } from '../../services/communities' // API
import { UsaStatesAndCities } from '../../assets/Usa' // Get a lists of States and Cities

export default function CommunityEdit(props) {
    const [formData, setFormData] = useState({ // create empty object for community api
        city: '',
        contact_email: '',
        contact_name: '',
        contact_phone: '',
        facebook: '',
        members_count: '',
        name_community: '',
        state: '',
        telegram: '',
        whatsapp: '',
    })
    const { id } = useParams(); // receive id from route
    const states = UsaStatesAndCities() // get all states
    const { currentUser, allCommunities, setAllCommunities } = props // receive info from App.js
    const history = useHistory();
    const { city, contact_email, contact_name, contact_phone, facebook, members_count, name_community, state, telegram, whatsapp } = formData; // take from formData and make them available separate 
    
    const [newImage, setNewImage] = useState(false) // image
    const [preview, setPreview] = useState(false) //  preview image

    useEffect(() => {
        const prefillFormData = () => {
            const CommunityPost = allCommunities.find((arr) => arr.community.id === Number(id)); // if id == id save to CommunityPost
            setFormData({ // updates empty object with newest information from API
                city: CommunityPost.community.city,
                contact_email: CommunityPost.community.contact_email,
                contact_name: CommunityPost.community.contact_name,
                contact_phone: CommunityPost.community.contact_phone,
                facebook: CommunityPost.community.facebook,
                members_count: CommunityPost.community.members_count,
                name_community: CommunityPost.community.name_community,
                state: CommunityPost.community.state,
                telegram: CommunityPost.community.telegram,
                whatsapp: CommunityPost.community.whatsapp,
            });
        }
        if (allCommunities.length) { // if allCommunities true call function prefillFormData
            prefillFormData();
        }
    }, [allCommunities, id]) // when allCommunities and ID updates use useEffect 

    const handleChange = (e) => { // every time we change the value, save to formData object
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleUpdate = async (e) => { // if save is clicked do below
        e.preventDefault();
        const updatedCommunity = await updateOneCommunity(id, formData); // call api and pass over id and newest formData
        setAllCommunities(prevState => prevState.map((arr) => { // go to all communities and update just created community
            return arr.community.id === Number(id) ? updatedCommunity : arr
        }));
        history.push('/account/listings');
    }


    const handleImage = (e) => { // for community image
        e.preventDefault();
        setPreview(URL.createObjectURL(e.target.files[0]))
        setNewImage(e.target.files[0])
    }

    const checkImage = () => { // checks user's image
        if (currentUser?.image === null) {
            return "https://socialmediaweek.org/wp-content/blogs.dir/1/files/FB-Admins.jpg"
        } else {
            return currentUser?.image.url
        }
    }

    const cities = states[state] // take current state and save all cities to "cities variable"

    return (
        <div className="community-edit">
            <div className="community-edit-main-photo">
                <img id="community-edit-user-image" src={currentUser?.image === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU" : currentUser?.image.url} />
                <h2>{currentUser?.user.first_name} {currentUser?.user.last_name}</h2>
            </div>
            <div className="community-edit-links">
                <h3><Link to="/account" id="none">Personal Information</Link></h3>
                <h3><Link to="/account/listings" id="none">Listings</Link></h3>
            </div>
            <div className="community-edit-main-container">
                <div>
                    <img id="community-edit-img" src={preview ? preview : checkImage()} />
                    <div className="community-edit-upload-box">
                        <label for="img-input" >
                            <h5 id="community-edit-text">Update Image</h5>
                        </label>
                        <input
                            id="img-input"
                            type="file"
                            onChange={handleImage}
                        />
                    </div>
                </div>
                <form
                    className="community-edit-box"
                    onSubmit={handleUpdate}
                >
                    <h2>Edit</h2>
                    <label>Community Name:
                        <input
                            type='text'
                            name='name_community'
                            value={name_community}
                            maxLength="35"
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
                    <div id="community-edit-button">
                        <Link to="/account/listings" className="community-edit-button">Go Back</Link>
                        <button className="community-edit-save-button">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}