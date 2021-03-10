import './Jobs.css'
import { Link } from 'react-router-dom'

export default function Jobs() {
    return (
        <div className="jobs-question-main">
            <h2>Jobs in the USA</h2>
            <div className="jobs-question">
                <Link to="/available-jobs" id="none"> <h3>Looking for a job</h3> </Link>
                <h3>OR</h3>
                <Link to="#" id="none"> <h3>I want to be hired</h3></Link>
            </div>
        </div>
    )
}