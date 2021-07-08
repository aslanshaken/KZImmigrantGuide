import './Login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
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

                <video className="login-video" autoStart autoPlay muted loop src={KZ} type="video/mp4" />
                <div className="login-box">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin(formData);
                    }}>
                        {/* <img src="https://cdn3.iconfinder.com/data/icons/international-circle-flags-outline/480/kazakh-kazakhstan-asian-country-flag-512.png" /> */}
                        <h1 id='welcome-text' >Welcome</h1>
                        {
                            error &&
                            <p>{error}</p>
                        }
                        <input
                            className='input-username'
                            type='text'
                            placeholder="Username"
                            required
                            name='username'
                            value={username}
                            onChange={handleChange}
                        />
                        <input
                            className='input-password'
                            type='password'
                            placeholder="Password"
                            required
                            name='password'
                            value={password}
                            onChange={handleChange}
                        />
                        <Link to='/forgotpassword' id='none'> <h5 id="forget-password">Forget Password?</h5></Link>
                        <button id="login-form-button"><b>Log into your account</b></button>
                        <Link to='/register' id='none'> <h4>New user? Create account</h4></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}