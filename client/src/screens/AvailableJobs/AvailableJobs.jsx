import './AvailableJobs.css'

export default function AvailableJobs(props) {
    const { jobs } = props;
    return (
        <div className="showjobs-main-container">
            <h2>Jobs in the USA</h2>
            <div className="showjobs-select">
                <select>
                    <option>Select City</option>
                </select>

                <select>
                    <option>Sort By Category</option>
                </select>
            </div>

            <div className="showjobs">
                {jobs.map((job) => {
                    return (
                        <div className="showjobs-box" key={job.id}>
                            <h5>Job Name:</h5>
                            {job.job_name}
                            <h5>Description:</h5>
                            {job.description}
                            <h5>Category:</h5>
                            {job.category}
                            <h5>City: </h5>
                            {job.city}
                            <h5>Cell Phone: </h5>
                            {job.cellphone}
                            <h5>Email: </h5>
                            {job.email}
                        </div>
                    )
                })}

            </div>
        </div>
    )
}