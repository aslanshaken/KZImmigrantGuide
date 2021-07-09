import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from '../../assets/logo-main.png'
import { useState } from 'react'

export default function Header(props) {
    const { currentUser, handleLogout } = props;
    const [close, setClose] = useState(false)
    return (
        <div>

            {currentUser
                ?
                <div className="nav-container-upper">
                    <div>
                        <Link to="/account" id="none">
                            <h5>My Account</h5>
                        </Link>
                    </div>
                    <div><h5>|</h5></div>
                    <div>
                        <h5 id="logout" onClick={handleLogout}>Sign out</h5>
                    </div>
                </div>
                :
                <div className="nav-container-upper">
                    <div>
                        <Link to="/login" id="none">
                            <h5>Log in</h5>
                        </Link>
                    </div>
                    <div><h5>|</h5></div>
                    <div>
                        <Link to="/register" id="none">
                            <h5>Create Account</h5>
                        </Link>
                    </div>
                </div>
            }
            <div id="fixed">
                <div className="nav-container">
                    <div>
                        <Link to="/" id="none">
                            <p id="logo">
                                QAZAQ REPUBLIC IN THE USA   
                                {/* <img id="logo" src={Logo} /> */}
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/jobs" id="none">
                            <h5 id="hv">Jobs</h5>
                        </Link>
                    </div>
                    <div>
                        <Link to="/houses-for-rent" id="none">
                            <h5 id="hv" >Housing</h5>
                        </Link>
                    </div>
                    <div>
                        <Link to="#" id="none">
                            <h5 id="hv" >Services</h5>
                        </Link>
                    </div>
                    <div>
                        <Link to="#" id="none">
                            <h5 id="hv">Communities</h5>
                        </Link>
                    </div>
                    <div>
                        <Link to="#" id="none">
                            <h5 id="hv">Blogs</h5>
                        </Link>
                    </div>
                    <div>
                        <Link to="#" id="none">
                            <h5 id="hv">Discussion Forums</h5>
                        </Link>
                    </div>
                    <div>
                        <Link to="#" id="none">
                            <h5 id="hv">About Us</h5>
                        </Link>
                    </div>
                    <div>
                        <Link to="#" id="none">
                            <h5 id="hv">Contact</h5>
                        </Link>
                    </div>
                    <div>
                        {currentUser ?
                            <Link to="/create-posts" id="none">
                                <h5 className="create-post-button">Create a Post</h5>
                            </Link>
                            :
                            <h4 className="create-post-button" onClick={() => alert("Please Sign in or Register")}>Create a Post</h4>
                        }
                    </div>

                </div >
            </div>






            {/* CELL PHONE */}
            <div className="nav-cell-container" >
                <div>
                    <Link to="/" id="none">
                        <img id="logo" src={Logo} />

                    </Link>
                </div>

                <img
                    id="nav-img"
                    onClick={() => setClose(!close)}
                    src={close
                        ? "https://img.icons8.com/ios/50/000000/circled-x.png"
                        : "https://img.icons8.com/cotton/64/000000/menu.png"
                    }
                />
                {close &&
                    <>

                        <div id="xs">
                            <Link to="/jobs" id="none">
                                <h4 >Jobs</h4>
                            </Link>
                        </div>
                        <div id="xs">
                            <Link to="/" id="none">
                                <h4>Housing</h4>
                            </Link>
                        </div>
                        <div id="xs">
                            <Link to="/" id="none">
                                <h4>Communities</h4>
                            </Link>
                        </div>
                        <div id="xs">
                            <Link to="/" id="none">
                                <h4>Blog</h4>
                            </Link>
                        </div>
                        <div id="xs">
                            <Link to="/" id="none">
                                <h4>Contact</h4>
                            </Link>
                        </div>
                        {
                            currentUser ?
                                <>
                                    <div id="xs">
                                        <Link to="/account" id="none">
                                            <h4>My Account</h4>
                                        </Link>
                                    </div>
                                    <div id="xs">
                                        <h4 id="logout" onClick={handleLogout}>Sign out</h4>
                                    </div>
                                </>
                                :
                                <>
                                    <div id="xs">
                                        <Link to="/login" id="none">
                                            <h4>Sign in</h4>
                                        </Link>
                                    </div>
                                    <div id="xs">
                                        <Link to="/register" id="none">
                                            <h4>Sign up</h4>
                                        </Link>
                                    </div>
                                </>
                        }
                        <div id="xs">
                            {currentUser ?
                                <Link to="/create-posts" id="none">
                                    <h4 className="create-post-button">Create a Post</h4>
                                </Link>
                                :
                                <h4 className="create-post-button" onClick={() => alert("Please Sign in or Register")}>Create a Post</h4>
                            }
                        </div>
                    </>
                }

            </div>



        </div>
    )
}