import './Jobs.css'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { useState } from 'react';
import Wall from '../../assets/ad1.png'
import AD from '../../assets/ad1.png'
import { UsaStatesAndCities, Categories, EmploymentTypes } from '../../assets/Usa' // FILTER


export default function Jobs(props) {
    const { jobs } = props // get jobs data from App.js

    // FILTER
    const states = UsaStatesAndCities() // get a list of states
    const categories = Categories() // get a list of categories
    const employmentOptions = EmploymentTypes() // get a list of employment types
    const [cities, setCities] = useState([]) // get chosen cities county
    const [stateCityCheck, setStateCityCheck] = useState(false)
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
            return str.split('').slice(0, 140).join('') + '...'
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

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function JobList(data) { // show job
        return (
            <div className='jobs-main-box'>
                <div className='jobs-box-upper'>
                    <h5>{data?.category}</h5>
                    <h5>{filterTime(data?.updated_at)}</h5>
                    <h5 className='jobs-box-city'>{data?.city}</h5>
                </div>
                <p>{data?.job_name}</p>
                <p className='jobs-box-about'>{maxLength(data?.description)} </p>
                <div className="jobs-box-bottom">
                    <p>{data?.cellphone}</p>
                    <p>{data?.email}</p>
                    <p><Link className="jobs-box-learn" to={`/job/${data?.id}`} id="none">Learn more</Link></p>
                </div>
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

    const checkStateCity = () => !formData.state && !formData.city && setStateCityCheck(true) // check for state and city

    return (
        <div className="jobs-main-container">
            {/* <div className="jobs-main-photo ">
                <img src={Wall} />
            </div> */}
            <h1 className="jobs-main-text">Search for jobs</h1>
            <div className="jobs-main-middle">
                <div className='jobs-main-first'>
                    <div className='jobs-select'>
                        <h3>FILTER</h3>
                        {stateCityCheck && <h4 className='jobs-select-choose-state-city'>Please select state and city first.</h4>}
                        {/* 1 */}
                        <select required name='state' onChange={(e) => {
                            setCities(states[e.target.value])
                            handleChange(e)
                            setStateCityCheck(false)
                            formData.city = states[e.target.value][cities.indexOf(formData.city)] // for city selected update
                        }}>
                            <option selected disabled>State</option>
                            {Object.keys(states).map((oneState) =>
                                <option value={oneState}>{oneState}</option>
                            )}
                        </select>
                        {/* 2 */}
                        <select name="city" onClick={checkStateCity} onChange={handleChange}>
                            <option selected disabled> City</option>
                            {cities && cities.map((city) =>
                                <option value={city}>{city}</option>
                            )}
                        </select>
                        {/* The rest */}
                        <select name="category" onClick={checkStateCity} onChange={handleChange}>
                            <option selected disabled value=''>Job Types</option>
                            {formData.city && categories.map((category) =>
                                <option value={category}>{category}</option>
                            )}
                        </select>
                        <select name="employment_type" onClick={checkStateCity} onChange={handleChange}>
                            <option selected disabled value=''>Employment Type</option>
                            {formData.city && employmentOptions.map((type) =>
                                <option value={type}>{type}</option>
                            )}
                        </select>
                        <button className="job-select-button" onClick={() => {
                            window.location.reload();
                        }}><img src="https://img.icons8.com/ios-glyphs/30/000000/recurring-appointment.png"/>RESET SEARCH</button>
                        <div className="jobs-select-line"></div>
                        <Link to="/jobs/byemployee" id="none"><p className="jobs-link"> Looking for employees</p></Link>
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

