import "./projects.css"
import React, {useEffect} from "react";
import bridge from "../img/bridge.jpg";
import commercial from "../img/isl.jpg";
import heritage from "../img/SJChurch2.jpg";
import industiral from "../img/texas.jpg";
import institutional from "../img/church.jpg";
import health from "../img/northwood.jpg";
import mixed from "../img/trillium.jpg";
import residential from "../img/wedgewood.jpg";
import wharves from "../img/dock.jpg";
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
                    <a href="/projects/residential"><img loading="eager" src={residential} alt="Residential projects that Pinto Engineering has worked on"/>
                    <h3>Residential</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/commercial"><img loading="eager" src={commercial} alt="Commercial projects that Pinto Engineering has worked on"/>
                    <h3>Commerical</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/heritage"><img loading="eager" src={heritage} alt="Heritage projects that Pinto Engineering has worked on"/>
                    <h3>Heritage</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/industrial-aviation"><img loading="eager" src={industiral} alt="Industrial projects that Pinto Engineering has worked on"/>
                    <h3>Industrial & Aviation</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/institutional"><img loading="eager" src={institutional} alt="Institutional projects that Pinto Engineering has worked on"/>
                    <h3>Institutional</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/health"><img loading="eager" src={health} alt="Hospital & Wellness projects that Pinto Engineering has worked on"/>
                    <h3>Health</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/mixed-use-development"><img loading="eager" src={mixed} alt="Mixed Use Development projects that Pinto Engineering has worked on"/>
                    <h3>Mixed-Use Development</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/bridges"><img loading="eager" src={bridge} alt="Bridges that Pinto Engineering has worked on"/>
                    <h3>Bridges</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/wharves"><img loading="eager" src={wharves} alt="Wharves projects that Pinto Engineering has worked on"/>
                    <h3>Wharves</h3></a>
                </div>
            </div>
        </section>
    )
}

export default Projects;