import './Cities.css'
import { Link } from 'react-router-dom';


export default function Cities() {
    return (
        <div>
            <h1 id="center">Top Cities</h1>
            <div className="cities-wrap-parent">
                
                <div className="cities-container">

                    <div className="cities-box">
                        <h4>New York</h4>
                        <div className="">
                            <Link to="#">
                                <img alt="newyork" src="https://www.bazar.club/wp-content/uploads/1-13.jpg" />
                            </Link>
                        </div>
                    </div>

                    <div className="cities-box">
                        <h4> New Jersey</h4>
                        <div>
                            <Link to="#">
                                <img alt="newjersey" src="https://www.bazar.club/wp-content/uploads/2020/03/new_jersey-1024x768.jpeg" />
                            </Link>
                        </div>
                    </div>

                    <div className="cities-box">
                        <h4> Philadelphia</h4>
                        <div>
                            <Link to="#">
                                <img alt="phila" src="https://www.bazar.club/wp-content/uploads/phila.jpg" />
                            </Link>
                        </div>
                    </div>

                    <div className="cities-box">
                        <h4>Los Angeles</h4>
                        <div>
                            <Link to="#">
                                <img alt="la" src="https://www.bazar.club/wp-content/uploads/los-ang.jpg" />
                            </Link>
                        </div>
                    </div>

                    <div className="cities-box">
                        <h4>Miami</h4>
                        <div>
                            <Link to="#">
                                <img alt="miami" src="https://www.bazar.club/wp-content/uploads/miyami.jpg" />
                            </Link>
                        </div>
                    </div>

                    <div className="cities-box">
                        <h4>Chicago</h4>
                        <div>
                            <Link to="#">
                                <img alt="chicago" src="https://www.bazar.club/wp-content/uploads/2020/04/chicago_1.jpg" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}