import { useState } from 'react'
import './Account.css'
import { destroyOneJobForEmployee } from '../../services/getEmployees';
import { Link } from "react-router-dom";

export default function Account(props) {
    const { currentUser, jobs, setJobs } = props
    // console.log(jobs)
    // console.log(currentUser)

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

            <img
                src="https://userscontent2.emaze.com/images/bd7e18ec-b0dd-46b7-98b1-dbd3ab88928a/d1139ad6-60d6-453f-874d-9324ee309762.png"
                className="account-main-photo"
            />

            <div className="account-top-box">
                <img id="user-img" src={currentUser?.image.url} />
                <h1>{currentUser?.user.first_name} {currentUser?.user.last_name}</h1>
            </div>

            <div className="account-screens" >
                <h3 id="chosen">Personal Information</h3>
                <h3 id="will-chosen">My Listings</h3>
            </div>

            <div className="account-user-box">
                <p id="paragraph-head">Basic Info</p>
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

            <div className="account-user-box">
                <p id="paragraph-head">Contact Info</p>
                <div className="account-user-left-right">
                    <div id="user-left">Email</div> <div id="user-right">{capitalizeFirstLetter(currentUser?.user.email)}</div>
                </div>
                <div className="account-user-left-right">
                    <div id="user-left">Cell Phone</div> <div id="user-right">{currentUser?.user.cell_phone}</div>
                </div>
            </div>

            <div className="account-user-box">
                <p id="paragraph-head">Choose what others see</p>
                <div className="account-user-left-right">
                    <div id="user-left">Birthplace: </div> <div id="user-right">{capitalizeFirstLetter(currentUser?.user.birth_place)}</div>
                </div>
                <div className="account-user-left-right">
                    <div id="user-left">Current City:</div> <div id="user-right">{capitalizeFirstLetter(currentUser?.user.current_city)}</div>
                </div>
                <div className="account-user-left-right">
                    <div id="user-left">About Me: </div> <div id="user-right">{capitalizeFirstLetter(currentUser?.user.about_me)}</div>
                </div>
                <div className="account-user-left-right">
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

            <Link to="account-edit" className="account-user-edit-button">
                Edit my information
            </Link>
            <Link to="account-edit" className="account-user-edit-button">
                Delete my account
            </Link>
        </div >
    )
}







{/* 
            <div className="account-jobs">

                <div className="account-showjobs">
                    {jobs.map((job) => {
                        if (job?.user_id === currentUser?.id) {
                            return (
                                <div className="account-showjobs-box" key={job.id}>
                                    <p>Job Name: <a>{job.job_name}</a></p>
                                    <p>Description: <a>{job.description}</a></p>
                                    <p>Category:<a>{job.category}</a>  </p>
                                    <p>City: <a>{job.city}</a> </p>
                                    <p>Cell Phone:<a> {job.cellphone}</a> </p>
                                    <p>Email: <a>{job.email}</a></p>
                                    <p>Posted by: <a>{currentUser?.username}</a> </p>
                                    <Link to={`/job/edit/${job.id}`} id="none"><img src="https://img.icons8.com/dusk/64/000000/edit--v2.png" /> </Link>
                                    <img onClick={() => handleDelete(job.id)} src="https://img.icons8.com/cute-clipart/64/000000/delete-sign.png" />
                                </div>
                            )
                        }
                    })}

                </div>

            </div> */}