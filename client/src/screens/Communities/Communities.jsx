import './Communities.css'
import { Link } from 'react-router-dom';
import Facebook from '../../assets/facebook.svg'
import Whatsapp from '../../assets/whatsapp.svg'
import Telegram from '../../assets/telegram.svg'
import { UsaStatesAndCities } from '../../assets/Usa'

export default function Communities(props) {
    const { allCommunities, currentUser } = props
    const currentDate = new Date()

    console.log(allCommunities)
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

    return (
        <div>
            {currentUser ?
                <h5 className="communities-add-new"><Link to="/community-add" id="none">Request to add a new community</Link></h5>
                :
                <h5 className="communities-add-new" onClick={() => alert("Please Sign in or Register if you want to add a new community")}>Request to add a new community</h5>
            }
            <div className="communities-main-container">
                <h1>Qazaq communities in the USA</h1>
                <div className="communities-choose">
                    <p>1. Choose the State</p>
                    <p>2. Choose the City</p>
                    <p>3. Get the output</p>
                </div>
                <div className="communities-main-boxes">
                    {allCommunities.map((community) => {
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
                    })}
                </div>
            </div>
        </div>
    )
}