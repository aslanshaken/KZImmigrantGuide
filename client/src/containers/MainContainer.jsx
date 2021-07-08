import { Switch, Route, useHistory } from 'react-router-dom';
import Cities from '../components/Cities/Cities';
import Events from '../components/Events/Events';
import Video from '../components/Video/Video';
import Tracker from '../components/Tracker/Tracker';
import Testimonials from '../components/Testimonials/Testimonials';
import Ad from '../components/Ad/Ad';
import Wall from '../components/Wall/Wall';



export default function MainContainer() {
    return (
        <div>
            <Wall />
            <Tracker />
            <Video />
            <Cities />
            <Events />
            <Testimonials />
            <Ad />
        </div>
    )
}