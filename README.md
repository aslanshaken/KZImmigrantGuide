# Info-Box<!-- omit in toc -->
Link - https://qazaq-republic.netlify.app/

### Date:
March, 2021 - Present 

### Brief short description: 
To help people everywhere find what they love. The web source aims to integrate all people in the US. It’s planned to be a digital toolbox and a source facilitator, where people will get veracious up-to-date information on various topics, including immigration, legalization, housing and lease/rent, job-hunting and offering, cultural gatherings etc.

At large, it should grow as a communication medium and resource sharing channel for all people.
Project is non-profit and encourages volunteering among our counterparts.


### Features: 

#### MVP 

A user can - read only 

- Job-Hunting  or looking for employees.
- Search for a house/apt/room for rent or landlords who  lease  housing properties.
- Search for all types of available services, including financial, household, travel, beauty, etc.  
- Search for Communities in the US. Through  this platform, a user will be able to find these communities by state and city, and get a brief description of any     groups such as location, admin, contact information and so on. 
- Search for the blogs. Each blog will cover important topics to discuss here in the US. 
- Search for any topics in the discussion forums. In this place, a user can choose any topic and discuss it, or find ready answers from users’ experiences. 
- Search for upcoming events in their location and join meetings. 
- Look up the donation page. It provides information about the people who need help with medicines or buy essential things. 
- Choose the city and look for all types of jobs,housing,services, events, etc only in the chosen city. 


A user can - post/edit/delete 

- Create their own account. 
- Add their own information such as avatar image, cellphone, gender, about me, current city, education, social media links, etc. 
- Signed users can create “a post” for jobs,housing, service they provide, add communities or blogs, chat with others in discussion forums and add upcoming        events. 
- Signed users can control all their post listings in the “my account” feature. They can turn on/off, edit and delete their listings. 
- Receive a four digit code to their email address if they use the “forget password” or “update password” features.  


### Component Hierarchy
https://github.com/aslanshaken/KZImmigrantGuide/blob/main/client/src/assets/KZ%20hierarchy.png?raw=true

### Table
https://github.com/aslanshaken/KZImmigrantGuide/blob/main/client/src/assets/KZtable.png?raw=true


### Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 10 |Prompt / Wireframes / Priority Matrix / Timeframes | Completed
|July 12| Project Approval | Completed
|July 15| Core Application Structure (HTML, CSS, React etc.) | Completed
|July 20| Pseudocode / actual code | Completed
|July 25| Initial Clickable Model  | Completed
|July 30| MVP | Completed
|August 2-5 | Test | Completed
|August 5-10 | Fix Bugs | In the process


### The origins of the  idea:  

At the age of 18, I moved to the US in pursuit of my dreams. As a young new face, with a weak knowledge of English and life experience in the city of New York, I had difficulties in finding a good affordable housing and a comparatively well paid job. These life challenges of adulthood made me stronger and led me to learn new skills. When I found my interest in coding, I joined boot-camp classes, where I have been challenged to create a project with full stack features. One of my friends accidentally pitched me an idea of this platform, when he asked about job/housing , immigration and information about New-York based communities.

While I was helping him, I developed the idea of the platform, which should digital guide to people to pursue their needss.




### Code Snippet

```json
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

```


