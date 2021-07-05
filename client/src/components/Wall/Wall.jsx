import './Wall.css'
import KZ from '../../assets/wall.jpg'

export default function Wall() {
    return (
        <div className='wall-main-container'>
            <img className='wall-img' src={KZ} />
            <h1 className='wall-center-text'>Welcome to the center of all QAZAQ Communities in the USA</h1>
        </div>
    )
}