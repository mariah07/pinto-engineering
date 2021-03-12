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
            <div className="row">
                <div className="box">
                    <a href="/projects/industrial-aviation/texas-duct"><img src={texas}/></a>
                    <h3>Texas Duct, Texas, United States</h3>
                </div>
                <div className="box">
                    <a href="/projects/industrial-aviation/thomas-hill"><img src={thomas}/></a>
                    <h3>Thomas Hill Environmental Retro Fit, Burns & McDonnell, Kansas City, Missouri, USA</h3>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects">Back</a>
            </div>
        </section>
    )
}

export default Industrial;