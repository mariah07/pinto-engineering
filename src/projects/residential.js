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
                    <a href="/grand-haven"><img src={grand}/></a>
                    <h3>Grand Haven Heights, Halifax, NS</h3>
                </div>
                <div className="box">
                    <a href="/wedgewood-condominium"><img src={wedgewood}/></a>
                    <h3>Wedgewood Condominium, Halifax, NS</h3>
                </div>
                <div className="box">
                    <a href="/la-villa"><img src={lavilla}/></a>
                    <h3>La Villa Residential Apartments, Halifax, NS</h3>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <a href="/convoy-quay-gardens"><img src={convoy}/></a>
                    <h3>Convoy Quay Gardens, Halifax, NS</h3>
                </div>
                <div className="box">
                    <a href="/the-waterton"><img src={waterton}/></a>
                    <h3>The Waterton, Halifax, NS</h3>
                </div>
                <div className="box">
                    <a href="/armoury-square"><img src={armoury}/></a>
                    <h3>Armoury Square, Halifax, NS</h3>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects">Back</a>
            </div>
        </section>
    )
}

export default Residential;