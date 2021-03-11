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
                                <img alt="newyork" src="https://www.teahub.io/photos/full/126-1264161_new-york.jpg" />
                            </Link>
                        </div>
                    </div>

                    <div className="cities-box">
                        <h4> New Jersey</h4>
                        <div>
                            <Link to="#">
                                <img alt="newjersey" src="https://media.vanityfair.com/photos/5b1ecd3d6163e4725653ca9f/master/pass/Newark-Survelliance-Cameras.jpg" />
                            </Link>
                        </div>
                    </div>

                    <div className="cities-box">
                        <h4> Philadelphia</h4>
                        <div>
                            <Link to="#">
                                <img alt="phila" src="https://i.pinimg.com/originals/f3/21/62/f32162326aa501697b50ada17596fdea.jpg" />
                            </Link>
                        </div>
                    </div>

                    <div className="cities-box">
                        <h4>Los Angeles</h4>
                        <div>
                            <Link to="#">
                                <img alt="la" src="http://d3e1m60ptf1oym.cloudfront.net/6e462002-8b45-11e3-a082-259c7e2bfdd9/MG5231-Los-Angeles-Buildings-Black-And-White_xgaplus.jpg" />
                            </Link>
                        </div>
                    </div>

                    <div className="cities-box">
                        <h4>Miami</h4>
                        <div>
                            <Link to="#">
                                <img alt="miami" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/miami-florida-skyline-miami-beach-black-and-white-toby-mcguire.jpg" />
                            </Link>
                        </div>
                    </div>

                    <div className="cities-box">
                        <h4>Chicago</h4>
                        <div>
                            <Link to="#">
                                <img alt="chicago" src="http://d3e1m60ptf1oym.cloudfront.net/203e2f6c-4f09-4837-ae58-bc82fa049cbc/MG3986-Chicago-River-Skyline-Night_xgaplus.jpg" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}