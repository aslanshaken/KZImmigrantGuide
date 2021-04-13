import './Events.css'
import { Link } from 'react-router-dom'

export default function Events() {
    return (
        <div>
            <h2 id="center">Upcoming Events</h2>
            <div className="events-main-container">

                <div className="events-container">

                    <div className="events-box">
                        <img src="https://www.coe.int/documents/204503/67779280/Astana/280011e3-f61c-df49-3218-e6ac50b66239?t=1592324080000" />
                        <div id="events-text">
                            <h5 id="events-name-text">Name of the Event </h5>
                            <h5>Date</h5>
                        </div>
                        <div id="events-text">
                            <h5 id="events-location-text">Location </h5>
                            <Link to="#" id="none"><h5>Read More</h5></Link>
                        </div>
                    </div>

                    <div className="events-box">
                        <img src="https://www.coe.int/documents/204503/67779280/Astana/280011e3-f61c-df49-3218-e6ac50b66239?t=1592324080000" />
                        <div id="events-text">
                            <h5 id="events-name-text">Name of the Event </h5>
                            <h5>Date</h5>
                        </div>
                        <div id="events-text">
                            <h5 id="events-location-text">Location </h5>
                            <Link to="#" id="none"><h5>Read More</h5></Link>
                        </div>
                    </div>

                    <div className="events-box">
                        <img src="https://www.coe.int/documents/204503/67779280/Astana/280011e3-f61c-df49-3218-e6ac50b66239?t=1592324080000" />
                        <div id="events-text">
                            <h5 id="events-name-text">Name of the Event </h5>
                            <h5>Date</h5>
                        </div>
                        <div id="events-text">
                            <h5 id="events-location-text">Location </h5>
                            <Link to="#" id="none"><h5>Read More</h5></Link>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}