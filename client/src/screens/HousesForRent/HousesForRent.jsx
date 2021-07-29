import './HousesForRent.css';
import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';
import AD from '../../assets/ad1.png'
import { UsaStatesAndCities, Categories, EmploymentTypes } from '../../assets/Usa' // Filter

export default function HousesForRent(props) {

    const { housesForRent } = props // get read only data from App.js

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
        if (str.length > 60) {
            return str.split('').slice(0, 80).join('') + '...'
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
    const checkStateCity = () => !formData.state && !formData.city && setStateCityCheck(true) // check for state and city

    return (
        <div className="houses-for-rent-main-container">
            {/* <div className="houses-for-rent-main-photo ">
                <img src={AD} />
            </div> */}
            <h1 className='houses-for-rent-main-text'>House For Rent</h1>
            <div className="houses-for-rent-main-middle">
                <div className='houses-for-rent-main-left'>
                    <div className='houses-for-rent-select'>
                        <h3>FILTER</h3>
                        {stateCityCheck && <h4 className='houses-for-rent-select-choose-state-city'>Please select state and city first.</h4>}
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
                        {/* <select name="category" onClick={checkStateCity} onChange={handleChange}>
                            <option selected disabled value=''>Job Types</option>
                            {formData.city && categories.map((category) =>
                                <option value={category}>{category}</option>
                            )}
                        </select> */}
                        <select name="employment_type" onClick={checkStateCity} onChange={handleChange}>
                            <option selected disabled value=''>Bedroom</option>
                            {formData.city && employmentOptions.map((type) =>
                                <option value={type}>{type}</option>
                            )}
                        </select>
                        <button className="houses-for-rent-select-button" onClick={() => {
                            window.location.reload();
                        }}><img src="https://img.icons8.com/ios-glyphs/30/000000/recurring-appointment.png" />RESET SEARCH</button>
                        <div className="houses-for-rent-select-line"></div>
                        <Link to="/houses/wanted" id="none"><p className="jobs-link"> Who needs house</p></Link>
                    </div>
                </div>
                <div className="houses-for-rent-main-right">
                    {housesForRent.map((house) => {
                        return (
                            <div className='houses-for-rent-main-box'>
                                <div className='houses-for-rent-box-upper'>
                                    <p className="houses-for-rent-box-img-price">${house.post_house.price}</p>
                                    <p className='houses-for-rent-box-img-date'>{filterDate(house.post_house.updated_at)}</p>
                                </div>
                                <img className='houses-for-rent-box-img' src={!house.images[0] ? "http://www.mylaporetimes.com/wp-content/uploads/2020/07/rent-clipart-for-rent-sign-vector-art-illustration-612.jpg" : house.images[0]?.url} />
                                <div className='houses-for-rent-box-upper'>
                                    <p className="houses-for-rent-box-img-price">{house.post_house.bathroom}</p>
                                    <p className='houses-for-rent-box-img-date'>{house.post_house.state},{house.post_house.city}</p>
                                </div>
                                <p>{maxLength(house.post_house.name)}</p>
                                <div className='houses-for-rent-box-upper'>
                                    <p className="houses-for-rent-box-img-price">{house.post_house.cellphone}</p>
                                    <p className='houses-for-rent-box-img-date'><Link to={`/houseforrent/${house.post_house.id}`} id="none">Learn More</Link></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
