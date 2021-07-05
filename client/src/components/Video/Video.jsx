import './Video.css'
import React from 'react'
// import ReactPlayer from 'react-player'
import Nauriz from '../../assets/nauriz.mov'

export default function Video() {
    return (
        <div className="video-center">
            <video className="video-style" controls autostart autoPlay muted loop src={Nauriz} type="video/mp4" />
            <h7 id='made'> Video by Malikoff</h7>
        </div>
    )
}