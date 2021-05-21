import './CommunityEdit.css'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';
import { updateOneCommunity } from '../../services/communities'

export default function CommunityEdit(props) {
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
        whatsapp: '',
    })
    const { id } = useParams();
    const { currentUser, communities, setCommunities } = props
    const history = useHistory();
    const { city, contact_email, contact_name, contact_phone, facebook, members_count, name_community, state, telegram, whatsapp } = formData;
    const [img, setImg] = useState()

    useEffect(() => {
        const prefillFormData = () => {
            const CommunityPost = communities.find((arr) => arr.community.id === Number(id));
            CommunityPost.image === null ? setImg("https://socialmediaweek.org/wp-content/blogs.dir/1/files/FB-Admins.jpg") : setImg(CommunityPost.image.url)
            setFormData({
                city: CommunityPost.community.city ,
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
        if (communities.length) {
            prefillFormData();
        }
    }, [communities, id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedCommunity = await updateOneCommunity(id, formData);
        setCommunities(prevState => prevState.map((arr) => {
            return arr.community.id === Number(id) ? updatedCommunity : arr
        }));
        history.push('/account-listings');
    }

    return (
        <div className="community-edit">
            <div className="community-edit-main-photo">
                <img id="community-edit-user-image" src={currentUser?.image === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU" : currentUser?.image.url} />
                <h2>{currentUser?.user.first_name} {currentUser?.user.last_name}</h2>
            </div>
            <div className="community-edit-links">
                <h3><Link to="/account" id="none">Personal Information</Link></h3>
                <h3><Link to="/account-listings" id="none">Listings</Link></h3>
            </div>
            <div className="community-edit-main-container">
                <img id="community-edit-img" src={img} />
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

                    <div id="community-edit-button">
                        <Link to="/account-listings" className="community-edit-button">Go Back</Link>
                        <button className="community-edit-save-button">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}