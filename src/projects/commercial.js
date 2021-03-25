import "./projects.css"
import React, {useEffect} from "react";
import citadel from "../img/citadel.jpg";
import highfield from "../img/Highfield.jpg";
import market from "../img/market.jpg";
import isl from "../img/isl.jpg";
import glen from "../img/glen.jpg";
import coving from "../img/coving.jpg";
import comfort from "../img/comfort.jpg";

const Commerical = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <div className="row">
                <div className="box">
                    <a href="/projects/commercial/citadel-inn"><img src={citadel} alt="Citadel Inn - PINTO Engineering"/>
                    <h3>Citadel Inn Redevelopment, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/commercial/highfield-plaza"><img src={highfield} alt="Highfield Plaza - PINTO Engineering"/>
                    <h3>Highfield Plaza, Dartmouth, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/commercial/market-square"><img src={market} alt="Market Square - PINTO Engineering"/>
                    <h3>Market Square, Saint John, NB</h3></a>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <a href="/projects/commercial/isl-digital-marketing"><img src={isl} alt="ISL Digital Marketing - PINTO Engineering"/>
                    <h3>ISL Digital Marketing, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/commercial/glenbourne-plaza"><img src={glen} alt="Glenbourne Plaza - PINTO Engineering"/>
                    <h3>Glenbourne Plaza, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/commercial/covington-station"><img src={coving} alt="Covington Station - PINTO Engineering"/>
                    <h3>Covington Station, Kentville, NS</h3></a>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <a href="/projects/commercial/comfort-inn"><img src={comfort} alt="Comfort Inn - PINTO Engineering"/>
                    <h3>Comfort Inn, Halifax, NS</h3></a>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects">Back</a>
            </div>
        </section>
    )
}

export default Commerical;