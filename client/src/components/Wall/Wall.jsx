import './Wall.css'
import KZ from '../../assets/wall4.jpg'

export default function Wall() {
    return (
        <div className='wall-main-container'>
            <img className='wall-img' src={KZ} />
            <div className='wall-center-text'>
                <p>Welcome to the center <br /> <br />  of all QAZAQ Communities in the USA</p>
                {/* <button className='wall-center-button' >LEARN MORE</button> */}
            </div>
        </div>
    )
}