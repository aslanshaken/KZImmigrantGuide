import './Account.css'
import { destroyOneJobForEmployee } from '../../services/getEmployees';
import { Link } from "react-router-dom";

export default function Account(props) {
    const { currentUser, jobs, setJobs } = props

    const handleDelete = async (id) => {
        await destroyOneJobForEmployee(id);
        setJobs(prevState => prevState.filter((job) => job.id !== id))
    }

    function capitalizeFirstLetter(string) {
        if (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }

    return (
        <div className="account-container">
            <div className="account-main-photo">
                <img id="user-img" src={currentUser?.image === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU" : currentUser?.image.url} />
                <h2>{currentUser?.user.first_name} {currentUser?.user.last_name}</h2>
            </div>
            <div className="account-personal-listing">
                <h3 id="account-chosen">Personal Information</h3>
                <h3><Link to="account-listings" id="none">Listings</Link></h3>
            </div>
            <div className="account-middle">
                <div className="account-left">
                    <div className="account-profile-box">
                        <p id="paragraph-head">My Profile</p>
                        <div className="account-user-left-right">
                            <div id="user-left">Username</div> <div id="user-right">{currentUser?.user.username}</div>
                        </div>
                        <div className="account-user-left-right">
                            <div id="user-left">First Name</div> <div id="user-right">{capitalizeFirstLetter(currentUser?.user.first_name)}</div>
                        </div>
                        <div className="account-user-left-right">
                            <div id="user-left">Last Name</div> <div id="user-right">{capitalizeFirstLetter(currentUser?.user.last_name)}</div>
                        </div>
                        <div className="account-user-left-right">
                            <div id="user-left">Birthday</div> <div id="user-right">{capitalizeFirstLetter(currentUser?.user.dob)}</div>
                        </div>
                        <div className="account-user-left-right">
                            <div id="user-left">Gender </div> <div>{capitalizeFirstLetter(currentUser?.user.gender)}</div>
                        </div>
                    </div>
                    <div className="account-contact-box">
                        <p id="paragraph-head">Contact Info</p>
                        <div className="account-user-left-right">
                            <div id="user-left">Email</div> <div id="user-right">{capitalizeFirstLetter(currentUser?.user.email)}</div>
                        </div>
                        <div className="account-user-left-right">
                            <div id="user-left">Cell Phone</div> <div id="user-right">{currentUser?.user.cell_phone}</div>
                        </div>
                    </div>
                    <Link to="account-edit" className="account-user-button">
                        Edit my information
                    </Link>
                </div>


                <div className="account-right">
                    <div className="account-others-box">
                        <p id="paragraph-head">Bio</p>
                        <div className="account-user-left-right">
                            <div id="user-left">Birthplace: </div> <div id="user-right">{capitalizeFirstLetter(currentUser?.user.birth_place)}</div>
                        </div>
                        <div className="account-user-left-right">
                            <div id="user-left">Current City:</div> <div id="user-right">{capitalizeFirstLetter(currentUser?.user.current_city)}</div>
                        </div>
                        <div className="account-user-about-me">
                            <div id="user-left">About Me: </div> <div id="user-right">{capitalizeFirstLetter(currentUser?.user.about_me)}</div>
                        </div>
                    </div>
                    <div className="account-contact-box">
                        <p id="paragraph-head">Social Media</p>
                        <div className="account-user-social-media">
                            <Link to={currentUser?.user.facebook}>
                                <img src="https://img.icons8.com/cute-clipart/128/000000/facebook-new.png" />
                            </Link>
                            <Link to={currentUser?.user.instagram}>
                                <img src="https://img.icons8.com/cute-clipart/64/000000/instagram-new.png" />
                            </Link>
                            <Link to="#">
                                <img src="https://img.icons8.com/cute-clipart/64/000000/twitter.png" />
                            </Link>
                            <Link to="#">
                                <img src="https://img.icons8.com/plasticine/100/000000/telegram-app.png" />
                            </Link>
                            <Link to="#">
                                <img src="https://img.icons8.com/cute-clipart/128/000000/whatsapp.png" />
                            </Link>
                        </div>
                    </div>
                    <Link to="account-edit" className="account-user-button">
                        Delete my account
                    </Link>
                </div>
            </div>
        </div >
    )
}


