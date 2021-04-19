import "./projects.css"
import React, {useEffect} from "react";
import manor from "../img/inverary_manor.jpg";
import wickwire from "../img/wickwire.jpg";
import foyer from "../img/foyer.jpg";
import windsor from "../img/windsor.jpeg";
import northwood from "../img/northwood.jpg";
import {Helmet} from "react-helmet";

const Health = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <Helmet>
                <title>Health | Pinto Engineering</title>
                <meta name="description" content="PINTO has contributed to nearly 2,500 projects since being established in 1987 including commercial, industrial, residential high-rises, bridges, and more."/>
            </Helmet>
            <div className="overlay"></div>
            <div className="row">
                <div className="box">
                    <a href="/projects/health/inverary-manor-nursing-home"><img loading="eager" src={manor} alt="Inverary Manor Nursing Home - PINTO Engineering"/>
                    <h3>Inverary Manor Nursing Home, Inverness, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/health/wickwire-assisted-living-residence"><img loading="eager" src={wickwire} alt="Wickwire Place Assisted Living Residence - PINTO Engineering"/>
                    <h3>Wickwire Place Assisted Living Residence, Wolfville, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/health/foyer-longterm-care-facility"><img loading="eager" src={foyer} alt="Foyer Pere Fiset Long Term Care Facility - PINTO Engineering"/>
                    <h3>Foyer Pere Fiset Long Term Care Facility, Cheticamp, NS</h3></a>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <a href="/projects/health/windsor-elms-village"><img loading="eager" src={windsor} alt="Windsor Elms Village - PINTO Engineering"/>
                    <h3>Windsor Elms Village, Falmouth, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/health/northwood-continuing-care"><img loading="eager" src={northwood} alt="Northwood Continuing Care - PINTO Engineering"/>
                    <h3>Northwood Continuing Care Centre - Ivany Place, Bedford, NS</h3></a>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects"><i class="fas fa-angle-left"></i></a>
            </div>
        </section>
    )
}

export default Health;