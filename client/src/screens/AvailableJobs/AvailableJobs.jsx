import './AvailableJobs.css'

export default function AvailableJobs(props) {
    const { jobs } = props;
    return (
        <div className="showjobs-background">
            <div className="showjobs-main-container">

                <h1>Jobs in the USA</h1>
                <div className="showjobs-select">
                    <select>
                        <option>Select City</option>
                    </select>

                    <select>
                        <option>Sort By Category</option>
                    </select>
                </div>
            </div>

            <div className="showjobs-align">
                <div className="showjobs">
                    {jobs.map((job) => {
                        return (
                            <div className="showjobs-box" key={job.id}>
                                <p>Job Name: <a>{job.job_name}</a></p>
                                <p>Description: <a>{job.description}</a></p>
                                <p>Category:<a>{job.category}</a>  </p>
                                <p>City: <a>{job.city}</a> </p>
                                <p>Cell Phone:<a> {job.cellphone}</a> </p>
                                <p>Email: <a>{job.email}</a></p>
                                <br /><br />
                            </div>
                        )
                    })}
                </div>
            </div>


        </div>
    )
}