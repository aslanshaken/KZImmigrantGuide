import './CityInformation.css';
import { Link, useHistory, useParams, } from 'react-router-dom'
import { useState, useEffect } from 'react';

// Import Images
import Facebook from '../../assets/facebook.svg'
import Whatsapp from '../../assets/whatsapp.svg'
import Telegram from '../../assets/telegram.svg'
import Dallas from '../../assets/dallas.jpg'
import LosAngeles from '../../assets/los-angeles.jpg'
import NewYork from '../../assets/new-york.jpg'
import Miami from '../../assets/miami.jpg'
import Chicago from '../../assets/chicago.jpg'
import Cincinnati from '../../assets/cincinaty.jpg'
import House from '../../assets/house.svg'
import { func } from 'prop-types';


export default function CityInformation(props) {

    // Get data from app.js
    const {
        currentUser,
        jobs,
        jobsByEmployee,
        housesForRent,
        houseWanted,
        allCommunities,
        blogs
    } = props

    const { city } = useParams(); // 1. get the city name from link
    const [showData, setShowData] = useState('empty')

    const currentDate = new Date()  // get current date

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

    function getCurrentDate(str) { // filter time
        if (str) {
            const mdy = str.split('T')[0]
            const date = mdy.split('-')[2]
            return date
        }
    }

    function checkWallImage() {
        if (city == "new-york") {
            return NewYork
        }
        if (city == "los-angeles") {
            return LosAngeles
        }
        if (city == 'dallas') {
            return Dallas
        }
        if (city == 'miami') {
            return Miami
        }
        if (city == 'chicago') {
            return Chicago
        }
        if (city == 'cincinnati') {
            return Cincinnati
        }
    }


    function getJobs() {
        return (
            < div className="city-main-jobs" >
                <h3>Job Offers</h3>
                <div className="city-jobs">
                    {jobs.map((job) => {
                        if (job?.city.toLowerCase() == city) {
                            return (
                                <div className='city-job-main-box'>
                                    <div className='city-job-box-upper'>
                                        <h6>{filterDate(job?.updated_at)}</h6>
                                        <h6>{job?.city}</h6>
                                    </div>
                                    <p><b>{maxNameLength(job?.job_name)}</b></p>
                                    <p>Description: <b>{maxLength(job?.description)}</b></p>
                                    <p>Category:<b> {job?.category}</b> </p>
                                    <div className="city-job-box-bottom">
                                        <p>{job?.cellphone}</p>
                                        <p>{job?.email}</p>
                                        <p><Link className="city-job-box-learn" to={`/job/${job?.id}`} id="none">Learn more</Link></p>
                                    </div>
                                </div>
                            )
                        }

                    })}
                </div>
                <hr></hr>
                <h3>Job Wanted/Resumes</h3>
                <div className="city-jobs">
                    {jobsByEmployee.map((job) => {
                        if (job?.city.toLowerCase() == city) {
                            return (
                                <div className='city-job-wanted-main-box'>
                                    <div className='city-job-box-upper'>
                                        <h6>{filterDate(job?.updated_at)}</h6>
                                        <h6>{job?.city}</h6>
                                    </div>
                                    <p><b>{maxNameLength(job?.title)}</b></p>
                                    <p>Name: <b> {maxNameLength(job?.name)}</b></p>
                                    <p>Description:<b> {maxLength(job?.about)}</b> </p>
                                    <p>Category:<b>  {job?.category}</b>  </p>
                                    <div className="city-job-box-bottom">
                                        <p>{job?.cellphone}</p>
                                        <p>{job?.email}</p>
                                        <p><Link className="city-jobs-box-learn" to={`/job/byemployee/${job?.id}`} id="none">Learn more</Link></p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div >
        )
    }

    function getHouse() {
        return (
            <div className="city-houses-main">
                <h3>Houses For Rent</h3>
                <div className="city-houses-middle">
                    {housesForRent.map((house) => {
                        if (house.post_house?.city.toLowerCase() == city) {
                            return (
                                <div className='city-houses-main-box'>
                                    <div className='city-houses-box-upper'>
                                        <p>${house.post_house.price}</p>
                                        <p >{filterDate(house.post_house.updated_at)}</p>
                                    </div>
                                    <img className='city-houses-box-img' src={!house.images[0] ? "http://www.mylaporetimes.com/wp-content/uploads/2020/07/rent-clipart-for-rent-sign-vector-art-illustration-612.jpg" : house.images[0]?.url} />
                                    <div className='city-houses-box-upper'>
                                        <p >{house.post_house.bathroom}</p>
                                        <p >{house.post_house.state},{house.post_house.city}</p>
                                    </div>
                                    <p>{maxLength(house.post_house.name)}</p>
                                    <div className='city-houses-box-upper'>
                                        <p >{house.post_house.cellphone}</p>
                                        <p ><Link to={`/houseforrent/${house.post_house.id}`} id="none">Learn More</Link></p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                <hr></hr>
                <h3>Houses Wanted</h3>
                <div className="city-houses-middle">
                    {houseWanted.map((house) => {
                        if (house.post_house_wanted?.city.toLowerCase() == city) {
                            return (
                                <div className='city-houses-main-box'>
                                    <div className='city-houses-box-upper'>
                                        <p >{filterDate(house.post_house_wanted.updated_at)}</p>
                                    </div>
                                    <img className='city-houses-box-img' src={!house.image ? "http://www.mylaporetimes.com/wp-content/uploads/2020/07/rent-clipart-for-rent-sign-vector-art-illustration-612.jpg" : house.images[0]?.url} />
                                    <div className='city-houses-box-upper'>
                                        <p >{house.post_house_wanted.bathroom}</p>
                                        <p >{house.post_house_wanted.state},{house.post_house_wanted.city}</p>
                                    </div>
                                    <p>{maxLength(house.post_house_wanted.name)}</p>
                                    <div className='city-houses-box-upper'>
                                        <p >{house.post_house_wanted.cellphone}</p>
                                        <p ><Link to={`/houseforrent/${house.post_house_wanted.id}`} id="none">Learn More</Link></p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

        )
    }

    function getCommunities() {
        return (
            <div className="city-community-main">
                <h3>Communities</h3>
                <div className="city-community-main-boxes">
                    {allCommunities.map((community) => {
                        if (getCurrentDate(community.community?.created_at) != currentDate.getDate() && community.community?.city.toLowerCase() == city) {
                            return (
                                <div className="city-community-box">
                                    <div className="city-community-box-left">
                                        <h2>{community.community?.city}</h2>
                                        <img src={!community.image ? "https://socialmediaweek.org/wp-content/blogs.dir/1/files/FB-Admins.jpg" : community.image?.url} />
                                        <h4><b>{community.community?.name_community}</b></h4>
                                        <p><b>State:</b> {community.community?.state}</p>
                                        <p><b>Members:</b> {community.community?.members_count}</p>
                                        <p><b>Admin:</b> {community.community?.contact_name}</p>
                                        <p><b>Cellphone:</b> {community.community?.contact_phone}</p>
                                        <p><b>Email:</b> {community.community?.contact_email}</p>
                                        <p><b>Last update: </b> {filterDate(community.community?.updated_at)}</p>
                                        <div className='city-community-box-links'>
                                            <a href={community.community?.facebook}><img src={Facebook} /></a>
                                            <a href={community.community?.telegram}><img src={Telegram} /></a>
                                            <a href={community.community?.whatsapp}><img src={Whatsapp} /></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }

    return (
        <div className="city-main-container">
            <div className="city-wall">
                <img className="city-wall-img" src={checkWallImage()} />
                <p className="city-wall-text">{city.toUpperCase()}</p>
            </div>
            <div className="city-welcome-text">
                <h2>Welcome to {city.toUpperCase()}</h2>
                <hr />
                <p>Here you can find up-to-date information on various topics
                    <br />
                    including housing and lease/rent, job-hunting and offering, cultural gatherings etc.
                </p>
            </div>

            <div className="city-to-choose">
                <div className='city-to-choose-box' onClick={() => setShowData('job')}>
                    <img src="https://img.icons8.com/carbon-copy/100/000000/find-matching-job.png" /> <h2>Job</h2>
                </div>
                <div className='city-to-choose-box' onClick={() =>setShowData('house')}>
                    <img src="https://img.icons8.com/dotty/80/000000/prefab-house.png" /><h2>House</h2>
                </div>
                <div className='city-to-choose-box' onClick={() =>setShowData('service')}>
                    <img src="https://img.icons8.com/ios/100/000000/handshake--v1.png" /><h2>Service</h2>
                </div>
                <div className='city-to-choose-box' onClick={() =>setShowData('community')}>
                    <img src="https://img.icons8.com/ios/100/000000/people-working-together.png" /><h2>Community</h2>
                </div>
            </div>

            {/* JOB OFFER */}
            {showData == 'job' && getJobs()}

            {/* HOUSE FOR RENT*/}
            {showData == 'house' && getHouse()}

            {/* Community */}
            {showData == 'community' && getCommunities()}

        </div>
    )
}