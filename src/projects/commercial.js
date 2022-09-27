import "./projects.css"
import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

const Commerical = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <Helmet>
                <title>Commercial | Pinto Engineering</title>
                <meta name="description" content="PINTO has contributed to nearly 2,500 projects since being established in 1987 including commercial, industrial, residential high-rises, bridges, and more."/>
                <meta name="robots" content="index,follow"/>
            </Helmet>
            <div className="button-area">
                <a className="button" href="/projects"><i class="fas fa-angle-left"></i></a>
            </div>
            <div className="overlay"></div>
            <div className="row">
                <div className="box">
                    <a href="/projects/commercial/citadel-inn"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664220223/consult_pinto/citadel_azevql.jpg" 
                    alt="Citadel Inn - PINTO Engineering"/>
                    <h3>Citadel Inn Redevelopment, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/commercial/highfield-plaza"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664220547/consult_pinto/Highfield_uxjnsk.jpg" 
                    alt="Highfield Plaza - PINTO Engineering"/>
                    <h3>Highfield Plaza, Dartmouth, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/commercial/market-square"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664220722/consult_pinto/market_cac4z1.jpg" 
                    alt="Market Square - PINTO Engineering"/>
                    <h3>Market Square, Saint John, NB</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/commercial/isl-digital-marketing"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664220609/consult_pinto/isl_tabq15.jpg" 
                    alt="ISL Digital Marketing - PINTO Engineering"/>
                    <h3>ISL Digital Marketing, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/commercial/glenbourne-plaza"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664220509/consult_pinto/glen_masdnz.jpg" 
                    alt="Glenbourne Plaza - PINTO Engineering"/>
                    <h3>Glenbourne Plaza, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/commercial/covington-station"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664220476/consult_pinto/coving_qnkagl.jpg" 
                    alt="Covington Station - PINTO Engineering"/>
                    <h3>Covington Station, Kentville, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/commercial/comfort-inn"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664220330/consult_pinto/comfort_tjffdo.jpg" 
                    alt="Comfort Inn - PINTO Engineering"/>
                    <h3>Comfort Inn, Halifax, NS</h3></a>
                </div>
            </div>
        </section>
    )
}

export default Commerical;