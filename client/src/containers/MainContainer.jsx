
import Cities from '../components/Cities/Cities';
import Events from '../components/Events/Events';
import Video from '../components/Video/Video'


export default function MainContainer(props) {
    return (
        <div>
            <Video />
            <Cities />
            <Events />
        </div>
    )
}