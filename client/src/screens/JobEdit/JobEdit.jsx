import './JobEdit.css'
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {updateOneJobForEmployee} from '../../services/getEmployees'

export default function JobEdit(props) {
    const [formData, setFormData] = useState({
        job_name: '',
        category: '',
        description: '',
        city: '',
        cellphone: '',
        email: ''
    })
    const { id } = useParams();
    const { currentUser, jobs, setJobs } = props
    const history = useHistory();
    const { job_name, category, description, city, cellphone, email } = formData;

    useEffect(() => {
        const prefillFormData = () => {
            const jobPost = jobs.find((job) => job.id === Number(id));
            setFormData({
                job_name: jobPost.job_name,
                category: jobPost.category,
                description: jobPost.description,
                city: jobPost.city,
                cellphone: jobPost.cellphone,
                email: jobPost.email
            });
        }
        if (jobs.length) {
            prefillFormData();
        }
    }, [jobs, id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedJob = await updateOneJobForEmployee(id, formData);
        setJobs(prevState => prevState.map((job) => {
            return job.id === Number(id) ? updatedJob : job
        }));
        history.push('/account');
    }

    return (
        <div className="job-create-main-container">
            <h2>Edit</h2>
            <form
                className="job-create-container"
                onSubmit={handleUpdate}
            >

                <label>Name of the Job
                <input
                        type='text'
                        name='job_name'
                        value={job_name}
                        onChange={handleChange}
                    />
                </label>

                <label>Description
                <textarea
                        type='text'
                        name='description'
                        value={description}
                        onChange={handleChange}
                    />
                </label>

                <label>Category
                <input
                        type='text'
                        name='category'
                        value={category}
                        onChange={handleChange}
                    />
                </label>

                <label>City
                <input
                        type='text'
                        name='city'
                        value={city}
                        onChange={handleChange}
                    />
                </label>

                <label>Cellphone
                <input
                        type='text'
                        name='cellphone'
                        value={cellphone}
                        onChange={handleChange}
                    />
                </label>

                <label>Email
                <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                    />
                </label>

                <br />

                <button>Submit</button>

            </form>
        </div>
    )
}