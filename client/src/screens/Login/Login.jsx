import './Login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Community from '../../assets/community.png'
import Search from '../../assets/search.png'
import Online from '../../assets/online.png'
import KZ from '../../assets/kz.mp4'


export default function Login(props) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const { username, password } = formData;
    const { handleLogin, error } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <div className="login">

            <div className="login-main-container">

                <video className="login-video"  autoStart autoPlay muted loop src={KZ} type="video/mp4" />

                <div id="login-left-right">
                    <div className="login-left-container">
                        <h3 id="center">Join US Today</h3>
                        <p id="center">There is no power for change greater than a community discovering what it cares about.</p>
                        <h4> <img src={Community} />  Community</h4>
                        <h4> <img src={Search} />Job and House search</h4>
                        <h4> <img src={Online} />Online Support</h4>
                    </div>

                    <div className="login-right-container">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleLogin(formData);
                        }}>
                            <img src="https://cdn3.iconfinder.com/data/icons/international-circle-flags-outline/480/kazakh-kazakhstan-asian-country-flag-512.png" />
                            <h3>Welcome</h3>
                            {
                                error &&
                                <p>{error}</p>
                            }
                            <input
                                className='input-username'
                                type='text'
                                placeholder="Username"
                                name='username'
                                value={username}
                                onChange={handleChange}
                            />
                            <input
                                className='input-password'
                                type='password'
                                placeholder="Password"
                                name='password'
                                value={password}
                                onChange={handleChange}
                            />
                            <Link to='/forgot' id='none'> <h6 id="forget-password">Forget Password?</h6></Link>
                            <button id="form-button"><b>Log into your account</b></button>
                            <Link to='/register' id='none'> <h3>Create account</h3></Link>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    )
}