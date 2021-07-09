import './HousesForRent.css';
import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';
import AD from '../../assets/ad1.png'

export default function HousesForRent(props) {

    const { housesForRent } = props // get read only data from App.js
    console.log(housesForRent)

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
        <div className="houses-for-rent-main-container">
            <div className="houses-for-rent-main-photo ">
                <img src={AD} />
            </div>
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
                <p><Link to="/houses-for-rent-by-employee" id="none"> People looking to rent a house</Link></p>
            </div>
            <div className="houses-for-rent-main-middle">
                <div className="houses-for-rent-main-left">
                    {housesForRent.map((house) => {
                        return (
                            <div className='houses-for-rent-main-box'>
                                <div className='houses-for-rent-box-upper'>
                                    <p className="houses-for-rent-box-img-price">Price</p>
                                    <p className='houses-for-rent-box-img-date'>Date Of Move in</p>
                                </div>
                                <img className='houses-for-rent-box-img' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
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
