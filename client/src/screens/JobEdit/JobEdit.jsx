import './JobEdit.css'
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { updateOneJobForEmployee } from '../../services/getEmployees'

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
        <div className="job-edit-background">
            <div className="job-edit-main-container">
                <h2>Edit</h2>
                <form
                    className="job-edit-container"
                    onSubmit={handleUpdate}
                >
                    <input
                        placeholder="Name of the Job"
                        type='text'
                        name='job_name'
                        value={job_name}
                        onChange={handleChange}
                    />

                    <textarea
                        placeholder="Description"
                        type='text'
                        name='description'
                        value={description}
                        onChange={handleChange}
                    />

                    <input
                        placeholder="Category"
                        type='text'
                        name='category'
                        value={category}
                        onChange={handleChange}
                    />

                    <input
                        placeholder="City"
                        type='text'
                        name='city'
                        value={city}
                        onChange={handleChange}
                    />

                    <input
                        placeholder="Cellphone"
                        type='text'
                        name='cellphone'
                        value={cellphone}
                        onChange={handleChange}
                    />

                    <input
                        placeholder="Email"
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                    />

                    <br />

                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}