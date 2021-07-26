import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <div className="footer-container">
                <div className="footer-box">
                    <p className="footer-logo"> Info-Box</p>
                    <h5>info@box.com</h5>
                    <h5>+1(929)-928-5292</h5>
                    <h5>New York, USA</h5>
                </div>
                <div className="footer-box">
                    <h4>ABOUT</h4>
                    <Link to="#" id="none">
                        <h5 id="footer-text">Contact</h5>
                    </Link>
                    <Link to="#" id="none">
                        <h5 id="footer-text">About Us</h5>
                    </Link>
                    <h5>Careers</h5>
                    <h5>Product Roadmap</h5>
                </div>
                <div className="footer-box">
                    <h4>PLATFORM</h4>
                    <Link to="/jobs" id="none">
                        <h5 id="footer-text">Jobs</h5>
                    </Link>
                    <Link to="/houses-for-rent" id="none">
                        <h5 id="footer-text" >Housing</h5>
                    </Link>
                    <Link to="#" id="none">
                        <h5 id="footer-text" >Services</h5>
                    </Link>
                    <Link to="/communities" id="none">
                        <h5 id="footer-text">Community</h5>
                    </Link>
                    <Link to="#" id="none">
                        <h5 id="footer-text">Discussion Forums</h5>
                    </Link>
                </div>
                <div className="footer-box">
                    <h4>RESOURCES</h4>
                    <Link to="/blogs" id="none">
                        <h5 id="footer-text">Blog</h5>
                    </Link>
                    <h5>Docs</h5>
                    <h5>FAQs</h5>
                    <h5>Terms Of Use</h5>
                    <h5>Privacy Policy</h5>
                </div>
                <div className="footer-box">
                    <h4>FOLLOW US</h4>
                    <h5>Twitter</h5>
                    <h5>YouTube</h5>
                    <h5>Facebook</h5>
                    <h5>LinkedIn</h5>
                </div>
            </div>
            <h5 className="footer-all-rights">©2021 Qazaq Republic Inc. | All Rights Reserved | by Aslan Shaken</h5>
        </div>
    )
}