import './Wall.css'
import People from '../../assets/wall.svg'

export default function Wall() {
    return (
        <div className='wall-main-container'>
            <div className="wall-main-left">
                <h1>Discover. Share. Support. </h1>
                <p>Welcome to the INFO-BOX.
                    Digital toolbox. It helps people to get up-to-date information on various topics. 
                    <br />
                    Let's build great community and help each other.
                </p>
                <img src="https://img.icons8.com/fluent/48/000000/like.png"/>
            </div>
            <div className="wall-main-right">
                <img src={People} />
            </div>
        </div>
    )
}