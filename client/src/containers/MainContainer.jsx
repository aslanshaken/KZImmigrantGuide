
import Cities from '../components/Cities/Cities';
import Events from '../components/Events/Events';
import Video from '../components/Video/Video';
import Tracker from '../components/Tracker/Tracker';
import Testimonials from '../components/Testimonials/Testimonials';
import Ad from '../components/Ad/Ad'


export default function MainContainer(props) {
    return (
        <div>
            <Video />
            <Tracker />
            <Cities />
            <Events />
            <Testimonials />
            <Ad />
        </div>
    )
}