import "./projects.css"
import React, {useEffect} from "react";
import texas from "../img/texas.jpg";
import thomas from "../img/Thomos_duct.jpg";

const Industrial = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <div className="overlay"></div>
            <div className="row">
                <div className="box">
                    <a href="/projects/industrial-aviation/texas-duct"><img src={texas} alt="Texas Duct - PINTO Engineering"/>
                    <h3>Texas Duct, Texas, United States</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/industrial-aviation/thomas-hill"><img src={thomas} alt="Thomas Hill Environmental Retro Fit - PINTO Engineering"/>
                    <h3>Thomas Hill Environmental Retro Fit, Burns & McDonnell, Kansas City, Missouri, USA</h3></a>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects">Back</a>
            </div>
        </section>
    )
}

export default Industrial;