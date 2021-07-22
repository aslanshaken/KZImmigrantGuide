import './CityInformation.css';
import { Link, useHistory } from 'react-router-dom'
import Facebook from '../../assets/facebook.svg'
import Whatsapp from '../../assets/whatsapp.svg'
import Telegram from '../../assets/telegram.svg'

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

    const currentDate = new Date()

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


    return (
        <div className="city-main-container">
            <div className="city-wall">
                <img className="city-wall-img" src="https://wallpaperaccess.com/full/26313.jpg" />
                <p className="city-wall-text">NEW YORK</p>
            </div>
            <div className="city-welcome-text">
                <h2>Welcome to New York</h2>
                <hr />
                <p>Here you can find up-to-date information on various topics
                    <br />
                    including housing and lease/rent, job-hunting and offering, cultural gatherings etc.
                </p>
            </div>

            {/* JOB OFFER */}
            <div className="city-main-jobs">
                <h3>Job Offers</h3>
                <div className="city-jobs">
                    {jobs.map((job) => {
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
                    })}
                </div>
            </div>
            {/* JOB OFFER */}
            <div className="city-main-jobs">
                <h3>Job Wanted/Resumes</h3>
                <div className="city-jobs">
                    {jobsByEmployee.map((job) => {
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
                    })}
                </div>
            </div>

            {/* HOUSE FOR RENT*/}
            <div className="city-houses-main">
                <h3>Houses For Rent</h3>
                <div className="city-houses-middle">
                    {housesForRent.map((house) => {
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
                    })}
                </div>
            </div>

            {/* HOUSE Wanted*/}
            <div className="city-houses-main">
                <h3>Houses Wanted</h3>
                <div className="city-houses-middle">
                    {houseWanted.map((house) => {
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
                    })}
                </div>
            </div>

            {/* Community */}
            <div className="city-community-main">
                <h3>Communities</h3>
                <div className="city-community-main-boxes">
                    {allCommunities.map((community) => {
                        if (getCurrentDate(community.community?.created_at) == currentDate.getDate()) {
                            return false
                        } else {
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

            {/* BLOGS */}
            <div className="city-blogs-main">
                <h3>Blogs</h3>
                <div className="city-blogs-center">
                    {blogs.map((blog) => {
                        return (
                            <div className="city-blogs-box">
                                <img src={!blog.image ? "https://images.unsplash.com/photo-1504691342899-4d92b50853e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ2dlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" : blog.image?.url} />
                                <div className="city-blogs-box-text">
                                    <h3>{blog.blog.title}</h3>
                                    <h4>by: {blog.blog.name}</h4>
                                    <Link to={`/blog/${blog.blog.id}`} className="city-blogs-box-read-more">Read More</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}