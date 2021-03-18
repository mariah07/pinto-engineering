import React, {useEffect} from "react";
import './contact.css';
import contact from './contact-photo.jpeg';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="contact">
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
                        <h2>Halifax</h2>
                        <ul>
                            <li><i class="fas fa-phone"></i> (902) 420-9800</li>
                            <li><i class="fas fa-fax"></i> (902) 484-7288</li>
                            <li><i class="fas fa-envelope"></i> info@consultpinto.com</li>
                        </ul>
                        <p>
                        Suite 401-3480 Joseph Howe Drive, <br />
                        Halifax, Nova Scotia B3L 4H7<br/>
                        P.O. Box 2555
                        </p>
                    </div>
                    <div className="company-box" id="stjohn">
                        <h2>St John's</h2>
                        <ul>
                            <li><i class="fas fa-phone"></i> (709) 700-2139</li>
                            <li><i class="fas fa-fax"></i> (902) 484-7288</li>
                            <li><i class="fas fa-envelope"></i> info@consultpinto.com</li>
                        </ul>
                        <p>St. John's, Newfoundland and Labrador, Canada</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;