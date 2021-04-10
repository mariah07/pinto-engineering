import React, {useEffect, useState} from "react";
import './contact.css';
import contact from './contact-photo.jpeg';
import { Helmet } from "react-helmet";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section id="contact">
            <Helmet>
                <title>Contact | Pinto Engineering</title>
                <meta name="description" content="The team at PINTO looks forward to working with you on your next project."/>
            </Helmet>
            <div className="overlay"></div>
            <div className="contact-header">
                <h1>Contact PINTO</h1>
            </div>
            <div className="contact-main">
                <div className="company-info">
                    <div className="text">
                    <h2>The team at PINTO looks forward to working with you on your next project.</h2>
                    <p>Please contact us using any of the methods below. For additional information, please visit and 
                        follow our company <a href="https://www.linkedin.com/company/malcolm-pinto-engineering-ltd-" rel="nofollow">LinkedIn page.</a></p>
                    </div>
                    <img src={contact} alt=""/>
                </div>
                <div className="company-contact">
                    <div className="company-box" id="halifax">
                        <div>
                            <h2>Halifax</h2>
                            <ul>
                                <li><i className="fas fa-phone tooltip"></i> <a href="tel:+19024209800"> (902) 420-9800</a></li>
                                <li><i className="fas fa-fax" alt="fax"></i> (902) 484-7288</li>
                                <li><i className="fas fa-envelope"></i> <a href="mailto:info@consultpinto.com">info@consultpinto.com</a></li>
                            </ul>
                            <p>
                            Suite 401-3480 Joseph Howe Drive, <br />
                            Halifax, Nova Scotia B3L 4H7<br/>
                            P.O. Box 2555
                            </p>
                        </div>
                    </div>
                    <div id="map">
                        <div className="map">
                        <iframe
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
                    <div className="company-box" id="stjohn">
                        <div>
                            <h2>St John's</h2>
                            <ul>
                                <li><i className="fas fa-phone"></i> <a href="tel:+17097002139"> (709) 700-2139</a></li>
                                <li><i className="fas fa-fax"></i> (902) 484-7288</li>
                                <li><i className="fas fa-envelope"></i> <a href="mailto:info@consultpinto.com">info@consultpinto.com</a></li>
                            </ul>
                            <p>St. John's, <br/> Newfoundland and Labrador, <br/>Canada</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;