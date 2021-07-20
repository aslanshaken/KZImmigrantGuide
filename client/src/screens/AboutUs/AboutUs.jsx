import './AboutUs.css'
import Wall from '../../assets/about.jpg'

export default function AboutUs(props) {
    return (
        <div className="about-main-container">
            <div className="about-wall">
                <img src={Wall}/>
                <h1>ABOUT US</h1>
            </div>
        </div>
    )
}