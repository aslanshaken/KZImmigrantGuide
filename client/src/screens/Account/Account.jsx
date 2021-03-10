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
        <div>

            <div className="account-info-container">
                <h3>Username Information</h3>
                <div>
                    <h5>Username: {currentUser?.username}</h5>
                    <h5>Email: {currentUser?.email}</h5>
                </div>
            </div>

            <h2 id="center">My Posts</h2>
            <h3 id="center">Jobs</h3>
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
                                    <br /><br />
                                    <Link to={`/job/edit/${job.id}`} id="none"> <button>Edit</button> </Link>
                                    <button onClick={() => handleDelete(job.id)} >Delete</button>
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