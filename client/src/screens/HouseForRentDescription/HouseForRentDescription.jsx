import './HouseForRentDescription.css'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function HouseForRentDescription(params) {

    const { housesForRent } = params
    const { id } = useParams();

    function filterDate(str) { // filter time
        const mdy = str.split('T')[0]
        const date = mdy.split('-')[1] + '-' + mdy.split('-')[2] + '-' + mdy.split('-')[0]
        return date
    }
    return (
        <div className="house-for-rent-main-container">
            <p><Link to="/houses-for-rent" id="none">Go back</Link></p>
            <div className="house-for-rent-upper">
                <p>State,City</p>
                <p>Title</p>
                <p>Date</p>
            </div>
            <img src="http://www.mylaporetimes.com/wp-content/uploads/2020/07/rent-clipart-for-rent-sign-vector-art-illustration-612.jpg" />
            <div className="house-for-rent-middle">
                <p>Price</p>
                <p>Bathroom</p>
                <p>Date of move in</p>
            </div>
            <p>Description</p>
            <div className="house-for-rent-bottom">
                <p>Cellphone</p>
                <p>Email</p>
            </div>
        </div>
    )
}