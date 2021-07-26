import './AboutUs.css'
import Wall from '../../assets/about-community6.png'
import Community from '../../assets/about-community5.png';
import Aslan from '../../assets/aslan.JPG';
import Mission from '../../assets/about-mission.svg';

export default function AboutUs(props) {
    return (
        <div className="about-main-container">
            <div>
                <h1 className="about-text">ABOUT US</h1>
                <img src={Community} />
            </div>
            <h2 className='about-header-text'>OUR MISSION</h2>
            <div className="about-box">
                <img src={Mission} />
                <p className="about-paragraph-mission">
                    To help people everywhere find what they love.
                    The web source aims to integrate all people in the US. It’s planned to
                    be a digital toolbox and a source facilitator, where people
                    will get veracious up-to-date information on various topics, including immigration,
                    legalization, housing and lease/rent, job-hunting and offering, cultural gatherings etc.
                    <br />
                    <br />
                    At large, it should grow as a communication medium and resource sharing channel for all
                    people.
                    <br />
                    Project is non-profit and encourages volunteering among our counterparts.
                </p>
            </div>

            <div className="about-me-box">
                <p className="about-me-paragraph">
                    <h3 className='about-header-text'>FOUNDER</h3>
                    <br />
                    <br />
                    <br />
                    <h3>Aslan Shaken</h3>
                    <p>As a self-driven entrepreneur with software engineering skills,
                        I believe in technological solutions
                        <br />
                        and am eager to build products
                        that can solve social issues to make a positive impact on the world.
                    </p>
                    <br />
                    <div className="about-me-links">
                        <a target="_blank" href="https://www.facebook.com/aslanshaken/"><img src="https://img.icons8.com/ios/50/000000/facebook-new.png" /></a>
                        <a target="_blank" href="https://twitter.com/AslanShaken"><img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/aslanshaken/"><img src="https://img.icons8.com/ios/50/000000/linkedin.png" /></a>
                        <a target="_blank" href="https://www.instagram.com/a.shaken33/"><img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" /></a>
                        <a target="_blank" href="https://github.com/aslanshaken"><img src="https://img.icons8.com/material-rounded/48/000000/github.png" /></a>
                    </div >
                </p >
                <img className="about-me-image" src={Aslan} />
            </div >

            <div className="about-idea">
                <h2 className='about-header-text'>THE ORIGINS OF THE IDEA</h2>
                <br />
                <p className="about-paragraph-idea">
                    At the age of 18, I moved to the US in pursuit of my dreams.
                    As a young new face, with a weak knowledge of English and life experience in
                    the city of New York, I had difficulties in finding a good affordable housing
                    and a comparatively well paid job. These life challenges of adulthood made me
                    stronger and led me to learn new skills. When I found my interest in coding,
                    I joined boot-camp classes, where I have been challenged to create a project
                    with full stack features. One of my friends accidentally pitched me an
                    idea of this platform, when he asked about job/housing , immigration and
                    information about New-York based communities.
                    <br />
                    <br />
                    While I was helping him, I developed the idea of the platform, which should digital
                    guide to people to pursue their needss.
                </p>
                <img src="https://www.pngarea.com/pngm/19/5435319_software-development-png-transparent-web-development-png-hd.png" />
            </div>
        </div >
    )
}