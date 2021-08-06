import './Testimonials.css'
import Test from '../../assets/testimonial.png'

export default function Testimonials() {
    return (
        <div>
            <h2 id="center">Testimonials</h2>
            <div className="testimonials-container">
                <div className="testimonials-left"> <img src={Test} /></div>
                <div className="testimonials-right">
                    <h1>What Our Clients Say?</h1>
                    <p>Working with the team at Info-Box, helped us move our data analysis practice forward.
                        Their commitment to working within the constraints of our organization while introducing
                        new data science tooling where applicable really saved us time and made our project a success.
                    </p>
                    <h3>Melissa Lujan</h3>
                    <h4>Independent Consultant</h4>
                </div>
            </div>
        </div>
    )
}