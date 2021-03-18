import "./engineering-design.css"
import Aos from "aos";
import "aos/dist/aos.css";
import architect from "../img/architect.jpg"
import React, {useEffect} from "react";

const ProjectManagement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init({duration: 2000});
    }, []);
    return (
        <section id="design">
            <h1>Project Management</h1>
            <p>
            </p>
            <img src={architect} alt="" data-aos="fade-in"/>
            <div className="banner">
                <h2 data-aos="fade-in">Construction Review</h2>
                <p>Construction site review is an integral part of monitoring the conformance of work with the contract documents. In support of our clients, PINTO works with all stakeholders to effectively resolve issues as construction progresses on site.</p>
            </div>
            <div className="banner">
                <h2 data-aos="fade-in">Shop Drawing Review</h2>
                <p>Review of contractor's shop drawings helps assure PINTO as well as our clients that fabricators and suppliers understand the design intent and that the project will be constructed as specified on the contract documents.</p>
            </div>
            <div className="banner">
                <h2 data-aos="fade-in">Construction Administration</h2>
                <p>To assist our clients in navigating the construction process, PINTO offers a variety of construction administration services such as budget preparation, project management, tender administration & consultation, RFI & change order coordination, shop drawing & construction review, as well as review of progress payment claims submitted by contractors to reassure our clients that payment submitted coincides with actual work completed on site.</p>
            </div>
            <div className="banner">
                <h2 data-aos="fade-in">Project Coordination</h2>
                <p>Effective communication is critical for the successful completion of a project. PINTO works closely with other disciplines such as architectural, civil, mechanical, and electrical to assist in reducing structural design conflicts. This helps reduce costly coordination issues often discovered during the construction phase of the project and provides piece-of-mind for our clients that PINTO is looking out for their best interests.</p>
            </div>
        </section>
    )
}

export default ProjectManagement;