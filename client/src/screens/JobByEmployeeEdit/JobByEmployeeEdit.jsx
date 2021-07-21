import './JobByEmployeeEdit.css'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';
import { updateOneEmployeePost } from '../../services/postByEmployees'

export default function JobByEmployeeEdit(props) {
    const [formData, setFormData] = useState({
        about: '',
        category: '',
        cellphone: '',
        city: '',
        email: '',
        name:'',
        title: '',
    })
    const { id } = useParams();
    const { currentUser, jobsByEmployee, setJobsByEmployee } = props
    const history = useHistory();
    const { title, name, about, category, city, cellphone, email } = formData;

    useEffect(() => {
        const prefillFormData = () => {
            const jobPost = jobsByEmployee.find((job) => job.id === Number(id));
            setFormData({
                about: jobPost.about,
                category: jobPost.category,
                cellphone: jobPost.cellphone,
                city: jobPost.city,
                email: jobPost.email,
                name: jobPost.name,
                title: jobPost.title,
            });
        }
        if (jobsByEmployee.length) {
            prefillFormData();
        }
    }, [jobsByEmployee, id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedJob = await updateOneEmployeePost(id, formData);
        setJobsByEmployee(prevState => prevState.map((job) => {
            return job.id === Number(id) ? updatedJob : job
        }));
        history.push('/account/listings');
    }

    return (
        <div className="jobByEmployee-edit">
            <div className="jobByEmployee-edit-main-photo">
                <img id="jobByEmployee-edit-user-image" src={currentUser?.image === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU" : currentUser?.image.url} />
                <h2>{currentUser?.user.first_name} {currentUser?.user.last_name}</h2>
            </div>
            <div className="jobByEmployee-edit-links">
                <h3><Link to="/account" id="none">Personal Information</Link></h3>
                <h3><Link to="/account/listings" id="none">Listings</Link></h3>
            </div>
            <div className="jobByEmployee-edit-main-container">
                <img id="jobByEmployee-edit-img" src="https://media.istockphoto.com/vectors/looking-for-a-job-vector-id638089158?k=6&m=638089158&s=170667a&w=0&h=m6pK6pfOSrDsoDO0ASkSwdBhCkMdziGykOGWbBq6lT4=" />
                <form
                    className="jobByEmployee-edit-box"
                    onSubmit={handleUpdate}
                >
                    <h2>Edit</h2>
                    <label>Title:
                    <input
                            type='text'
                            name='title'
                            value={title}
                            maxLength="50"
                            onChange={handleChange}
                        />
                    </label>
                    <label>Name:
                    <input
                            type='text'
                            name='name'
                            value={name}
                            maxLength="35"
                            onChange={handleChange}
                        />
                    </label>
                    <label>About:
                    <textarea
                            type='text'
                            name='about'
                            value={about}
                            maxLength="300"
                            onChange={handleChange}
                        />
                    </label>

                    <label> Category:
                    <input
                            type='text'
                            name='category'
                            value={category}
                            onChange={handleChange}
                        />
                    </label>

                    <label>City:
                    <input
                            type='text'
                            name='city'
                            value={city}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Cellphone:
                <input
                            type='text'
                            name='cellphone'
                            value={cellphone}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Email:
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={handleChange}
                        />
                    </label>

                    <br />

                    <div id="jobByEmployee-edit-button">
                        <Link to="/account/listings" className="jobByEmployee-edit-button">Go Back</Link>
                        <button className="jobByEmployee-edit-save-button">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}