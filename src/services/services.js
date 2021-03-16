import React, {useEffect} from "react";
import building from "../img/building.jpg"
import engineer from "../img/engineer.jpg"
import architect from "../img/architect.jpg"
import "./services.css";

const Services = () => {

    return (
        <section id="services">
            <div className="services-header">
                <h1>Services</h1>
            </div>
            <div className="services-section">
                <div className="service">
                    <img src={building}/>
                    <div className="text">
                        <h2>Engineering Design</h2>
                        <p>We offer structural consulting services,
                            and structural remediation and restoration
                        </p>
                        <a href="/engineering-design">Learn more</a>
                    </div>
                </div>
                <div className="service">
                    <div className="text">
                        <h2>Project Management</h2>
                        <p>We offer construction review, shop drawing review, constructions administration, and project coordination</p>
                        <a href="/project-management">Learn More</a>
                    </div>
                    <img src={architect}/>
                </div>
                <div className="service">
                    <img src={engineer}/>
                    <div className="text">
                        <h2>Investigation & Reports</h2>
                        <p>We offer mediation and arbitration, feasibility studies, and condition assessment</p>
                        <a href="/investigation-reports">Learn More</a>
                    </div>
                </div>
            </div>
        </section>  
    );
}

export default Services;