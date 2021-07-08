import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import KZ from '../../assets/kz.mp4'

export default function Register(props) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        cell_phone: ''
    })
    const { username, email, password, first_name, last_name, cell_phone } = formData;
    const { handleRegister } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className="register">
            <div className="register-main-container">
                <video className="register-video" autoStart autoPlay muted loop src={KZ} type="video/mp4" />
                    <div className="register-box">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleRegister(formData);
                        }}>
                            {/* <img src="https://cdn3.iconfinder.com/data/icons/international-circle-flags-outline/480/kazakh-kazakhstan-asian-country-flag-512.png" /> */}
                            <h1 id='welcome-text'>Welcome</h1>
                            <h2>Create account</h2>
                            <h5>Be cool and join today. Meet millions</h5>
                            <input
                                className="input-register-username"
                                type='text'
                                placeholder="Username"
                                required
                                name='username'
                                value={username}
                                onChange={handleChange}
                            />
                            <input
                                className="input-register-firstName"
                                type='text'
                                placeholder="First Name"
                                required
                                name='first_name'
                                value={first_name}
                                onChange={handleChange}
                            />
                            <input
                                className="input-register-LastName"
                                type='text'
                                placeholder="Last Name"
                                required
                                name='last_name'
                                value={last_name}
                                onChange={handleChange}
                            />
                            <input
                                className="input-register-email"
                                type='text'
                                placeholder="Email"
                                required
                                name='email'
                                value={email}
                                onChange={handleChange}
                            />
                            <input
                                className="input-register-cellPhone"
                                type='text'
                                placeholder="Cell Phone"
                                required
                                name='cell_phone'
                                value={cell_phone}
                                onChange={handleChange}
                            />
                            <input
                                className="input-register-password"
                                type='text'
                                placeholder="Password"
                                required
                                name='password'
                                value={password}
                                onChange={handleChange}
                            />
                            <button id="register-form-button">Register Now</button>
                            <Link to='/login' id='none'> <h5>Already have an account?</h5></Link>
                        </form>
                </div>
            </div>
        </div>
    )
}
