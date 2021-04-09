import "./projects.css"
import React, {useEffect} from "react";
import woodside from "../img/woodside.jpg";
import dock from "../img/dock.jpg";
import {Helmet} from "react-helmet";

const Wharves = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <Helmet>
                <title>Wharves | Pinto Engineering</title>
                <meta name="description" content="PINTO has contributed to nearly 2,500 projects since being established in 1987 including commercial, industrial, residential high-rises, bridges, and more."/>
            </Helmet>
            <div className="overlay"></div>
            <div className="row">
                <div className="box">
                    <a href="/projects/wharves/woodside-ferry"><img src={woodside} alt="Woodside Ferry Terminal Pontoon - PINTO Engineering"/>
                    <h3>Woodside Ferry Terminal Pontoon, Dartmouth, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/wharves/national-gypsum-dock"><img src={dock} alt="National Gypsum Dock - PINTO Engineering"/>
                    <h3>National Gypsum Dock, Dartmouth, NS</h3></a>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects"><i class="fas fa-angle-left"></i></a>
            </div>
        </section>
    )
}

export default Wharves;