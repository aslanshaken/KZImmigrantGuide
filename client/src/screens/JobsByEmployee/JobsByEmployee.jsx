import './JobsByEmployee.css'
import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Wall from '../../assets/job3.jpg'
import AD from '../../assets/ad1.png'

export default function JobsByEmployee(props) {

    const { jobsByEmployee } = props // get read only data from App.js
    console.log(jobsByEmployee)

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
            return str.split('').slice(0, 60).join('') + '...'
        } else {
            return str
        }
    }

    return (
        <div className="jobsByEmployee-main-container">
            <div className="jobsByEmployee-main-photo ">
                <img src={AD} />
            </div>
            <h2>Employees in the USA</h2>
            <div className='jobsByEmployee-select'>
                <select>
                    <option value=''>Select State</option>
                </select>
                <select>
                    <option value=''>Select City</option>
                </select>
                <select>
                    <option value=''>Select Category</option>
                </select>
                <p><Link to="/jobs" id="none">I'm looking for a job </Link></p>
            </div>
            <div className="jobsByEmployee-main-middle">
                <div className="jobsByEmployee-main-left">
                    {jobsByEmployee.map((job) => {
                        return (
                            <div className='jobsByEmployee-main-box'>
                                <div className='jobsByEmployee-box-upper'>
                                    <h6>{filterDate(job?.updated_at)}</h6>
                                    <h6>{job?.city}</h6>
                                </div>
                                <p><b>{maxNameLength(job?.title)}</b></p>
                                <p>Name: <b> {maxNameLength(job?.name)}</b></p>
                                <p>Description:<b> {maxLength(job?.about)}</b> </p>
                                <p>Category:<b>  {job?.category}</b>  </p>
                                <div className="jobsByEmployee-box-bottom">
                                    <p>{job?.cellphone}</p>
                                    <p>{job?.email}</p>
                                    <p><Link className="jobsByEmployee-box-learn" to={`/job-by-employee/${job?.id}`} id="none">Learn more</Link></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='jobsByEmployee-main-right'>
                    <img src={AD} />
                </div>
            </div >
        </div >
    )
}