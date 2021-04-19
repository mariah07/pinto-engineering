import "./individual-services.css"
import engineer from "../img/engineer.jpg"
import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

const Investigation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="design">
            <Helmet>
                <title>Investigation & Reports | Pinto Engineering</title>
                <meta name="description" content="We offer mediation and arbitration, feasibility studies, and condition assessment."/>
            </Helmet>
            <div className="overlay"></div>
            <div className="title">
                <h1>Investigation & Reports</h1>
            </div>
            <p>
            </p>
            <img src={engineer} alt="" loading="eager"/>
            <div className="banner">
                <div className="border"></div>
                <h2>Mediation and Arbitration</h2>
                <p>Whenever possible, litigation should always be the last resort when attempting to resolve problems. To assist in avoiding this costly step, PINTO provides mediation and arbitration services to assist parties in finding mutually agreeable solutions to project disputes.</p>
            </div>
            <div className="banner">
                <div className="border"></div>
                <h2>Feasibility Studies</h2>
                <p>The construction process is very complex and carries an element of risk for all parties. PINTO offers technical reporting services to determine the feasibility of projects and assist clients with their project decision-making. Feasibility studies can include such items as budgets & costing, construction scheduling, preliminary design concepts, construction sequencing, risk management, and other project recommendations.</p>
            </div>
            <div className="banner">
                <div className="border"></div>
                <h2>Condition Assessment</h2>
                <p>As part of our technical reporting services, PINTO provides comprehensive condition assessment reports for existing civil, structural, and marine projects. Reports can include detailed, on-site investigations to identify areas of concern and risk, budgetary recommendations, remediation or replacement recommendations, construction sequencing, detailed design concepts, and more.</p>
            </div>
        </section>
    )
}

export default Investigation;