import './HousesWanted.css';
import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';
import AD from '../../assets/ad1.png'
import { UsaStatesAndCities, Bedrooms } from '../../assets/Usa' // Filter

export default function HousesWanted(props) {

    const { houseWanted } = props // get read only data from App.js

    // FILTER
    const states = UsaStatesAndCities() // get a list of states
    const bedroomsType = Bedrooms() // get bedroom list
    const [cities, setCities] = useState([]) // get chosen cities county
    const [stateCityCheck, setStateCityCheck] = useState(false)
    const [formData, setFormData] = useState({
        state: '',
        city: '',
        bedroom: ''
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

    function HousesList(house) {
        return (
            <div className='houses-wanted-main-box'>
                <div className='houses-wanted-box-upper'>
                    {/* <p className="houses-wanted-box-img-price">${house.post_house_wanted.price}</p> */}
                    <p className='houses-wanted-box-img-date'>{filterDate(house.post_house_wanted.updated_at)}</p>
                </div>
                <img className='houses-wanted-box-img' src={!house.image ? "https://as2.ftcdn.net/jpg/01/75/38/45/500_F_175384555_nJHTQaacAVkFekOTpZCtPCzUzy572yGf.jpg" : house.images[0]?.url} />
                <div className='houses-wanted-box-upper'>
                    <p className="houses-wanted-box-img-price">{house.post_house_wanted.bathroom}</p>
                    <p className='houses-wanted-box-img-date'>{house.post_house_wanted.state},{house.post_house_wanted.city}</p>
                </div>
                <p className='houses-wanted-box-name'>{maxLength(house.post_house_wanted.name)}</p>
                <div className='houses-wanted-box-upper'>
                    <p className="houses-wanted-box-img-price">{house.post_house_wanted.cellphone}</p>
                    <p className='houses-wanted-box-img-date'><Link to={`/house/wanted/${house.post_house_wanted.id}`} id="none">Learn More</Link></p>
                </div>
            </div>
        )
    }


    function FilterData(data) { // FILTER
        if (!formData.bedroom) {
            if (formData.city == data.post_house_wanted.city) {
                return HousesList(data)
            }
        } else if (formData.bedroom) {
            if (formData.city == data.post_house_wanted.city && formData.bedroom == data.post_house_wanted.bathroom) {
                return HousesList(data)
            } else if (formData.city == data.post_house_wanted.city && formData.bedroom == "all") {
                return HousesList(data)
            }
        }
    }


    const checkStateCity = () => !formData.state && !formData.city && setStateCityCheck(true) // check for state and city

    return (
        <div className="houses-wanted-main-container">
            {/* <div className="houses-wanted-main-photo ">
                <img src={AD} />
            </div> */}
            <h1 className='houses-wanted-main-text'>House For Rent</h1>
            <div className="houses-wanted-main-middle">
                <div className='houses-wanted-main-left'>
                    <div className='houses-wanted-select'>
                        <h3>FILTER</h3>
                        {stateCityCheck && <h4 className='houses-wanted-select-choose-state-city'>Please select state and city first.</h4>}
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
                        <select name="bedroom" onClick={checkStateCity} onChange={handleChange}>
                            <option selected disabled value=''>Bedroom</option>
                            {formData.city && bedroomsType.map((type) =>
                                <option value={type}>{type}</option>
                            )}
                        </select>
                        <button className="houses-wanted-select-button" onClick={() => {
                            window.location.reload();
                        }}><img src="https://img.icons8.com/ios-glyphs/30/000000/recurring-appointment.png" />RESET SEARCH</button>
                        <div className="houses-wanted-select-line"></div>
                        <Link to="/housesforrent" id="none"><p className="jobs-link"> House For Rent</p></Link>
                    </div>
                </div>
                <div className="houses-wanted-main-right">
                    {houseWanted.map((house) => {
                        if (formData.city) { return FilterData(house) }
                        else return HousesList(house)
                    })}
                </div>
            </div>
        </div>
    )
}




