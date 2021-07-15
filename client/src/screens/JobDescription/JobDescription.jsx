import './JobDescription.css'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function JobDescription(params) {

    const { jobs } = params
    const { id } = useParams();


    function filterDate(str) { // filter time
        const mdy = str.split('T')[0]
        const date = mdy.split('-')[1] + '-' + mdy.split('-')[2] + '-' + mdy.split('-')[0]
        return date
    }
    return (
        <div className="job-main-description">
            {jobs.map((job) => {
                if (job.id == id) {
                    return (
                        <div className="job-box">
                            <h2>{job?.job_name}</h2>
                            <div className="job-box-upper">
                                <p><b>City:</b> {job?.city}</p>
                                <p><b>Date:</b> {filterDate(job?.updated_at)}</p>
                            </div>
                            <p className="job-box-description"><b>Description:</b> {job?.description} </p>
                            <div className='job-box-bottom'>
                                <p><b>Cellphone:</b> {job?.cellphone}</p>
                                <p><b>Email:</b> {job?.email}</p>
                                <p><b>Category:</b> {job?.category}</p>
                            </div>
                        </div>
                    )
                }
            })}
            <p className="job-go-back"><Link to="/jobs" id="none" >Go Back</Link></p>
        </div>
    )
}