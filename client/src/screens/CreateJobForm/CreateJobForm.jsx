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
    const { setJobs } = props
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
        <div className="job-create-background">
            <div className="job-create-main-container">

                <h3>Create a new job</h3>

                <form
                    className="job-create-container"
                    onSubmit={handleCreate}
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