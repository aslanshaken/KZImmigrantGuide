import './JobsByEmployee.css'
import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Wall from '../../assets/job3.jpg'
import AD from '../../assets/ad1.png'
import { UsaStatesAndCities, Categories, EmploymentTypes } from '../../assets/Usa' // Filter

export default function JobsByEmployee(props) {

    const { jobsByEmployee } = props // get read only data from App.js
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

    function filterDate(str) { // filter time
        const mdy = str.split('T')[0]
        const date = mdy.split('-')[1] + '-' + mdy.split('-')[2] + '-' + mdy.split('-')[0]
        return date
    }

    function maxLength(str) { // less words for description
        if (str.length > 90) {
            return str.split('').slice(0, 90).join('') + 'Read More..'
        } else {
            return str
        }
    }

    function maxNameLength(str) { // less words for name
        if (str.length > 30) {
            return str.split('').slice(0, 60).join('') + '...'
        } else {
            return str
        }
    }

    function capitalizeFirstLetter(string) { // FILTER
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function FilterData(data) { // FILTER
        if (!formData.category) {
            if (formData.city == data.city) {
                return JobsByEmployeeList(data)
            }
        } else if (formData.category) {
            if (formData.city == data.city && formData.category == data.category) {
                return JobsByEmployeeList(data)
            } else if (formData.city == data.city && formData.category == "all") {
                return JobsByEmployeeList(data)
            }
        }
    }

    function JobsByEmployeeList(data) {
        return (
            <div className='jobsByEmployee-main-box'>
                <h4 className='jobsByEmployee-box-date'>{filterDate(data?.updated_at)}</h4>
                <p className='jobsByEmployee-box-category'>{capitalizeFirstLetter(data?.category)}</p>
                <h4 className='jobsByEmployee-box-city'><img src="https://img.icons8.com/ios/50/000000/region-code.png" />{data?.city}</h4>
                <p className='jobsByEmployee-box-paragraph'>  {maxLength(data?.about)}  </p>
                <Link to={`/job/byemployee/${data?.id}`} id='none'><p className="jobsByEmployee-box-learn">Read More</p></Link>
            </div>
        )
    }

    const checkStateCity = () => !formData.state && !formData.city && setStateCityCheck(true) // check for state and city

    return (
        <div className="jobsByEmployee-main-container">
            {/* <div className="jobsByEmployee-main-photo ">
                <img src={AD} />
            </div> */}
            <h1 className="jobs-main-text">Employees in the USA</h1>
            <div className="jobsByEmployee-main-middle">
                <div className='jobsByEmployee-main-left'>
                    <div className='jobsByEmployee-select'>
                        <h3>FILTER</h3>
                        {stateCityCheck && <h4 className='jobsByEmployee-select-choose-state-city'>Please select state and city first.</h4>}
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
                        <button className="jobsByEmployee-select-button" onClick={() => {
                            window.location.reload();
                        }}><img src="https://img.icons8.com/ios-glyphs/30/000000/recurring-appointment.png"/>RESET SEARCH</button>
                        <div className="jobsByEmployee-select-line"></div>
                        <Link to="/jobs" id="none"><p className="jobs-link"> Looking for job</p></Link>
                    </div>
                </div>
                <div className="jobsByEmployee-main-right">
                    {jobsByEmployee.map((job) => {
                        if (formData.city) {
                            return FilterData(job)
                        } else return JobsByEmployeeList(job)
                    })}
                </div>
            </div >
        </div >
    )
}