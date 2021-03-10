import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header(props) {
    const { currentUser, handleLogout } = props;
    console.log(currentUser)
    return (
        <div className="nav-container">
            <div>
                <Link to="/" id="none">
                    <h4 className="logo">KZ Immigrant Guide</h4>
                </Link>
            </div>
            <div>
                <Link to="/jobs" id="none">
                    <h4>Jobs</h4>
                </Link>
            </div>
            <div>
                <Link to="#" id="none">
                    <h4>Housing</h4>
                </Link>
            </div>
            <div>
                <Link to="#" id="none">
                    <h4>Communities</h4>
                </Link>
            </div>
            <div>
                <Link to="#" id="none">
                    <h4>Blog</h4>
                </Link>
            </div>
            <div>
                <Link to="#" id="none">
                    <h4>Contact</h4>
                </Link>
            </div>

            {
                currentUser ?
                    <>
                        <div>
                            <Link to="/account" id="none">
                                <h4>{currentUser.username.toUpperCase()}</h4>
                            </Link>
                        </div>
                        <div>
                            <h4 id="logout" onClick={handleLogout}>Sign out</h4>
                        </div>
                    </>
                    :
                    <>
                        <div>
                            <Link to="/login" id="none">
                                <h4>Sign in</h4>
                            </Link>
                        </div>
                        <div>
                            <Link to="/register" id="none">
                                <h4>Sign up</h4>
                            </Link>
                        </div>
                    </>
            }

            <div>
                <Link to="/create-posts" id="none">
                    <h4 className="create-post-button">Create a Post</h4>
                </Link>
            </div>

        </div>
    )
}