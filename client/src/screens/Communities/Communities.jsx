import './Communities.css'
import { Link } from 'react-router-dom';
import Facebook from '../../assets/facebook.svg'
import { useState, useEffect } from 'react';
import Whatsapp from '../../assets/whatsapp.svg'
import Telegram from '../../assets/telegram.svg'
import { UsaStatesAndCities } from '../../assets/Usa'
import Video from '../../components/Video/Video'

export default function Communities(props) {
    const { allCommunities, currentUser } = props
    const currentDate = new Date()
    // FILTER
    const states = UsaStatesAndCities() // get a list of states
    const [cities, setCities] = useState([]) // get chosen cities county
    const [formData, setFormData] = useState({
        state: '',
        city: '',
        popularity: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    // FILTER

    function filterDate(str) { // filter time
        if (str) {
            const mdy = str.split('T')[0]
            const date = mdy.split('-')[1] + '-' + mdy.split('-')[2] + '-' + mdy.split('-')[0]
            return date
        }
    }

    function getCurrentDate(str) { // filter time
        if (str) {
            const mdy = str.split('T')[0]
            const date = mdy.split('-')[2]
            return date
        }
    }

    function CommunityList(community) {
        if (getCurrentDate(community.community?.created_at) == currentDate.getDate()) {
            return false
        } else {
            return (
                <div className="community-box">
                    <div className="community-box-left">
                        <h2>{community.community?.city}</h2>
                        <img src={!community.image ? "https://socialmediaweek.org/wp-content/blogs.dir/1/files/FB-Admins.jpg" : community.image?.url} />
                        <h4><b>{community.community?.name_community}</b></h4>
                        <p><b>State:</b> {community.community?.state}</p>
                        <p><b>Members:</b> {community.community?.members_count}</p>
                        <p><b>Admin:</b> {community.community?.contact_name}</p>
                        <p><b>Cellphone:</b> {community.community?.contact_phone}</p>
                        <p><b>Email:</b> {community.community?.contact_email}</p>
                        <p><b>Last update: </b> {filterDate(community.community?.updated_at)}</p>
                        <div className='community-box-links'>
                            <a href={community.community?.facebook}><img src={Facebook} /></a>
                            <a href={community.community?.telegram}><img src={Telegram} /></a>
                            <a href={community.community?.whatsapp}><img src={Whatsapp} /></a>
                        </div>
                    </div>
                </div>
            )
        }
    }

    function FilterData(data) { // FILTER
        if (!formData.popularity) {
            if (formData.state == data.community?.state) {
                if (formData.city == data.community?.city) {
                    return CommunityList(data)
                } else if (!formData.city) { return CommunityList(data) }
            }

        }
    }

    return (
        <div>
            <div className="communities-main-container">

                <h1 className="communities-main-container-text"> Community</h1>
                <div className="communities-choose">
                    <select required name='state' onChange={(e) => {
                        setCities(states[e.target.value])
                        handleChange(e)
                        formData.city = states[e.target.value][cities.indexOf(formData.city)] // for city selected update
                    }}>
                        <option selected disabled>State</option>
                        {Object.keys(states).map((oneState) =>
                            <option value={oneState}>{oneState}</option>
                        )}
                    </select>
                    <select name="city" onChange={handleChange}>
                        <option selected disabled> City</option>
                        {cities && cities.map((city) =>
                            <option value={city}>{city}</option>
                        )}
                    </select>
                    <select>
                        <option>Select Popularity</option>
                    </select>
                    <button className="communities-select-button" onClick={() => {
                        window.location.reload();
                    }}><img src="https://img.icons8.com/ios-glyphs/30/000000/recurring-appointment.png" />RESET SEARCH</button>
                </div>
                {currentUser ?
                    <h5 className="communities-add-new"><Link to="/community/add" id="none">Request to add a new community</Link></h5>
                    :
                    <h5 className="communities-add-new" onClick={() => alert("Please Sign in or Register if you want to add a new community")}>Request to add a new community</h5>
                }
                {/* <Video /> */}
                <div className="communities-main-boxes">
                    {allCommunities.map((community) => {
                        if (formData.state) {
                            return FilterData(community)
                        } else return CommunityList(community)
                    })}
                </div>
            </div>
        </div>
    )
}