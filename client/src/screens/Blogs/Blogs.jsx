import './Blogs.css'
import { useState } from 'react'
import { Link } from "react-router-dom";

export default function Blogs(props) {
    const { blogs } = props
    console.log(blogs)


    return (
        <div className="blogs-main-container">
            <div className="blogs-main-text">
                <h1>Blogs</h1>
                <h4>Community enables instant and
                    direct communication with the people you <br /> want to reach, using the simplicity of text messaging.
                </h4>
                <hr />
                <p>
                    From sharing new launches, civic call-to-actions, inspirational messages, charitable <br /> contributions,
                    to exclusive access, and beyond, our Leaders are connecting with their <br /> Members to drive measurable
                    results that create real impact.
                </p>
            </div>
            <div className="blogs-center">
                {blogs.map((blog) => {
                    return (
                        <div className="blogs-box">
                            <img  src={!blog.image ? "https://images.unsplash.com/photo-1504691342899-4d92b50853e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ2dlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" : blog.image?.url} />
                            <div className="blogs-box-text">
                                <h3>{blog.blog.title}</h3>
                                <h4>by: {blog.blog.name}</h4>
                                <Link to={`/blog/${blog.blog.id}`} className="blogs-box-read-more">Read More</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}