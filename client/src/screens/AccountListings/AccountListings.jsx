import './AccountListings.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllJobsForEmployee } from '../../services/getEmployees'
import { getAllPostsByEmployee } from '../../services/postByEmployees'

export default function AccountListings(props) {
    const { currentUser } = props
    const history = useHistory();

    // Get all lists from back end
    const [jobs, setJobs] = useState([])
    const [jobsByEmployee, setJobsByEmployee] = useState([])
    console.log(jobsByEmployee)

    useEffect(() => {
        const fetchJobs = async () => {
            const jobsList = await getAllJobsForEmployee();
            setJobs(jobsList);
        }
        const fetchJobsByEmployee = async () => {
            const jobsByEmployeeList = await getAllPostsByEmployee();
            setJobsByEmployee(jobsByEmployeeList);
        }

        fetchJobs();
        fetchJobsByEmployee();
    }, [])
    // Ends

    function filterDate(str) {
        const mdy = str.split('T')[0]
        const date = mdy.split('-')[1] + '-' + mdy.split('-')[2] + '-' + mdy.split('-')[0]
        return date
    }

    function maxLength(str) {
        if (str.length > 25) {
            return str.split('').slice(0, 35).join('') + '.......'
        } else {
            return str
        }
    }

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
            <div>
                Search by..
            </div>
            <div className="account-listings-middle">
                <div className="account-listings-flex" >
                    {jobs.map((job) => {
                        if (job.user_id == currentUser?.user.id) {
                            return (
                                <div className="listing-box">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcjPkVfPcEjvvIXZIqx30gzFi0Li7WaML4RQ&usqp=CAU" />
                                    <div>
                                        <p> {job.job_name}</p>
                                        <p>Post created: {filterDate(job.created_at)}</p>
                                        <p>Last updated: {filterDate(job.updated_at)}</p>
                                        <p> Category: " Available Jobs " </p>
                                        <div className="listings-box-button">
                                            <button>Edit</button>
                                            <button>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    {jobsByEmployee.map((jobByEmployee) => {
                        if (jobByEmployee.user_id == currentUser?.user.id) {
                            return (
                                <div className="listing-box">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcjPkVfPcEjvvIXZIqx30gzFi0Li7WaML4RQ&usqp=CAU" />
                                    <div>
                                        <p> {maxLength(jobByEmployee.title)}</p>
                                        <p>Post created: {filterDate(jobByEmployee.created_at)}</p>
                                        <p>Last updated: {filterDate(jobByEmployee.updated_at)}</p>
                                        <p> Category: " I'm looking for a job " </p>
                                        <div className="listings-box-button">
                                            <button>Edit</button>
                                            <button>Delete</button>
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