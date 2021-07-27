import './ResetPassword.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Community from '../../assets/community.png'
import Search from '../../assets/search.png'
import Online from '../../assets/online.png'
import KZ from '../../assets/kz.mp4'
import { resetPassword } from '../../services/passwords'
import { useHistory } from 'react-router-dom';

export default function ResetPassword() {

    const [formData, setFormData] = useState({
        token: '',
        email: '',
        password: ''
    })
    const { token, email, password } = formData;
    const [passwordCheck, setPasswordCheck] = useState()
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleResetPassword = async (e) => {
        e.preventDefault();
        const newData = await resetPassword(formData);
        setPasswordCheck(newData)
        if (newData === 'not found') {
            setError("Code not valid or expired. Try generating a new link.");
        } else if (!newData) {
            setError("Couldn't update password");
        } else {
            setError(null); // add You have successfully reset your password -> redirect 
            history.push('/login');
        }
    }


    return (
        <div className="reset-password">
            {/* <video className="reset-password-video" autoStart autoPlay muted loop src={KZ} type="video/mp4" /> */}
            <div className="reset-password-box">
                <form onSubmit={handleResetPassword}>
                    <h4>Please fill out </h4>
                    <h4>Check your email for a message with your code. Your code is case sensitive</h4>
                    {
                        error &&
                        <p id="error">{error}</p>
                    }
                    <input
                        className='input-reset-password-token'
                        type='text'
                        placeholder="Code"
                        required
                        name='token'
                        value={token}
                        onChange={handleChange}
                    />
                    <input
                        className='input-reset-password-email'
                        type='text'
                        placeholder="Email"
                        required
                        name='email'
                        value={email}
                        onChange={handleChange}
                    />
                    <input
                        className='input-reset-password-password'
                        type='text'
                        placeholder="Password"
                        required
                        name='password'
                        value={password}
                        onChange={handleChange}
                    />
                    <button id="forget-password-form-button"><b>Submit</b></button>
                    <h5>Didn't get a code?</h5>
                    <Link to='/forgotpassword' id='none'> <h3>Go Back</h3></Link>
                </form>
            </div>
        </div>
    )
}