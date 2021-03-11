import './Login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


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
        <div className="login-main-container">
            <form onSubmit={(e) => {
                e.preventDefault();
                handleLogin(formData);
            }}>
                <h3>Login</h3>
                {
                    error &&
                    <p>{error}</p>
                }
                <label>
                    Username:
                    <input
                        type='text'
                        name='username'
                        value={username}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button>Submit</button>
                <br />
                <Link to='/register' id='none'> <h3>Register</h3></Link>
            </form>

        </div>
    )
}