import "./projects.css"
import React, {useEffect} from "react";
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
                <meta name="robots" content="index,follow"/>
            </Helmet>
            <div className="button-area">
                <a className="button" href="/projects"><i class="fas fa-angle-left"></i></a>
            </div>
            <div className="overlay"></div>
            <div className="row">
                <div className="box">
                    <a href="/projects/institutional/aylesford-church"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664241537/consult_pinto/Aylesford_Church_k8g8uk.jpg" 
                    alt="Aylesford Baptist Church - PINTO Engineering"/>
                    <h3>Aylesford Baptist Church, Aylesford, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/institutional/bedford-church"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664241547/consult_pinto/church_eogdyo.jpg" 
                    alt="Beford Baptist Church - PINTO Engineering"/>
                    <h3>Bedford Baptist Church, Bedford, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/institutional/inverness-memorial-hospital"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664241552/consult_pinto/inverness_ytvfob.jpg"
                    alt="Inverness Consolidated Memorial Hospital - PINTO Engineering"/>
                    <h3>Inverness Consolidated Memorial Hospital, Inverness, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/institutional/moncton-law-courts"><img loading="eager" src="https://res.cloudinary.com/mariah07/image/upload/v1664241558/consult_pinto/mocton_pyhdpi.jpg" 
                    alt="Moncton Law Courts - PINTO Engineering"/>
                    <h3>Moncton Law Courts, Moncton, NB</h3></a>
                </div>
            </div>
        </section>
    )
}

export default Institutional;