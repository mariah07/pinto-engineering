import "./projects.css"
import React, {useEffect} from "react";
import alyes from "../img/Aylesford_Church.jpg";
import church from "../img/church.jpg";
import inverness from "../img/inverness.jpg";
import mocton from "../img/mocton.jpg";
import {Helmet} from "react-helmet";

const Institutional = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <Helmet>
                <title>Institutional | Pinto Engineering</title>
                <meta name="description" content="PINTO has contributed to nearly 2,500 projects since being established in 1987 including commercial, industrial, residential high-rises, bridges, and more."/>
            </Helmet>
            <div className="overlay"></div>
            <div className="row">
                <div className="box">
                    <a href="/projects/institutional/aylesford-church"><img src={alyes} alt="Aylesford Baptist Church - PINTO Engineering"/>
                    <h3>Aylesford Baptist Church, Aylesford, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/institutional/bedford-church"><img src={church} alt="Beford Baptist Church - PINTO Engineering"/>
                    <h3>Bedford Baptist Church, Bedford, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/institutional/inverness-memorial-hospital"><img src={inverness} alt="Inverness Consolidated Memorial Hospital - PINTO Engineering"/>
                    <h3>Inverness Consolidated Memorial Hospital, Inverness, NS</h3></a>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <a href="/projects/institutional/moncton-law-courts"><img src={mocton} alt="Moncton Law Courts - PINTO Engineering"/>
                    <h3>Moncton Law Courts, Moncton, NB</h3></a>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects"><i class="fas fa-angle-left"></i></a>
            </div>
        </section>
    )
}

export default Institutional;