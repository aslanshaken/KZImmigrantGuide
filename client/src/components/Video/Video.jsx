import './Video.css'
import React from 'react'
// import ReactPlayer from 'react-player'
import Nauriz from '../../assets/nauriz.mov'

export default function Video() {
    return (
        <div className="video-center">
            <video className="video-style" controls autostart autoPlay muted loop src={Nauriz} type="video/mp4" />
            <div className="video-text-box">
                <h2>The heart of all QAZAQ communities in the USA </h2>
                {/* <img id="video-flags" src="https://www.archive.inform.kz/fotoarticles/20180115144258.jpg" /> */}
                <h4>As Qazaq people and communities grow in number in the USA
                <br /> Our team came up with an idea to help people to find and connect with each other thru this platform. Let's draw connections.</h4>
                <h7 id='made'> Video by Malikoff</h7>
                <div>
                    <img className="video-img" src="https://img.icons8.com/plasticine/100/000000/double-down.png" />
                </div>
            </div>
        </div>
    )
}