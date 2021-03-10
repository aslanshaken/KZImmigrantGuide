import Nav from '../header/Header'
import Foot from '../footer/Footer'

export default function Layout(props) {
    const { currentUser, handleLogout } = props;
    return (
        <div>
            <Nav />
            {props.children}
            <Foot />
        </div>
    )
}