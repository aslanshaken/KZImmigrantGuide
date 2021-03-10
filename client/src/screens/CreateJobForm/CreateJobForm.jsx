import { useState } from 'react';
import './CreateJobForm.css'
import { useHistory, Redirect } from 'react-router-dom';
import { postNewJobForEmployee } from '../../services/getEmployees'

export default function CreateJobForm(props) {
    const [formData, setFormData] = useState({
        job_name: '',
        category: '',
        description: '',
        city: '',
        cellphone: '',
        email: ''
    })
    const history = useHistory();
    const {setJobs} = props
    const { job_name, category, description, city, cellphone, email } = formData;



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        const newJob = await postNewJobForEmployee(formData);
        setJobs(prevState => [...prevState, newJob]);
        history.push('/available-jobs');
    }




    return (
        <div className="job-create-main-container">
            <h2>Post</h2>
            <h4>Create a new job</h4>
            <form
                className="job-create-container"
                onSubmit={handleCreate}
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