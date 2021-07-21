import './Contact.css'

export default function Contact(params) {
    return (
        <div className="contact-main-container">
            <div className="contact-main-box">
                <h1 className="contact-main-text">CONTACT US</h1>
            </div>
            <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12715017.821569955!2d-104.08459400819349!3d38.918208194682656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1626901462152!5m2!1sen!2sus" />
            <div className="contact-icons">
                <img src="https://img.icons8.com/ios/100/000000/address--v1.png" />
                <p>2117 Bay Ridge Avenue
                    <br />
                    Brooklyn, NY 12204
                </p>
            </div>
            <div className="contact-icons">
                <img src="https://img.icons8.com/ios/100/000000/email.png" />
                <p>info@qazaq-r-usa.com</p>
            </div>
            <div className="contact-icons">
                <img src="https://img.icons8.com/ios/100/000000/phone-message.png" />
                <p>+1(929)-928-5292</p>
            </div>
        </div>
    )
}