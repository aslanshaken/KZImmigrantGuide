import './CreateJobWanted.css'
import { UsaStatesAndCities } from '../../assets/Usa'
import { postNewEmployee } from '../../services/postByEmployees'

export default function CreateJobWanted(props) {
    const [formData, setFormData] = useState({
        about: '',
        category: '',
        cellphone: '',
        city: '',
        email: '',
        name: '',
        title: '',
    })
    const { title, name, about, category, city, cellphone, email } = formData;
    const { currentUser, setJobsByEmployee } = props

    const [cities, setCities] = useState([])
    const [stateToggle, setStateToggle] = useState(true)
    const [received, setReceived] = useState(false)
    const states = UsaStatesAndCities()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div>
            CreateJobWanted
        </div>
    )
}