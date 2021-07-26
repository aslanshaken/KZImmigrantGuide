import './Tracker.css'
import Frame from '../../assets/whiteframe.png'

export default function Tracker(props) {
    const { records } = props
    return (
        <div className="tracker-main-container">
            <img src={Frame} />
            <div className="tracker-container">
                <div className="tracker-box">
                    <h2>{records.jobs+records.jobsByEmployee}</h2>
                    <h3>Jobs</h3>
                </div>
                <div className="tracker-box">
                    <h2>{records.housesForRent+records. houseWanted}</h2>
                    <h3>Housing</h3>
                </div>
                <div className="tracker-box">
                    <h2>{records.allCommunities}</h2>
                    <h3>Communities</h3>
                </div>
                <div className="tracker-box">
                    <h2>5</h2>
                    <h3>Upcoming Events</h3>
                </div>
                <div className="tracker-box">
                    <h2>{records.blogs}</h2>
                    <h3>Blogs</h3>
                </div>
            </div>
        </div>
    )
}