import './AccountListings.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllJobsForEmployee } from '../../services/getEmployees'

export default function AccountListings(props) {
    const { currentUser } = props
    const history = useHistory();
    const [jobs, setJobs] = useState([])
    console.log(jobs)
    useEffect(() => {
        const fetchJobs = async () => {
            const jobsList = await getAllJobsForEmployee();
            setJobs(jobsList);
        }

        fetchJobs();
    }, [])


    return (
        <div className="account-listings-container">
            <div className="account-listings-main-photo">
                <img id="user-img-listings" src={currentUser?.image === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU" : currentUser?.image.url} />
                <h2>{currentUser?.user.first_name} {currentUser?.user.last_name}</h2>
            </div>
            <div className="account-listings-links">
                <h3><Link to="account" id="none">Personal Information</Link></h3>
                <h3 id="account-chosen">Listings</h3>
            </div>
            <div className="account-listings-middle">

                {jobs.map((job) => {
                    if (job.user_id == currentUser?.user.id) {
                    return(
                        <div className="listing-box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcjPkVfPcEjvvIXZIqx30gzFi0Li7WaML4RQ&usqp=CAU" />
                        <div>
                            <p>Title: {job.job_name}</p>
                            <p>Date posted: 04/05/2020</p>
                            <p> Category: "House for rent" </p>
                            <div className="listings-box-button">
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    </div>
                    )
                    }
                })
                }
            </div>
        </div>
    )
}