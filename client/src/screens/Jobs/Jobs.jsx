import './Jobs.css'
import { Link } from 'react-router-dom'

export default function Jobs() {
    return (
        <div className="jobs-question-main">
            <h1>Jobs in the USA</h1>
            <div className="jobs-question">
                <Link to="/available-jobs" id="none"> <h3>Looking for a job?</h3> </Link>
                <h4>OR</h4>
                <Link to="#" id="none"> <h3>Hiring an employee?</h3></Link>
            </div>
        </div>
    )
}