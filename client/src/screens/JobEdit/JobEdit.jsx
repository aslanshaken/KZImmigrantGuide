import './JobEdit.css' // CSS

import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';

import { updateOneJobForEmployee } from '../../services/getEmployees' // API
import { UsaStatesAndCities, Categories } from '../../assets/Usa' // filter

export default function JobEdit(props) {
    const [formData, setFormData] = useState({ // created empty object
        job_name: '',
        category: '',
        description: '',
        city: '',
        cellphone: '',
        email: ''
    })
    const { id } = useParams(); // receives ID from route
    const states = UsaStatesAndCities() // get all states
    const categoryTypes = Categories() // get all categories
    const [userState, setUserState] = useState()
    const [cities, setCities] = useState([]) // get chosen cities county
    const { currentUser, jobs, setJobs } = props
    const history = useHistory();
    const { job_name, category, description, city, cellphone, email } = formData;

    useEffect(() => {
        const prefillFormData = () => {
            const jobPost = jobs.find((job) => job.id === Number(id));
            setFormData({
                job_name: jobPost.job_name,
                category: jobPost.category,
                description: jobPost.description,
                city: jobPost.city,
                cellphone: jobPost.cellphone,
                email: jobPost.email
            });
        }
        if (jobs.length) {
            prefillFormData();
        }
    }, [jobs, id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedJob = await updateOneJobForEmployee(id, formData);
        setJobs(prevState => prevState.map((job) => {
            return job.id === Number(id) ? updatedJob : job
        }));
        history.push('/account/listings');
    }

    function UpdateStatesAndCities() {
        return Object.keys(states).map((oneState) => { // To update state anb city selects
            states[oneState].map((data) => {
                if (data == city) {
                    setCities(states[oneState]) // update select cities within state in select
                    setUserState(oneState) // update value of state select
                }
            })
        })
    }
    
    return (
        <div className="job-edit">
            <div className="job-edit-main-photo">
                <img id="job-edit-user-image" src={currentUser?.image === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU" : currentUser?.image.url} />
                <h2>{currentUser?.user.first_name} {currentUser?.user.last_name}</h2>
            </div>
            <div className="job-edit-links">
                <h3><Link to="/account" id="none">Personal Information</Link></h3>
                <h3><Link to="/account/listings" id="none">Listings</Link></h3>
            </div>
            <div className="job-edit-main-container">
                <img id="job-edit-img" src="https://codlrc.org/sites/default/files/u114/were%20hiring.jpg" />
                <form
                    className="job-edit-box"
                    onSubmit={handleUpdate}
                >
                    <h2>Edit</h2>
                    <label>Title:
                        <input
                            type='text'
                            name='job_name'
                            value={job_name}
                            maxLength="35"
                            onChange={handleChange}
                        />
                    </label>
                    <label>Description:
                        <textarea
                            type='text'
                            name='description'
                            value={description}
                            maxLength="300"
                            onChange={handleChange}
                        />
                    </label>

                    <label> Category:
                        <select value={category} name="category" onChange={handleChange}>
                            <option selected disabled> Category</option>
                            {categoryTypes.map((data) =>
                                <option value={data}>{data}</option>
                            )}
                        </select>
                    </label>

                    <label>State:
                        {!userState && UpdateStatesAndCities()}
                        <select value={userState} onChange={(e) => {
                            setCities(states[e.target.value])
                            setUserState(e.target.value)
                            formData.city = states[e.target.value][cities.indexOf(formData.city)] // for city selected update
                        }}>
                            <option selected disabled>State</option>
                            {Object.keys(states).map((oneState) =>
                                <option value={oneState}>{oneState}</option>
                            )}
                        </select>
                    </label>

                    <label>City:
                        <select value={city} name="city" onChange={handleChange}>
                            <option selected disabled> City</option>
                            {cities.map((city) =>
                                <option value={city}>{city}</option>
                            )}
                        </select>
                    </label>
                    <label>Cellphone:
                        <input
                            type='text'
                            name='cellphone'
                            value={cellphone}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Email:
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={handleChange}
                        />
                    </label>

                    <br />

                    <div id="job-edit-button">
                        <Link to="/account/listings" className="job-edit-button">Go Back</Link>
                        <button className="job-edit-save-button">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}