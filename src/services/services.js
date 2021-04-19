import React, {useEffect} from "react";
import building from "../img/building.jpg"
import engineer from "../img/engineer.jpg"
import architect from "../img/architect.jpg"
import "./services.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        Aos.init({duration: 2000, disable: 'mobile'});
    }, []);
    return (
        <section id="services">
            <Helmet>
                <title>Services | Pinto Engineering</title>
                <meta name="description" content="We dedicate ourselves to meeting the needs of our clients in structural & civil design, project management, mediation & arbitration, and forensic investigation."/>
            </Helmet>
            <div className="overlay"></div>
            <div className="services-header">
                <h1 data-aos="fade-up">Services</h1>
            </div>
            <div className="services-section">
                <div className="service right" data-aos="fade-right">
                    <img loading="lazy" src={building} alt=""/>
                    <div className="text">
                        <h2>Engineering Design</h2>
                        <p>We offer structural consulting services,
                            and structural remediation and restoration
                        </p>
                        <a href="/services/engineering-design">Learn More</a>
                    </div>
                </div>
                <div className="service left" data-aos="fade-left">
                    <div className="text">
                        <h2>Project Management</h2>
                        <p>We offer construction review, shop drawing review, constructions administration, and project coordination</p>
                        <a href="/services/project-management">Learn More</a>
                    </div>
                    <img loading="lazy" src={architect} alt=""/>
                </div>
                <div className="service right" data-aos="fade-right">
                    <img loading="lazy" src={engineer} alt=""/>
                    <div className="text">
                        <h2>Investigation & Reports</h2>
                        <p>We offer mediation and arbitration, feasibility studies, and condition assessment</p>
                        <a href="/services/investigation-reports">Learn More</a>
                    </div>
                </div>
            </div>
        </section>  
    );
}

export default Services;