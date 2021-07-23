import './Cities.css'
import { Link } from 'react-router-dom';
import Dallas from '../../assets/dallas2.jpg'
import LosAngeles from '../../assets/los-angeles.jpg'
import NewYork from '../../assets/new-york.jpg'
import Miami from '../../assets/miami.jpeg'
import Chicago from '../../assets/chicago.jpg'
import Cincinnati from '../../assets/cincinaty.jpg'


export default function Cities() {
    return (
        <div>
            <h1 id="center">Top Cities</h1>
            <div className="cities-wrap-parent">

                <div className="cities-container">

                    <div className="cities-box">
                        <Link to="/city/new-york">
                            <img alt="newyork" src={NewYork} />
                        </Link>
                        <h4>NEW YORK</h4>
                    </div>
                    <div className="cities-box">
                        <Link to="/city/cincinnati">
                            <img alt="newjersey" src={Cincinnati} />
                        </Link>
                        <h4>CINCINNATI</h4>
                    </div>
                    <div className="cities-box">
                        <Link to="/city/dallas">
                            <img alt="phila" src={Dallas} />
                        </Link>
                        <h4> DALLAS</h4>
                    </div>

                    <div className="cities-box">
                        <Link to="/city/los-angeles">
                            <img alt="la" src={LosAngeles} />
                        </Link>
                        <h4>LOS ANGELES</h4>
                    </div>

                    <div className="cities-box">
                        <Link to="/city/miami">
                            <img alt="miami" src={Miami} />
                        </Link>
                        <h4>MIAMI</h4>
                    </div>

                    <div className="cities-box">
                        <Link to="/city/chicago">
                            <img alt="chicago" src={Chicago} />
                        </Link>
                        <h4>CHICAGO</h4>
                    </div>

                </div>
            </div>


        </div>
    )
}