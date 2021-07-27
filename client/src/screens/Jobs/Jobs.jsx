import './Jobs.css'
import { Link, useHistory } from 'react-router-dom'
import Select from 'react-select'
import { useState, useEffect } from 'react';
import Wall from '../../assets/ad1.png'
import AD from '../../assets/ad1.png'
import { UsaStatesAndCities, Categories } from '../../assets/Usa'


export default function Jobs(props) {
    const { jobs } = props // get read only data from App.js
    const states = UsaStatesAndCities() // get a list of states
    const categories = Categories() // get a list of categories

    const [category, setCategory] = useState() // 3
    const [city, setCity] = useState() // 2
    const [cities, setCities] = useState([]) // 1

    const [formData, setFormData] = useState({
        state: '',
        city: '',
        category: '',
        employment_type: ''
    })

    function filterDate(str) { // filter time
        const mdy = str.split('T')[0]
        const date = mdy.split('-')[1] + '-' + mdy.split('-')[2] + '-' + mdy.split('-')[0]
        return date
    }

    function maxLength(str) { // less words for description
        if (str.length > 30) {
            return str.split('').slice(0, 60).join('') + '...'
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


    return (
        <div className="jobs-main-container">
            {/* <div className="jobs-main-photo ">
                <img src={Wall} />
            </div> */}
            <h1>Jobs in the USA</h1>
            <div className="jobs-main-middle">
                <div className='jobs-main-left'>
                    <div className='jobs-select'>
                        <h3>Filter</h3>
                        1 <select onChange={(e) => setCities(states[e.target.value])}>
                            <option selected disabled>Select State</option>
                            {Object.keys(states).map((oneState) => <option value={oneState}>{oneState}</option>)}
                        </select>
                        2 <select onChange={(e) => setCity(e.target.value)}>
                            <option selected disabled>Select City</option>
                            {cities && cities.map((city) => <option value={city}>{city}</option>)}
                        </select>
                        3 <select onChange={(e) => setCategory(e.target.value)}>
                            <option value=''>Select Category</option>
                            {city && categories.map((category) => <option value={category}>{category}</option>)}
                        </select>
                        <div className="job-select-buttons">
                            <button onClick={() => {
                                window.location.reload();
                            }}>Reset</button>
                            <button>Search</button>
                        </div>
                        <p><Link to="/jobs/byemployee" id="none"> I'm looking for employees</Link></p>
                    </div>
                </div>
                <div className="jobs-main-right">
                    {jobs.map((job) => {
                        return (
                            <div className='jobs-main-box'>
                                <div className='jobs-box-upper'>
                                    <h6>{filterDate(job?.updated_at)}</h6>
                                    <h6>{job?.city}</h6>
                                </div>
                                <p><b>{maxNameLength(job?.job_name)}</b></p>
                                <p>Description: <b>{maxLength(job?.description)}</b></p>
                                <p>Category:<b> {job?.category}</b> </p>
                                <div className="jobs-box-bottom">
                                    <p>{job?.cellphone}</p>
                                    <p>{job?.email}</p>
                                    <p><Link className="jobs-box-learn" to={`/job/${job?.id}`} id="none">Learn more</Link></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

