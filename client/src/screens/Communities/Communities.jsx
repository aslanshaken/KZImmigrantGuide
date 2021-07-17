import './Communities.css'
import Facebook from '../../assets/facebook.svg'
import Whatsapp from '../../assets/whatsapp.svg'
import Telegram from '../../assets/telegram.svg'

export default function Communities(props) {
    const { allCommunities } = props
    console.log(allCommunities)
    function filterDate(str) { // filter time
        const mdy = str.split('T')[0]
        const date = mdy.split('-')[1] + '-' + mdy.split('-')[2] + '-' + mdy.split('-')[0]
        return date
    }

    return (
        <div className="communities-main-container">
            <h2>Qazaq communities in the USA</h2>
            <div className="communities-choose">
                <p>1. Choose the State</p>
                <p>2. Choose the City</p>
                <p>3. Get the output</p>
            </div>
            <div className="communities-main-boxes">
                {allCommunities.map((community) => {
                    return (
                        <div className="community-box">
                            <div className="community-box-left">
                                <h2>{community.community.city}</h2>
                                <img src={!community.image ? "https://socialmediaweek.org/wp-content/blogs.dir/1/files/FB-Admins.jpg" : community.image?.url} />
                                <h4><b>{community.community.name_community}</b></h4>
                                <p><b>State:</b> {community.community.state}</p>
                                <p><b>Members:</b> {community.community.members_count}</p>
                                <p><b>Admin:</b> {community.community.contact_name}</p>
                                <p><b>Cellphone:</b> {community.community.contact_phone}</p>
                                <p><b>Email:</b> {community.community.contact_email}</p>
                                <p><b>Last update: </b> {filterDate(community.community.updated_at)}</p>
                                <div className='community-box-links'>
                                    <a href={community.community.facebook}><img src={Facebook} /></a>
                                    <a href={community.community.telegram}><img src={Telegram} /></a>
                                    <a href={community.community.whatsapp}><img src={Whatsapp} /></a>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}