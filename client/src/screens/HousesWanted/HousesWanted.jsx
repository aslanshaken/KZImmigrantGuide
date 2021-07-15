import './HousesWanted.css';
import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';
import AD from '../../assets/ad1.png'

export default function HousesWanted(props) {

    const { houseWanted } = props // get read only data from App.js

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

    return (
        <div className="houses-wanted-main-container">
            <div className="houses-wanted-main-photo ">
                <img src={AD} />
            </div>
            <h1>House Wanted in the USA </h1>
            <div className='houses-wanted-select'>
                <select>
                    <option value=''>Select State</option>
                </select>
                <select>
                    <option value=''>Select City</option>
                </select>
                {/* <select>
                    <option value=''>Select Bathroom</option>
                </select>
                <select>
                    <option value=''>Select Price</option>
                </select> */}
                <p><Link to="/houses-for-rent" id="none"> House for rent</Link></p>
            </div>
            <div className="houses-wanted-main-middle">
                <div className="houses-wanted-main-left">
                    {houseWanted.map((house) => {
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
                                <p>{maxLength(house.post_house_wanted.name)}</p>
                                <div className='houses-wanted-box-upper'>
                                    <p className="houses-wanted-box-img-price">{house.post_house_wanted.cellphone}</p>
                                    <p className='houses-wanted-box-img-date'><Link to={`/house-wanted/${house.post_house_wanted.id}`} id="none">Learn More</Link></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='houses-wanted-main-right'>
                    <img src={AD} />
                </div>
            </div>
        </div>
    )
}
