import './AccountListings.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { destroyOneJobForEmployee } from '../../services/getEmployees'
import { destroyOneEmployeePost } from '../../services/postByEmployees'
import { destroyOneBlog } from '../../services/blogs'
import { destroyOneCommunity } from '../../services/communities'

export default function AccountListings(props) {

    // Get data from app.js
    const {
        currentUser,
        jobs,
        jobsByEmployee,
        houseForRent,
        houseWanted,
        communities,
        blogs
    } = props
    const history = useHistory();
    const [categoryToggle, setCategoryToggle] = useState("all")


    function filterDate(str) {
        const mdy = str.split('T')[0]
        const date = mdy.split('-')[1] + '-' + mdy.split('-')[2] + '-' + mdy.split('-')[0]
        return date
    }

    function maxLength(str) {
        if (str.length > 25) {
            return str.split('').slice(0, 30).join('') + '  ....'
        } else {
            return str
        }
    }


    return (
        <div className="account-listings-container">
            <div className="account-listings-main-photo">
                <img id="user-img-listings" src={currentUser?.image === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU" : currentUser?.image.url} />
                <h2>{currentUser?.user.first_name} {currentUser?.user.last_name}</h2>
            </div>
            <div className="account-listings-links">
                <h3><Link to="account" id="none">Personal Information</Link></h3>
                <h3 id="account-chosen">Listings</h3>
            </div>
            <div>
                <select onClick={(e) => { setCategoryToggle(e.target.value) }}>
                    <option value="all"> All Categories</option>
                    <option value="availableJobs" >Available jobs</option>
                    <option value="needJob" >I'm looking for a job</option>
                    <option value="houseRent" >House for rent</option>
                    <option value="houseWanted" >House Wanted</option>
                    <option value="communities" >Communities</option>
                    <option value="blogs" >Blogs</option>

                </select>
            </div>
            <div className="account-listings-middle">
                <div className="account-listings-flex" >
                    {jobs.map((job) => {
                        if (job.user_id == currentUser?.user.id) {
                            return (
                                <div
                                    className={categoryToggle === "all" ? "listing-box" : categoryToggle === "availableJobs" ? "listing-box" : "none-display"}
                                >
                                    <img src="https://codlrc.org/sites/default/files/u114/were%20hiring.jpg" />
                                    <div>
                                        <p className="account-listings-title"> {maxLength(job.job_name)}</p>
                                        <p>Post created: {filterDate(job.created_at)}</p>
                                        <p>Last updated: {filterDate(job.updated_at)}</p>
                                        <p> Category: " Available Jobs " </p>
                                        <div className="listings-box-button">
                                            <Link to={`/job/edit/${job.id}`} className="account-button">Edit</Link>
                                            <Link className="account-button"
                                                onClick={() => {
                                                    destroyOneJobForEmployee(job.id)
                                                    history.go(0)
                                                }}>Delete</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    {jobsByEmployee.map((jobByEmployee) => {
                        if (jobByEmployee.user_id == currentUser?.user.id) {
                            return (
                                <div
                                    className={categoryToggle === "all" ? "listing-box" : categoryToggle === "needJob" ? "listing-box" : "none-display"}
                                >
                                    <img src="https://media.istockphoto.com/vectors/looking-for-a-job-vector-id638089158?k=6&m=638089158&s=170667a&w=0&h=m6pK6pfOSrDsoDO0ASkSwdBhCkMdziGykOGWbBq6lT4=" />
                                    <div>
                                        <p className="account-listings-title"> {maxLength(jobByEmployee.title)}</p>
                                        <p>Post created: {filterDate(jobByEmployee.created_at)}</p>
                                        <p>Last updated: {filterDate(jobByEmployee.updated_at)}</p>
                                        <p> Category: " I'm looking for a job " </p>
                                        <div className="listings-box-button">
                                            <Link to={`/job-by-employee/edit/${jobByEmployee.id}`} className="account-button">Edit</Link>
                                            <Link className="account-button"
                                                onClick={() => {
                                                    destroyOneEmployeePost(jobByEmployee.id)
                                                    history.go(0)
                                                }}>Delete</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    {houseForRent.map((houseRent) => {
                        if (houseRent.post_house.user_id == currentUser?.user.id) {
                            return (
                                <div
                                    className={categoryToggle === "all" ? "listing-box" : categoryToggle === "houseRent" ? "listing-box" : "none-display"}
                                >
                                    <div>
                                        <img src={!houseRent.images[0] ? "http://www.mylaporetimes.com/wp-content/uploads/2020/07/rent-clipart-for-rent-sign-vector-art-illustration-612.jpg" : houseRent.images[0]?.url} />
                                        <p className="account-listings-title"> {maxLength(houseRent.post_house.name)}</p>
                                        <p>Post created: {filterDate(houseRent.post_house.created_at)}</p>
                                        <p>Last updated: {filterDate(houseRent.post_house.updated_at)}</p>
                                        <p> Category: " House for rent " </p>
                                        <div className="listings-box-button">
                                            <Link to="#" className="account-button">Edit</Link>
                                            <Link className="account-button">Delete</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    {houseWanted.map((house) => {
                        if (house.post_house_wanted.user_id == currentUser?.user.id) {
                            return (
                                <div
                                    className={categoryToggle === "all" ? "listing-box" : categoryToggle === "houseWanted" ? "listing-box" : "none-display"}
                                >
                                    <div>
                                        <img src={!house.image ? "https://as2.ftcdn.net/jpg/01/75/38/45/500_F_175384555_nJHTQaacAVkFekOTpZCtPCzUzy572yGf.jpg" : house.image?.url} />
                                        <p className="account-listings-title"> {maxLength(house.post_house_wanted.name)}</p>
                                        <p>Post created: {filterDate(house.post_house_wanted.created_at)}</p>
                                        <p>Last updated: {filterDate(house.post_house_wanted.updated_at)}</p>
                                        <p> Category: " House Wanted " </p>
                                        <div className="listings-box-button">
                                            <Link to="#" className="account-button">Edit</Link>
                                            <Link className="account-button">Delete</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    {communities.map((arr) => {
                        if (arr.community.user_id == currentUser?.user.id) {
                            return (
                                <div
                                    className={categoryToggle === "all" ? "listing-box" : categoryToggle === "communities" ? "listing-box" : "none-display"}
                                >
                                    <div>
                                        <img src={!arr.image ? "https://socialmediaweek.org/wp-content/blogs.dir/1/files/FB-Admins.jpg" : arr.image?.url} />
                                        <p className="account-listings-title"> {maxLength(arr.community.name_community)}</p>
                                        <p>Post created: {filterDate(arr.community.created_at)}</p>
                                        <p>Last updated: {filterDate(arr.community.updated_at)}</p>
                                        <p> Category: " Communities " </p>
                                        <div className="listings-box-button">
                                            <Link to={`/community/edit/${arr.community.id}`} className="account-button">Edit</Link>
                                            <Link className="account-button"
                                                onClick={() => {
                                                    destroyOneCommunity(arr.community.id)
                                                    history.go(0)
                                                }}>Delete</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    {blogs.map((blog) => {
                        if (blog.blog.user_id == currentUser?.user.id) {
                            return (
                                <div
                                    className={categoryToggle === "all" ? "listing-box" : categoryToggle === "blogs" ? "listing-box" : "none-display"}
                                >
                                    <div>
                                        <img src={!blog.image ? "https://blog.hubspot.com/hubfs/GettyImages-974683580.jpg" : blog.image?.url} />
                                        <p className="account-listings-title"> {maxLength(blog.blog.title)}</p>
                                        <p>Post created: {filterDate(blog.blog.created_at)}</p>
                                        <p>Last updated: {filterDate(blog.blog.updated_at)}</p>
                                        <p> Category: " Blogs " </p>
                                        <div className="listings-box-button">
                                            <Link to={`/blog/edit/${blog.blog.id}`} className="account-button">Edit</Link>
                                            <Link className="account-button"
                                                onClick={() => {
                                                    destroyOneBlog(blog.blog.id)
                                                    history.go(0)
                                                }}>Delete</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}


                </div>

            </div>
        </div>
    )
}