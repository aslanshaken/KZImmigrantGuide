import './Events.css'
import { Link } from 'react-router-dom'

export default function Events() {
    return (
        <div>
            <h2 id="center">Upcoming Events</h2>
            <div className="events-main-container">

                <div className="events-container">

                    <div className="events-box">
                        <img className="events-box-img" src="https://geotickets.tv/system/events/images/291/small/enrique-iglesias-ricky-martin-730X704.jpg?1583860285" />
                        <h3 id="events-name-text">Enrique Iglesias & Ricky Martin </h3>
                        <div id="events-text">
                            <p id="events-location-text" > <img className="events-img" src="https://img.icons8.com/ios-glyphs/30/000000/worldwide-location.png" />New York, NY</p>
                            <p> <img className="events-img" src="https://img.icons8.com/ios/50/000000/pay-date.png" />October 17, 2021</p>
                        </div>
                        <a target="_blank" href="https://www.ticketmaster.com/maxim-galkin-in-concert/event/0300582D40820C93?irgwc=1&clickid=XAeVNE3bZxyLTfbwUx0Mo372UkBU1X0lxUS-xk0&camefrom=CFC_BUYAT_1264044&impradid=1264044&REFERRAL_ID=tmfeedbuyat1264044&wt.mc_id=aff_BUYAT_1264044&utm_source=1264044-Geometria%20NY%20Inc&impradname=Geometria%20NY%20Inc&utm_medium=affiliate" className="events-read-more"><p>Read More</p></a>
                    </div>

                    <div className="events-box">
                        <img className="events-box-img" src="https://s1.ticketm.net/dam/a/3e7/dc88d812-ab5d-416d-96a4-0d41e3e5c3e7_1400451_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=400&height=225&fit=crop&auto=webp" />
                        <h3 id="events-name-text"> The Weeknd </h3>
                        <div id="events-text">
                            <p id="events-location-text">  <img className="events-img" src="https://img.icons8.com/ios-glyphs/30/000000/worldwide-location.png" />Orlando, FL</p>
                            <p> <img className="events-img" src="https://img.icons8.com/ios/50/000000/pay-date.png" /> March 28, 2022 </p>
                        </div>
                        <a target="_blank" href="https://www.ticketmaster.com/the-weeknd-orlando-florida-03-28-2022/event/22005851A537AEB3" className="events-read-more"><p>Read More</p></a>
                    </div>

                    <div className="events-box">
                        <img className="events-box-img" src="https://s1.ticketm.net/dam/a/531/59676cb1-c1f4-4c8b-8f2f-a517d695b531_1431261_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=400&height=225&fit=crop&auto=webp" />
                        <h3 id="events-name-text">The Lion King </h3>
                        <div id="events-text">
                            <p id="events-location-text">  <img className="events-img" src="https://img.icons8.com/ios-glyphs/30/000000/worldwide-location.png" />New York, NY</p>
                            <p> <img className="events-img" src="https://img.icons8.com/ios/50/000000/pay-date.png" />September 30, 2021</p>
                        </div>
                        <a target="_blank" href="https://www.ticketmaster.com/the-lion-king-new-york-ny-new-york-new-york-09-30-2021/event/030058E2AA422A7F" className="events-read-more"><p>Read More</p></a>
                    </div>

                </div>

            </div>
        </div>
    )
}