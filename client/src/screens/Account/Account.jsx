import { useState } from 'react'
import './Account.css'
import { destroyOneJobForEmployee } from '../../services/getEmployees';
import { Link } from "react-router-dom";

export default function Account(props) {
    const { currentUser, jobs, setJobs } = props
    console.log(jobs)
    console.log(currentUser)

    const handleDelete = async (id) => {
        await destroyOneJobForEmployee(id);
        setJobs(prevState => prevState.filter((job) => job.id !== id))
    }

    return (
        <div className="account-background">

            <div className="account-info-container">

                <div className="user-info">
                    <h3>My Account</h3>
                    <h4>Username: <a> {currentUser?.username}</a></h4>
                    <h4>Email: <a>{currentUser?.email}</a></h4>
                </div>
            </div>

            <h2 id="center">My Posts</h2>
            <h2 id="center">Jobs-Section</h2>

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

            </div>

            <div>

            </div>
        </div>
    )
}