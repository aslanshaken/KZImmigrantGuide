import './HousesForRent.css';
import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';
import AD from '../../assets/ad1.png'

export default function HousesForRent(props) {

    const { housesForRent } = props // get read only data from App.js

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
        <div className="houses-for-rent-main-container">
            {/* <div className="houses-for-rent-main-photo ">
                <img src={AD} />
            </div> */}
            <h1>Houses For Rent in the USA</h1>
            <div className='houses-for-rent-select'>
                <select>
                    <option value=''>Select State</option>
                </select>
                <select>
                    <option value=''>Select City</option>
                </select>
                <select>
                    <option value=''>Select Bathroom</option>
                </select>
                <select>
                    <option value=''>Select Price</option>
                </select>
                <p><Link to="/houses/wanted" id="none"> People looking to rent a house</Link></p>
            </div>
            <div className="houses-for-rent-main-middle">
                <div className="houses-for-rent-main-left">
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
                <div className='houses-for-rent-main-right'>
                    <img src={AD} />
                </div>
            </div>
        </div>
    )
}
