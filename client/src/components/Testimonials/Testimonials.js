import './Testimonials.css'
import Test from '../../assets/testimonial.png'

export default function Testimonials() {
    return (
        <div>
            <div className="testimonials-container">

                <div className="testimonials-left"> <img src={Test} /></div>
                <div className="testimonials-right">
                    <h2 id="center">Testimonials</h2>
                    <h1>What Our Clients Say?</h1>
                    <p>Working with the team at Info-Box, helped us move our data analysis practice forward.
                        Their commitment to working within the constraints of our organization while introducing
                        new data science tooling where applicable really saved us time and made our project a success.
                    </p>
                    <h4>Melissa Lujan</h4>
                    <h5>Independent Consultant</h5>
                </div>
                {/* <div className="testimonials-box">
                    <div className="testimonials-first-box">
                        <img src="https://mysolluna.com/wp-content/uploads/2014/12/shutterstock_118972231.jpg" />
                        <h5 id="testimonials-name-text">Lauren Summer</h5>
                    </div>
                    <p>From someone who has seen a lot of different platforms over the course of 15 years of running communities,
                        INFO-BOX is by far the most intuitive platform that I've ever used.”</p>
                </div>

                <div className="testimonials-box">
                    <div className="testimonials-first-box">
                        <img src="https://ak.picdn.net/shutterstock/videos/12665660/thumb/1.jpg" />
                        <h5 id="testimonials-name-text">Amy Herman</h5>
                    </div>
                    <p> INFO-BOX gave us
                        more control to manage changes in real-time to sessions, speakers, or agendas.
                        That is a powerful addition to our process.

                    </p>
                </div>

                <div className="testimonials-box">
                    <div className="testimonials-first-box">
                        <img src="https://www.harpercollege.edu/stories/images/Nancy%20DACA%20student.jpg" />
                        <h5 id="testimonials-name-text">Emily Fullmer</h5>
                    </div>
                    <p>We are now able to focus less on tedious operations, and more on creating a
                        memorable and seamless experience for our attendees.</p>
                </div> */}


            </div>
        </div>
    )
}