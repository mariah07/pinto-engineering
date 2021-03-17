import "./projects.css"
import React, {useEffect} from "react";
import grand from "../img/grand.jpg";
import wedgewood from "../img/wedgewood.jpg";
import lavilla from "../img/la-villa.jpg";
import convoy from "../img/convoy.jpg";
import waterton from "../img/waterton.jpg";
import armoury from "../img/armoury.jpg";

const Residential = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <div className="row">
                <div className="box">
                    <a href="/projects/residential/grand-haven"><img src={grand} alt="Grand Haven Heights - PINTO Engineering"/>
                    <h3>Grand Haven Heights, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/residential/wedgewood-condominium"><img src={wedgewood} alt="Wedgewood Condominium - PINTO Engineering"/>
                    <h3>Wedgewood Condominium, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/residential/la-villa"><img src={lavilla} alt="La Villa Residential Apartment - PINTO Engineering"/>
                    <h3>La Villa Residential Apartments, Halifax, NS</h3></a>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <a href="/projects/residential/convoy-quay-gardens"><img src={convoy} alt="Convoy Quay Gardens - PINTO Engineering"/>
                    <h3>Convoy Quay Gardens, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/residential/the-waterton"><img src={waterton} alt="The Waterton - PINTO Engineering"/>
                    <h3>The Waterton, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/residential/armoury-square"><img src={armoury} alt="Armoury Square - PINTO Engineering"/>
                    <h3>Armoury Square, Halifax, NS</h3></a>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects">Back</a>
            </div>
        </section>
    )
}

export default Residential;