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
            {housesForRent.map((house) => {
                if (house?.post_house.id == id) {
                    return (
                        <div>
                            <div className="house-for-rent-box">
                                <img src={!house.images[0] ? "http://www.mylaporetimes.com/wp-content/uploads/2020/07/rent-clipart-for-rent-sign-vector-art-illustration-612.jpg" : house.images[0]?.url} />
                                <div className="house-for-rent-box-right">
                                    <h4><b>{house.post_house.name}</b></h4>
                                    <p><b>State, City: </b> {house.post_house.state},{house.post_house.city}</p>
                                    <p><b>Date: </b> {filterDate(house.post_house.updated_at)}</p>
                                    <p><b>Price:</b> ${house.post_house.price}</p>
                                    <p><b>Bathroom:</b> {house.post_house.bathroom}</p>
                                    <p><b>Date Move In:</b> {house.post_house.date_move_in}</p>
                                    <p><b>Description:</b> {house.post_house.description}</p>
                                    <p><b>Cellphone:</b> {house.post_house.cellphone}</p>
                                    <p><b>Email:</b> {house.post_house.email}</p>
                                </div>
                            </div>
                            <p className="house-for-rent-back"><Link to="/houses-for-rent" id="none">Go back</Link></p>
                        </div>
                    )
                }
            })}
        </div>
    )
}