import './Jobs.css'
import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Wall from '../../assets/ad1.png'
import AD from '../../assets/ad1.png'

export default function Jobs(props) {

    const { jobs } = props // get read only data from App.js
    console.log(jobs)

    function filterDate(str) { // filter time
        const mdy = str.split('T')[0]
        const date = mdy.split('-')[1] + '-' + mdy.split('-')[2] + '-' + mdy.split('-')[0]
        return date
    }

    function maxLength(str) { // less words for description
        if (str.length > 30) {
            return str.split('').slice(0, 60).join('') + '...'
        } else {
            return str
        }
    }


    function maxNameLength(str) { // less words for name
        if (str.length > 30) {
            return str.split('').slice(0, 20).join('') + '...'
        } else {
            return str
        }
    }

    return (
        <div className="jobs-main-container">
            <div className="jobs-main-photo ">
                <h2>Jobs</h2>
                <img src={Wall} />
            </div>
            <div className="jobs-main-middle">
                <div className="jobs-main-left">
                    <div className="jobs-to-choose">
                        <h3 id="job-chosen">I'm looking for a job </h3>
                        <h3><Link to="/jobs-by-employee" id="none"> I'm looking for employees</Link></h3>
                    </div>
                    <div className='jobs-select'>
                        <select>
                            <option value=''>Select State</option>
                        </select>
                        <select>
                            <option value=''>Select Category</option>
                        </select>
                    </div>
                    {jobs.map((job) => {
                        return (
                            <div className='jobs-main-box'>
                                <div className='jobs-box-upper'>
                                    <h6>{filterDate(job?.updated_at)}</h6>
                                    <h6>{job?.city}</h6>
                                </div>
                                <p><b>{maxNameLength(job?.job_name)}</b></p>
                                <p>Description: <b>{maxLength(job?.description)}</b></p>
                                <p>Category:<b> {job?.category}</b> </p>
                                <div className="jobs-box-bottom">
                                    <p>{job?.cellphone}</p>
                                    <p>{job?.email}</p>
                                    <p><Link className="jobs-box-learn" to={`/job/${job?.id}`} id="none">Learn more</Link></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='jobs-main-right'>
                    <img src={AD} />
                </div>
            </div>
        </div>
    )
}