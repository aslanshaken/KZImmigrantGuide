import './AboutUs.css'
import Wall from '../../assets/about-community6.png'
import Community from '../../assets/about-community5.png';

export default function AboutUs(props) {
    return (
        <div className="about-main-container">
            <div>
                <h1 className="about-text">ABOUT US</h1>
                <img src={Community} />
            </div>
            <h2 className='about-header-text'>OUR MISSION</h2>
            <div className="about-box">
                <img src={Wall} />
                <p className="about-paragraph-mission">
                    The web source aims to integrate all Kazakh communities in the US. It’s planned to
                    be a digital toolbox and a source facilitator, where Kazakh Americans and newcomers
                    will get veracious up-to-date information on various topics, including immigration,
                    legalization, housing and lease/rent, job-hunting and offering, cultural gatherings etc.
                    <br />
                    <br />
                    At large, it should grow as a communication medium and resource sharing channel for all
                    Kazakhstanis, who repudiate losing their bundle with homeland and native culture.
                    <br />
                    Project is non-profit and encourages volunteering among our counterparts.
                </p>
            </div>
            <h2 className='about-header-text'>THE ORIGINS OF THE IDEA</h2>
            <p className="about-paragraph-idea">
                At the age of 18, I moved to the US in pursuit of my dreams.
                As a young new face, with a weak knowledge of English and life experience in
                the city of New York, I had difficulties in finding a good affordable housing
                and a comparatively well paid job. These life challenges of adulthood made me
                stronger and led me to learn new skills. When I found my interest in coding,
                I joined bootcamp classes, where I have been challenged to create a project
                with full stack features. One of my Kazakh friends accidentally pitched me an
                idea of this platform, when he asked about job/housing , immigration and
                information about New-York based Kazakh communities.
                <br />
                <br />
                While I was helping him, I developed the idea of the platform, which should digital
                guide to Kazakh immigrants to pursue their American dreams.
            </p>
        </div>
    )
}