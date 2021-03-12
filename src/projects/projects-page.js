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

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <div className="row">
                <div className="box">
                    <a href="/projects/bridges"><img src={bridge}/></a>
                    <h3>Bridges</h3>
                </div>
                <div className="box">
                    <a href="/projects/commercial"><img src={commercial}/></a>
                    <h3>Commerical</h3>
                </div>
                <div className="box">
                    <a href="/projects/heritage"><img src={heritage}/></a>
                    <h3>Heritage</h3>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <a href="/projects/industrial-aviation"><img src={industiral}/></a>
                    <h3>Industrial & Aviation</h3>
                </div>
                <div className="box">
                    <a href="/projects/institutional"><img src={institutional}/></a>
                    <h3>Institutional</h3>
                </div>
                <div className="box">
                    <a href="/projects/health"><img src={health}/></a>
                    <h3>Health</h3>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <a href="/projects/mixed-use-developement"><img src={mixed}/></a>
                    <h3>Mixed-Use Developement</h3>
                </div>
                <div className="box">
                    <a href="/projects/residential"><img src={residential}/></a>
                    <h3>Residential</h3>
                </div>
                <div className="box">
                    <a href="/projects/wharves"><img src={wharves}/></a>
                    <h3>Wharves</h3>
                </div>
            </div>
        </section>
    )
}

export default Projects;