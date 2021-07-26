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
                    <h6><Link to="/account" className="nav-container-upper-text">My Account </Link></h6>
                    <h6>|</h6 >
                    <h6 id="logout" onClick={handleLogout}>Sign out</h6>
                </div>
                :
                <div className="nav-container-upper">
                    <h6> <Link to="/login" className="nav-container-upper-text">Log in</Link></h6>
                    <h6>|</h6 >
                    <h6> <Link to="/register" className="nav-container-upper-text">Create Account </Link></h6>
                </div>
            }
            <div id="fixed">
                <div className="nav-container">
                    <Link to="/" id="none">
                        <p id="logo">
                            INFO-BOX
                        </p>
                    </Link>
                    <Link to="/jobs" id="none">
                        <p id="hv">Job</p>
                    </Link>
                    <Link to="/housesforrent" id="none">
                        <p id="hv" >House</p>
                    </Link>
                    <Link to="#" id="none">
                        <p id="hv" >Service</p>
                    </Link>
                    <Link to="/communities" id="none">
                        <p id="hv">Community</p>
                    </Link>
                    <Link to="/blogs" id="none">
                        <p id="hv">Blog</p>
                    </Link>
                    {/* <div>
                        <Link to="#" id="none">
                            <h5 id="hv">Discussion Forums</h5>
                        </Link>
                    </div> */}
                    <Link to="/about" id="none">
                        <p id="hv">About Us</p>
                    </Link>
                    <Link to="/contact" id="none">
                        <p id="hv">Contact</p>
                    </Link>
                    <div>
                        {currentUser ?
                            <Link to="/create/posts" id="none">
                                <p className="create-post-button">Create a Post</p>
                            </Link>
                            :
                            <p className="create-post-button" onClick={() => alert("Please Sign in or Register")}>Create a Post</p>
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
                                <Link to="/create/posts" id="none">
                                    <h4 className="create-post-button">Create a Post</h4>
                                </Link>
                                :
                                <h4 className="create-post-button" onClick={() => alert("Please Sign in or Register")}>Create a Post</h4>
                            }
                        </div>
                    </>
                }

            </div>



        </div >
    )
}