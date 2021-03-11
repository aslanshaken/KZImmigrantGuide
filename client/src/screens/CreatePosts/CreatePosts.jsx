import './CreatePosts.css'
import { Link } from 'react-router-dom'

export default function CreatePosts() {
    return (
        <div className="post-options-container">
            <h2>Post</h2>
            <h5>Please Choose One</h5>

            <div className="post-options">
                <Link to="/post-get-hired" id="none">
                    <h4>Get Hired</h4>
                </Link>
                <Link to="/post-job" id="none">
                    <h4>Post a Job</h4>
                </Link>
                <Link to="/post-house" id="none">
                    <h4>Add Housing</h4>
                </Link>
            </div>

        </div>
    )
}