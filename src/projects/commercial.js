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
                    <a href="/citadel-inn"><img src={citadel}/></a>
                    <h3>Citadel Inn Redevelopment, Halifax, NS</h3>
                </div>
                <div className="box">
                    <a href="/highfield-plaza"><img src={highfield}/></a>
                    <h3>Highfield Plaza, Dartmouth, NS</h3>
                </div>
                <div className="box">
                    <a href="/market-square"><img src={market}/></a>
                    <h3>Market Square, Saint John, NB</h3>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <a href="/isl-digital-marketing"><img src={isl}/></a>
                    <h3>ISL Digital Marketing, Halifax, NS</h3>
                </div>
                <div className="box">
                    <a href="/glenbourne-plaza"><img src={glen}/></a>
                    <h3>Glenbourne Plaza, Halifax, NS</h3>
                </div>
                <div className="box">
                    <a href="/covington-station"><img src={coving}/></a>
                    <h3>Covington Station, Kentville, NS</h3>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <a href="/comfort-inn"><img src={comfort}/></a>
                    <h3>Comfort Inn, Halifax, NS</h3>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects">Back</a>
            </div>
        </section>
    )
}

export default Commerical;