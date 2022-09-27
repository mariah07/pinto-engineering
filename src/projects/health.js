import "./projects.css"
import React, {useEffect} from "react";
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
                <meta name="robots" content="index,follow"/>
            </Helmet>
            <div className="button-area">
                <a className="button" href="/projects"><i class="fas fa-angle-left"></i></a>
            </div>
            <div className="overlay"></div>
            <div className="row">
                <div className="box">
                    <a href="/projects/health/inverary-manor-nursing-home"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664221805/consult_pinto/inverary_manor_s98fl6.jpg" 
                    alt="Inverary Manor Nursing Home - PINTO Engineering"/>
                    <h3>Inverary Manor Nursing Home, Inverness, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/health/wickwire-assisted-living-residence"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664221825/consult_pinto/wickwire_aqkdha.jpg" 
                    alt="Wickwire Place Assisted Living Residence - PINTO Engineering"/>
                    <h3>Wickwire Place Assisted Living Residence, Wolfville, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/health/foyer-longterm-care-facility"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664221786/consult_pinto/foyer_ivdcsk.jpg" 
                    alt="Foyer Pere Fiset Long Term Care Facility - PINTO Engineering"/>
                    <h3>Foyer Pere Fiset Long Term Care Facility, Cheticamp, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/health/windsor-elms-village"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664221835/consult_pinto/windsor_daggtl.jpg" 
                    alt="Windsor Elms Village - PINTO Engineering"/>
                    <h3>Windsor Elms Village, Falmouth, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/health/northwood-continuing-care"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664221816/consult_pinto/northwood_oge6kf.jpg" 
                    alt="Northwood Continuing Care - PINTO Engineering"/>
                    <h3>Northwood Continuing Care Centre - Ivany Place, Bedford, NS</h3></a>
                </div>
            </div>
        </section>
    )
}

export default Health;