import './ForgetPassword.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Community from '../../assets/community.png'
import Search from '../../assets/search.png'
import Online from '../../assets/online.png'
import KZ from '../../assets/kz.mp4'
import { forgotPassword } from '../../services/passwords'
import { useHistory } from 'react-router-dom';

export default function ForgetPassword() {

    const [emailData, setEmailData] = useState()
    const [passwordCheck, setPasswordCheck] = useState()
    const [error, setError] = useState(null);
    const history = useHistory();


    const handleChange = (e) => {
        setEmailData(e.target.value)
    }

    const handleForgetPassword = async (e) => {
        e.preventDefault();
        const forgetPassword = await forgotPassword(emailData);
        if (forgetPassword) {
            setPasswordCheck(forgetPassword)
            setError(null);
            history.push('/resetpassword');
        } else {
            setError("email address doesn't exist");
        }
    }

    return (
        <div className="forget-password">

            <div className="forget-password-main-container">

                <video className="forget-password-video" autoStart autoPlay muted loop src={KZ} type="video/mp4" />

                <div className="forget-password-box">
                    <form onSubmit={handleForgetPassword}>
                        <h4>Forget password?</h4>
                        <h4>Please enter your email address</h4>
                        {
                            error &&
                            <p>{error}</p>
                        }
                        <input
                            className='input-forget-password-email'
                            type='text'
                            placeholder="Email"
                            required
                            name='username'
                            value={emailData}
                            onChange={handleChange}
                        />
                        <button id="forget-password-form-button"><b>Submit</b></button>
                        <Link to='/login' id='none'> <h3>Go Back</h3></Link>
                    </form>
                </div>

            </div>
        </div>
    )
}