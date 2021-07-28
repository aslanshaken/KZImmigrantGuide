import { useState } from 'react';
import './CreateJobForm.css'
import { postNewJobForEmployee } from '../../services/getEmployees'
import { UsaStatesAndCities, Categories, EmploymentTypes } from '../../assets/Usa'

export default function CreateJobForm(props) {
    const [formData, setFormData] = useState({
        job_name: '',
        category: '',
        description: '',
        city: '',
        cellphone: '',
        email: ''
    })
    const { setJobs, currentUser } = props
    const states = UsaStatesAndCities()
    const categories = Categories()
    const [cities, setCities] = useState([])
    const [stateToggle, setStateToggle] = useState(true)
    const { job_name, category, description, city, cellphone, email } = formData;
    const [received, setReceived] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        const newJob = await postNewJobForEmployee(formData);
        setJobs(prevState => [...prevState, newJob]);
        setReceived(true)
        setCities()
        setFormData({
            job_name: '',
            category: '',
            description: '',
            city: '',
            cellphone: '',
            email: ''
        })
    }

    function Call() {
        return (
            <div className="create-job-received-text">
                Thank you! We have received your information. It will be reviewed by administration and submitted within 2 hours.
            </div>

        )
    }


    return (
        <div>
            {currentUser ?
                <div className="create-job-main-container">
                    <form className="create-job-box" onSubmit={(e) => handleCreate(e)}>
                        <p className="create-job-box-header">Add a Job Offer</p>
                        <div className="create-job-box-div">
                            <label>
                                <p>Title*</p>
                                <input
                                    className="create-job-box-input-full"
                                    type='text'
                                    name='job_name'
                                    value={job_name}
                                    maxLength="50"
                                    required
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="create-job-box-div">
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
                                <select name="category" onChange={handleChange}>
                                    <option value=''>Choose Category</option>
                                    {categories.map((category) =>
                                        <option value={category}>{category}</option>
                                    )}
                                </select>
                            </label>
                        </div>
                        <div className="create-job-box-div">
                            <label>
                                <p>Admin name*</p>
                                <input
                                    type='text'
                                    // name='name'
                                    // value={name}
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
                        <div className="create-job-box-div">
                            <label>
                                <textarea
                                    className="create-job-box-textarea-full"
                                    type='text'
                                    placeholder="Description"
                                    name='description'
                                    value={description}
                                    required
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="create-job-box-div">
                            <button>Submit</button>
                        </div>
                    </form>
                    {received && Call()}
                </div>
                :
                <div className="create-job-main-container">
                    Loading ....
                </div>
            }
        </div >
    )
}
