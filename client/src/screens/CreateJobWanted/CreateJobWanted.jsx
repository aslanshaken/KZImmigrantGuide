import './CreateJobWanted.css'
import { useState } from 'react';
import { UsaStatesAndCities } from '../../assets/Usa'
import { postNewEmployee } from '../../services/postByEmployees'

export default function CreateJobWanted(props) {
    const [formData, setFormData] = useState({
        about: '',
        category: '',
        cellphone: '',
        city: '',
        email: '',
        name: '',
        title: '',
    })
    const { title, name, about, category, city, cellphone, email } = formData;
    const { currentUser, setJobsByEmployee } = props

    const [cities, setCities] = useState([])
    const [stateToggle, setStateToggle] = useState(true)
    const [received, setReceived] = useState(false)
    const states = UsaStatesAndCities()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        const newJob = await postNewEmployee(formData);
        setJobsByEmployee(prevState => [...prevState, newJob]);
        setReceived(true)
        setCities()
        setFormData({
            about: '',
            category: '',
            cellphone: '',
            city: '',
            email: '',
            name: '',
            title: '',
        })
    }


    function Call() {
        return (
            <div className="create-job-wanted-received-text">
                Thank you! We have received your information. It will be reviewed by administration and submitted within 2 hours.
            </div>

        )
    }

    return (
        <div>
            {currentUser ?
                <div className="create-job-wanted-main-container">
                    <form className="create-job-wanted-box" onSubmit={(e) => handleCreate(e)}>
                        <p className="create-job-wanted-box-header">Add Resume/Job Wanted Information</p>
                        <div className="create-job-wanted-box-div">
                            <label>
                                <p>Title*</p>
                                <input
                                    className="create-job-wanted-box-input-full"
                                    type='text'
                                    name='title'
                                    value={title}
                                    maxLength="50"
                                    required
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="create-job-wanted-box-div">
                            <label>
                                <p>State*</p>
                                <select required="required" name='state' onChange={(e) => {
                                    handleChange(e)
                                    setCities(states[e.target.value])
                                }}>
                                    <option selected disabled> Select State </option>
                                    {stateToggle && Object.keys(states).map((oneState) => <option value={oneState}>{oneState}</option>)}
                                </select>
                            </label>
                            <label>
                                <p>City*</p>
                                <select name='city' required="required" onChange={(e) => handleChange(e)} >
                                    <option selected disabled > Select City </option>
                                    {cities && cities.map((city) => <option value={city}>{city}</option>)}
                                </select>
                            </label>
                            <label>
                                <p>Category*</p>
                                <input
                                    type='text'
                                    name='category'
                                    value={category}
                                    required
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="create-job-wanted-box-div">
                            <label>
                                <p>Name*</p>
                                <input
                                    type='text'
                                    name='name'
                                    value={name}
                                    required
                                    maxLength="23"
                                    onChange={handleChange} />
                            </label>
                            <label>
                                <p>Email*</p>
                                <input
                                    type='email'
                                    name='email'
                                    value={email}
                                    required
                                    maxLength="30"
                                    onChange={handleChange} />
                            </label>
                            <label>
                                <p>Cellphone*</p>
                                <input
                                    type='text'
                                    name='cellphone'
                                    value={cellphone}
                                    required
                                    maxLength="12"
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="create-job-wanted-box-div">
                            <label>
                                <textarea
                                    className="create-job-wanted-box-textarea-full"
                                    type='text'
                                    placeholder="About yourself"
                                    name='about'
                                    value={about}
                                    required
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="create-job-wanted-box-div">
                            <button>Submit</button>
                        </div>
                    </form>
                    {received && Call()}
                </div>
                :
                <div className="create-job-wanted-main-container">
                    Loading ....
                </div>
            }
        </div >
    )
}