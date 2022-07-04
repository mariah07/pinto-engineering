import "./projects.css"
import React, {useEffect} from "react";
import bridge from "../img/bridge.jpg";
import bridge2 from "../img/bridge2.jpg";
import {Helmet} from "react-helmet";

const Bridges = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <Helmet>
                <title>Bridges | Pinto Engineering</title>
                <meta name="description" content="PINTO has contributed to nearly 2,500 projects since being established in 1987 including commercial, industrial, residential high-rises, bridges, and more."/>
                <meta name="robots" content="index,follow"/>
            </Helmet>
            <div className="button-area">
                <a className="button" href="/projects"><i class="fas fa-angle-left"></i></a>
            </div>
            <div className="overlay"></div>
            <div className="row">
                <div className="box">
                    <a href="/projects/bridges/margaret-bridge"><img loading="eager" src={bridge} alt="Margaret Bridge - PINTO Engineering"/>
                    <h3>Princess Margaret Bridge, Fredericton, NB</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/bridges/railway-bridge"><img loading="eager" src={bridge2} alt="Railway Bridge - PINTO Engineering"/>
                    <h3>Little Bras D’or Railway Bridge Replacement, Highway 105, Cape Breton County, NS</h3></a>
                </div>
            </div>
        </section>
    )
}

export default Bridges;