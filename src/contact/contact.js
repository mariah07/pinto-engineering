import React, {useEffect} from "react";
import './contact.css';
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_FORM_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        alert("Message Sent");

        e.target.reset();
    }

    return (
        <section id="contact">
            <Helmet>
                <title>Contact | Pinto Engineering</title>
                <meta name="description" content="The team at PINTO looks forward to working with you on your next project."/>
                <meta name="robots" content="index,follow"/>
            </Helmet>
            <div className="overlay"></div>
            <div className="contact-main">
                <div className="contact-form">
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                            <li><i class="far fa-address-card"></i> <span>Suite 401-3480 Joseph Howe Drive<br />
                                Halifax, Nova Scotia<br/>
                                B3L 4H7 <br/>
                                P.O. Box 2555</span></li>
                                <li><i class="fas fa-phone-volume"></i> <span className="phone"><a href="tel:+19024209800"> (902) 420-9800</a> <a href="tel:+18006596618"> (800) 659-6618</a></span></li>
                                <li><i className="fas fa-fax" alt="fax"></i> (902) 484-7288</li>
                                <li><i className="fas fa-envelope"></i> <a href="mailto:info@consultpinto.com">info@consultpinto.com</a></li>
                                
                            </ul>
                            <div className="social-media">
                                <a href="https://www.facebook.com/PintoEngineeringLtd" target="_blank" rel="nofollow noreferrer"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://www.twitter.com/consultpinto" target="_blank" rel="nofollow noreferrer"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/company/malcolm-pinto-engineering-ltd-" target="_blank" rel="nofollow noreferrer"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                    </div>
                    <form onSubmit={sendEmail}>
                        <div className="row-one">
                            <div className="form-row name">
                                <input type="text" className="input-one" name="name" required/>
                                <label>Name <span>*</span></label>
                            </div>
                            <div className="form-row email">
                                <input type="email" className="input-one" name="email" required/>
                                <label>Email <span>*</span></label>
                            </div>
                        </div>
                        <div className="form-row">
                            <input type="text" className="input-two" name="subject" required/>
                            <label >Subject <span>*</span></label>
                        </div>
                        <div className="form-row">
                            <textarea name="message" required></textarea>
                            <label>Message</label>
                        </div>
                        <div className="form-row">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                    
                </div>
                <div className="company-contact">
                    <div id="map">
                        <div className="map">
                        <iframe title="Map of Pinto Engineering"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1419.0744085550023!2d-63.6314823419212!3d44.65531109477499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a21a679ac3483%3A0xbe93c82aa4dff88d!2s3480%20Joseph%20Howe%20Dr%2C%20Halifax%2C%20NS%20B3L%204H7!5e0!3m2!1sen!2sca!4v1617296839096!5m2!1sen!2sca"
                            width="100%"
                            height="450"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Contact;