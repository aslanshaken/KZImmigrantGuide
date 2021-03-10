import './AvailableJobs.css'

export default function AvailableJobs() {
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
                <div className="showjobs-box">
                    <h5>Name of the Job</h5>
                </div>
            </div>
        </div>
    )
}