import "./projects.css"
import React, {useEffect} from "react";
import { Helmet } from "react-helmet";

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project" className="project-page">
            <Helmet>
                <title>Projects | Pinto Engineering</title>
                <meta name="description" content="PINTO has contributed to nearly 2,500 projects since being established in 1987 including commercial, industrial, residential high-rises, bridges, and more."/>
                <meta name="robots" content="index,follow"/>
            </Helmet>
            <div className="overlay"></div>
            <div className="row">
                <div className="box">
                    <a href="/projects/residential"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664242622/consult_pinto/wedgewood_ceesed.jpg" 
                    alt="Residential projects that Pinto Engineering has worked on"/>
                    <h3>Residential</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/commercial"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664220609/consult_pinto/isl_tabq15.jpg" 
                    alt="Commercial projects that Pinto Engineering has worked on"/>
                    <h3>Commerical</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/heritage"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664240840/consult_pinto/SJChurch_fzx52h.jpg" 
                    alt="Heritage projects that Pinto Engineering has worked on"/>
                    <h3>Heritage</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/industrial-aviation"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664241393/consult_pinto/texas_ebd6dq.jpg" alt="Industrial projects that Pinto Engineering has worked on"/>
                    <h3>Industrial & Aviation</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/institutional"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664241547/consult_pinto/church_eogdyo.jpg" 
                    alt="Institutional projects that Pinto Engineering has worked on"/>
                    <h3>Institutional</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/health"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664221816/consult_pinto/northwood_oge6kf.jpg" 
                    alt="Hospital & Wellness projects that Pinto Engineering has worked on"/>
                    <h3>Health</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/mixed-use-development"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664242002/consult_pinto/trillium_jking7.jpg" 
                    alt="Mixed Use Development projects that Pinto Engineering has worked on"/>
                    <h3>Mixed-Use Development</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/bridges"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664215989/consult_pinto/mbridge_l1p6jt.jpg"
                    alt="Bridges that Pinto Engineering has worked on"/>
                    <h3>Bridges</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/wharves"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664244121/consult_pinto/dock_tam7sh.jpg" 
                    alt="Wharves projects that Pinto Engineering has worked on"/>
                    <h3>Wharves</h3></a>
                </div>
            </div>
        </section>
    )
}

export default Projects;