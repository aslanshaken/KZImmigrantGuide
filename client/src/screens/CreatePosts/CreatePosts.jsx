import './CreatePosts.css'
import { Link } from 'react-router-dom'

export default function CreatePosts() {
    return (
        <div className="post-options-container">
            <h1>Add a new post</h1>
            <div className="post-options">
                <Link to="/post/job" id="none">
                    <h4>Job Offered</h4>
                </Link>
                <Link to="/post/jobwanted" id="none">
                    <h4>Resume/Job Wanted</h4>
                </Link>
                <Link to="/post-get-hired" id="none">
                    <h4>House Offered</h4>
                </Link>
                <Link to="/post/job" id="none">
                    <h4>Housing Wanted</h4>
                </Link>
                <Link to="/post-get-hired" id="none">
                    <h4>Service Offered</h4>
                </Link>
            </div>
        </div>
    )
}