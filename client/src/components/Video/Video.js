import './Video.css'
import React from 'react'
// import ReactPlayer from 'react-player'
import Nauriz from '../../assets/nauriz.mov'

export default function Video() {
    return (
        <div className="video-container">
            <div className="video-center">
                <h1>The heart of all QAZAQ communities in the USA </h1>
                <h4 id="video-mission-text">As Qazaq people and communities grow in number in the USA
                <br /> Our team came up with an idea to help people to find and connect with each other thru this platform. Let's draw connections</h4>
                <video className="video-style" controls autostart autoPlay muted src={Nauriz} type="video/mp4" />
                <h7 id='made'> Nauriz-Miami 2021 | by Malikoff</h7>
            </div>
            
        </div>
    )
}