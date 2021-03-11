import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from '../../assets/logo.png'

export default function Header(props) {
    const { currentUser, handleLogout } = props;
    console.log(currentUser)
    return (
        <div className="nav-container">
            <div>
                <Link to="/" id="none">
                    <img id="logo" src={Logo} />

                </Link>
            </div>
            <div>
                <Link to="/jobs" id="none">
                    <h4 >Jobs</h4>
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
                                <h4>My Account</h4>
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
                {currentUser ?
                    <Link to="/create-posts" id="none">
                        <h4 className="create-post-button">Create a Post</h4>
                    </Link>
                    :
                    <h4 className="create-post-button" onClick={()=>alert("Please Sign in or Register")}>Create a Post</h4>
                }

            </div>

        </div>
    )
}