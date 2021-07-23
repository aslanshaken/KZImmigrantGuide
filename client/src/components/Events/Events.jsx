import './Events.css'
import { Link } from 'react-router-dom'

export default function Events() {
    return (
        <div>
            <h2 id="center">Upcoming Events</h2>
            <div className="events-main-container">

                <div className="events-container">

                    <div className="events-box">
                        <img src="https://geotickets.tv/system/events/images/291/small/enrique-iglesias-ricky-martin-730X704.jpg?1583860285" />
                        <h3 id="events-name-text">Enrique Iglesias & Ricky Martin </h3>
                        <div id="events-text">
                            <p id="events-location-text">New York, NY</p>
                            <p>October 17, 2021</p>
                        </div>
                        <a target="_blank" href="https://www.ticketmaster.com/maxim-galkin-in-concert/event/0300582D40820C93?irgwc=1&clickid=XAeVNE3bZxyLTfbwUx0Mo372UkBU1X0lxUS-xk0&camefrom=CFC_BUYAT_1264044&impradid=1264044&REFERRAL_ID=tmfeedbuyat1264044&wt.mc_id=aff_BUYAT_1264044&utm_source=1264044-Geometria%20NY%20Inc&impradname=Geometria%20NY%20Inc&utm_medium=affiliate" className="events-read-more"><p>Read More</p></a>
                    </div>

                    <div className="events-box">
                        <img src="https://geotickets.tv/system/events/images/286/small/676.jpg?1582608600" />
                        <h3 id="events-name-text">Maxim Galkin </h3>
                        <div id="events-text">
                            <p id="events-location-text">New York, NY</p>
                            <p>May 07, 2022 </p>
                        </div>
                        <a  target="_blank" href="https://www.ticketmaster.com/maxim-galkin-in-concert/event/0300582D40820C93?irgwc=1&clickid=XAeVNE3bZxyLTfbwUx0Mo372UkBU1V0xxUS-xk0&camefrom=CFC_BUYAT_1264044&impradid=1264044&REFERRAL_ID=tmfeedbuyat1264044&wt.mc_id=aff_BUYAT_1264044&utm_source=1264044-Geometria%20NY%20Inc&impradname=Geometria%20NY%20Inc&utm_medium=affiliate" className="events-read-more"><p>Read More</p></a>
                    </div>

                    <div className="events-box">
                        <img src="https://geotickets.tv/system/events/images/270/small/kastatourfinalnew2.jpg?1617912961" />
                        <h3 id="events-name-text">Kasta 20 Year Anniversary</h3>
                        <div id="events-text">
                            <p id="events-location-text">New York, NY</p>
                            <p>September 3, 2021</p>
                        </div>
                        <a  target="_blank" href="https://geotickets.tv/events/kasta20year" className="events-read-more"><p>Read More</p></a>
                    </div>

                </div>

            </div>
        </div>
    )
}