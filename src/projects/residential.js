import "./projects.css"
import React, {useEffect} from "react";
import grand from "../img/grand.jpg";
import wedgewood from "../img/wedgewood.jpg";
import lavilla from "../img/la-villa.jpg";
import convoy from "../img/convoy.jpg";
import waterton from "../img/waterton.jpg";
import armoury from "../img/armoury.jpg";
import {Helmet} from "react-helmet";

const Residential = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <Helmet>
                <title>Residential | Pinto Engineering</title>
                <meta name="description" content="PINTO has contributed to nearly 2,500 projects since being established in 1987 including commercial, industrial, residential high-rises, bridges, and more."/>
                <meta name="robots" content="index,follow"/>
            </Helmet>
            <div className="button-area">
                <a className="button" href="/projects"><i class="fas fa-angle-left"></i></a>
            </div>
            <div className="overlay"></div>
            <div className="row">
                <div className="box">
                    <a href="/projects/residential/grand-haven"><img loading="eager" src={grand} alt="Grand Haven Heights - PINTO Engineering"/>
                    <h3>Grand Haven Heights, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/residential/wedgewood-condominium"><img loading="eager" src={wedgewood} alt="Wedgewood Condominium - PINTO Engineering"/>
                    <h3>Wedgewood Condominium, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/residential/la-villa"><img loading="eager" src={lavilla} alt="La Villa Residential Apartment - PINTO Engineering"/>
                    <h3>La Villa Residential Apartments, Halifax, NS</h3></a>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <a href="/projects/residential/convoy-quay-gardens"><img loading="eager" src={convoy} alt="Convoy Quay Gardens - PINTO Engineering"/>
                    <h3>Convoy Quay Gardens, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/residential/the-waterton"><img loading="eager" src={waterton} alt="The Waterton - PINTO Engineering"/>
                    <h3>The Waterton, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/residential/armoury-square"><img loading="eager" src={armoury} alt="Armoury Square - PINTO Engineering"/>
                    <h3>Armoury Square, Halifax, NS</h3></a>
                </div>
            </div>
        </section>
    )
}

export default Residential;