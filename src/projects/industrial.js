import "./projects.css"
import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

const Industrial = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <Helmet>
                <title>Industrial | Pinto Engineering</title>
                <meta name="description" content="PINTO has contributed to nearly 2,500 projects since being established in 1987 including commercial, industrial, residential high-rises, bridges, and more."/>
                <meta name="robots" content="index,follow"/>
            </Helmet>
            <div className="button-area">
                <a className="button" href="/projects"><i class="fas fa-angle-left"></i></a>
            </div>
            <div className="overlay"></div>
            <div className="row">
                <div className="box">
                    <a href="/projects/industrial-aviation/texas-duct"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664241393/consult_pinto/texas_ebd6dq.jpg" 
                    alt="Texas Duct - PINTO Engineering"/>
                    <h3>Texas Duct, Texas, United States</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/industrial-aviation/thomas-hill"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664241401/consult_pinto/Thomos_duct_sfmv4j.jpg" 
                    alt="Thomas Hill Environmental Retro Fit - PINTO Engineering"/>
                    <h3>Thomas Hill Environmental Retro Fit, Burns & McDonnell, Kansas City, Missouri, USA</h3></a>
                </div>
            </div>
        </section>
    )
}

export default Industrial;