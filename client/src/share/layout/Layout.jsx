import Nav from '../header/Header'
import Foot from '../footer/Footer'

export default function Layout(props) {
    const { currentUser, handleLogout } = props;
    return (
        <div>
            <Nav currentUser={currentUser} handleLogout={handleLogout}/>
            {props.children}
            <Foot />
        </div>
    )
}