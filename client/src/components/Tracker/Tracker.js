import './Tracker.css'

export default function Tracker(props) {
    return (
        <div className="tracker-container">
            <div className="tracker-box">
                <h2>180k</h2>
                <h3>Available Jobs</h3>
            </div>
            <div className="tracker-box">
                <h2>200k</h2>
                <h3>Available Houses for rent</h3>
            </div>
            <div className="tracker-box">
                <h2>70k</h2>
                <h3>QAZAQ Communities</h3>
            </div>
            <div className="tracker-box">
                <h2>10k</h2>
                <h3>Upcoming Events</h3>
            </div>
            <div className="tracker-box">
                <h2>5k</h2>
                <h3>Blogs</h3>
            </div>
        </div>
    )
}