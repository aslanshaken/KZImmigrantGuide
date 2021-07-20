import './Blogs.css'
import { useState } from 'react'

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
                <div className="blogs-center-box">
                    <img />
                    <h3>TEXT</h3>
                    <h6>Read More</h6>
                </div>
            </div>
        </div>
    )
}