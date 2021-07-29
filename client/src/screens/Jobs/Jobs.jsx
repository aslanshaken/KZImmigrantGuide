import './Jobs.css'
import { Link, useHistory } from 'react-router-dom'
import Select from 'react-select'
import { useState, useEffect } from 'react';
import Wall from '../../assets/ad1.png'
import AD from '../../assets/ad1.png'
import { UsaStatesAndCities, Categories, EmploymentTypes } from '../../assets/Usa'


export default function Jobs(props) {
    const { jobs } = props // get jobs data from App.js

    // FILTER
    const states = UsaStatesAndCities() // get a list of states
    const categories = Categories() // get a list of categories
    const employmentOptions = EmploymentTypes() // get a list of employment types
    const [cities, setCities] = useState([]) // get chosen cities county
    const [formData, setFormData] = useState({
        state: '',
        city: '',
        category: '',
        employment_type: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    // FILTER


    function filterTime(str) { // filter time
        const mdy = str.split('T')[0]
        const date = mdy.split('-')[1] + '-' + mdy.split('-')[2] + '-' + mdy.split('-')[0]
        return date
    }

    function maxLength(str) { // less words for description
        if (str.length > 100) {
            return str.split('').slice(0, 100).join('') + '...'
        } else {
            return str
        }
    }


    function maxNameLength(str) { // less words for name
        if (str.length > 30) {
            return str.split('').slice(0, 20).join('') + '...'
        } else {
            return str
        }
    }

    function JobList(job) { // show job
        return (
            <div className='jobs-main-box'>
                <h4 className='jobs-box-date'>{filterTime(job?.updated_at)}</h4>
                <p className='jobs-box-category'>{job?.category}</p>
                <h3 className='jobs-box-city'><img src="https://img.icons8.com/ios/50/000000/region-code.png" />{job?.city}</h3>
                <p className='jobs-box-paragraph'>  {maxLength(job?.description)}  </p>
                <Link to={`/job/${job?.id}`} id='none'><p className="jobs-box-learn">Job Description</p></Link>
            </div>
        )
    }

    function FilterData(data) { // FILTER
        if (!formData.category) {
            if (formData.city == data.city) {
                return JobList(data)
            }
        } else if (formData.category) {
            if (formData.city == data.city && formData.category == data.category) {
                return JobList(data)
            } else if (formData.city == data.city && formData.category == "all") {
                return JobList(data)
            }
        }
    }

    return (
        <div className="jobs-main-container">
            {/* <div className="jobs-main-photo ">
                <img src={Wall} />
            </div> */}
            <h1 className="jobs-main-text">Search for jobs</h1>
            <div className="jobs-main-middle">
                <div className='jobs-main-first'>
                    <div className='jobs-select'>
                        {/* <h3>Filters</h3> */}
                        {/* 1 */}
                        <select required name='state' onChange={(e) => {
                            setCities(states[e.target.value])
                            handleChange(e)
                            formData.city = states[e.target.value][cities.indexOf(formData.city)] // for city selected update
                        }}>
                            <option selected disabled>Choose State</option>
                            {Object.keys(states).map((oneState) =>
                                <option value={oneState}>{oneState}</option>
                            )}
                        </select>
                        {/* 2 */}
                        <select name="city" onChange={(e) => {
                            handleChange(e)
                        }}>
                            <option selected disabled>Choose City</option>
                            {cities && cities.map((city) =>
                                <option value={city}>{city}</option>
                            )}
                        </select>
                        {/* The rest */}
                        <select name="category" onChange={(e) => {
                            handleChange(e)
                        }}>
                            <option selected disabled value=''>Choose Category</option>
                            {formData.city && categories.map((category) =>
                                <option value={category}>{category}</option>
                            )}
                        </select>
                        <select name="employment_type" onChange={(e) => {
                            handleChange(e)
                        }}>
                            <option selected disabled value=''>Choose Employment Type</option>
                            {formData.city && employmentOptions.map((type) =>
                                <option value={type}>{type}</option>
                            )}
                        </select>
                        <button className="job-select-button" onClick={() => {
                            window.location.reload();
                        }}>Reset</button>
                        <Link to="/jobs/byemployee" id="none"><p className="jobs-link"> I'm looking for employees</p></Link>
                    </div>
                </div>
                <div className="jobs-main-second">
                    {jobs.map((job) => {
                        if (formData.city) {
                            return FilterData(job)
                        } else return JobList(job)
                    })}
                </div>
            </div>
        </div >
    )
}

