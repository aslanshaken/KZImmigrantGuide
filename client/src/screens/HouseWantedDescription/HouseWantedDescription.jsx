import './HouseWantedDescription.css'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function HouseWantedDescription(params) {

    const { houseWanted } = params
    const { id } = useParams();
    console.log(houseWanted)

    function filterDate(str) { // filter time
        const mdy = str.split('T')[0]
        const date = mdy.split('-')[1] + '-' + mdy.split('-')[2] + '-' + mdy.split('-')[0]
        return date
    }
    return (
        <div className="house-wanted-main-container">
            {houseWanted.map((house) => {
                if (house?.post_house_wanted.id == id) {
                    return (
                        <div>
                            <div className="house-wanted-box">
                                <img src={!house.image ? "https://as2.ftcdn.net/jpg/01/75/38/45/500_F_175384555_nJHTQaacAVkFekOTpZCtPCzUzy572yGf.jpg" : house.images[0]?.url} />
                                <div className="house-wanted-box-right">
                                    <h4><b>{house.post_house_wanted.name}</b></h4>
                                    <p><b>State, City: </b> {house.post_house_wanted.state},{house.post_house_wanted.city}</p>
                                    <p><b>Date: </b> {filterDate(house.post_house_wanted.updated_at)}</p>
                                    <p><b>Bathroom:</b> {house.post_house_wanted.bathroom}</p>
                                    <p><b>Date Move In:</b> {house.post_house_wanted.date_move_in}</p>
                                    <p><b>Description:</b> {house.post_house_wanted.about_me}</p>
                                    <p><b>Cellphone:</b> {house.post_house_wanted.cellphone}</p>
                                    <p><b>Email:</b> {house.post_house_wanted.email}</p>
                                </div>
                            </div>
                            <p className="house-wanted-back"><Link to="/houses-for-rent-by-employee" id="none">Go back</Link></p>
                        </div>
                    )
                }
            })}
        </div>
    )
}