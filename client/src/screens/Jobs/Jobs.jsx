import './Jobs.css'
import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Wall from '../../assets/job3.jpg'
import AD from '../../assets/ad6.jpg'

export default function Jobs(props) {

    const { jobs } = props // get read only data from App.js
    console.log(jobs)

    function filterDate(str) { // filter time
        const mdy = str.split('T')[0]
        const date = mdy.split('-')[1] + '-' + mdy.split('-')[2] + '-' + mdy.split('-')[0]
        return date
    }

    function maxLength(str) { // less words for description
        if (str.length > 25) {
            return str.split('').slice(0, 100).join('') + '...'
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
                                <h4 id='jobs-box-upper-left'><b>{maxNameLength(job?.job_name)}</b></h4>
                                <p id="jobs-box-description">Description: {maxLength(job?.description)}</p>
                                <p id="jobs-box-category">Category: {job?.category} </p>
                                <div className="jobs-box-bottom">
                                    <h6>{job?.cellphone}</h6>
                                    <h6>{job?.email}</h6>
                                    <h6><Link  className="jobs-box-learn" to={`/job/${job?.id}`} id="none">Learn more</Link></h6>
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