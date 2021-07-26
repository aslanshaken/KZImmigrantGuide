import './Ad.css'
import Frame from '../../assets/whiteframe.png'

export default function Ad() {
    return (
        <div>
            <div className="ad-container">
                <img src={Frame} />
                <h2>We want help people everywhere find what they love</h2>
            </div>
        </div>
    )
}