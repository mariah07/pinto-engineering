import "./projects.css"
import React, {useEffect} from "react";
import perkins from "../img/trillium.jpg";
import church from "../img/St._Lawrence.jpg";
import maryann from "../img/mary-ann.jpg";
import duckworth from "../img/duckworth.jpg";
import brigadoon from "../img/brigadoon.jpg";
import marriott from "../img/marriott.jpg";
import {Helmet} from "react-helmet";

const Mixed = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <Helmet>
                <title>Mixed-Use Development | Pinto Engineering</title>
                <meta name="description" content="PINTO has contributed to nearly 2,500 projects since being established in 1987 including commercial, industrial, residential high-rises, bridges, and more."/>
            </Helmet>
            <div className="overlay"></div>
            <div className="row">
                <div className="box">
                    <a href="/projects/mixed-use-development/the-trillium"><img src={perkins} alt="The Trillium - PINTO Engineering"/>
                    <h3>The Trillium, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/mixed-use-development/saint-lawerence"><img src={church} alt="Saint Lawrence Place - PINTO Engineering"/>
                    <h3>Saint Lawrence Place, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/mixed-use-development/mary-ann"><img src={maryann} alt="Mary Ann Development - PINTO Engineering"/>
                    <h3>Mary Ann Development, Halifax, NS</h3></a>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <a href="/projects/mixed-use-development/duckworth-street-metropark"><img src={duckworth} alt="Duckworth Street Metropark - PINTO Engineering"/>
                    <h3>Duckworth Street Metropark, St John's, Newfoundland and Labrador</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/mixed-use-development/brigadoon-village"><img src={brigadoon} alt="Brigadoon Village - PINTO Engineering"/>
                    <h3>Brigadoon Village, South Alton, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/mixed-use-development/marriott-residence-inn"><img src={marriott} alt="Marriott Residence Inn - PINTO Engineering"/>
                    <h3>Marriott Residence Inn, Halifax, NS</h3></a>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects"><i class="fas fa-angle-left"></i></a>
            </div>
        </section>
    )
}

export default Mixed;