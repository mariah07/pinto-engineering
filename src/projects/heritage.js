import "./projects.css"
import React, {useEffect} from "react";
import perkins from "../img/perkins.jpg";
import church from "../img/SJChurch2.jpg";
import morris from "../img/morris.jpg";
import george from "../img/st_george.jpg";
import uniacke from "../img/uniacke.jpg";

const Heritage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <div className="overlay"></div>
            <div className="row">
                <div className="box">
                    <a href="/projects/heritage/perkins-house-museum"><img src={perkins} alt="Perkins House Museum - PINTO Engineering"/>
                    <h3>Perkins House Museum, Liverpool, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/heritage/st-john-anglican-church"><img src={church} alt="St John's Anglican Church Restoration - PINTO Engineering"/>
                    <h3>St John’s Anglican Church Restoration, Lunenburg, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/heritage/morris-street"><img src={morris} alt="Morris Street Renovation - PINTO Engineering"/>
                    <h3>5247 Morris Street Renovation, Halifax, NS</h3></a>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <a href="/projects/heritage/st-george-anglican-church"><img src={george} alt="St George Anglican Church - PINTO Engineering"/>
                    <h3>St. Georges Anglican Church Restoration, Halifax, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/heritage/uniacke-estate-museum"><img src={uniacke} alt="Uniacke Estate Museum - PINTO Engineering"/>
                    <h3>Uniacke Estate Museum, Mt. Uniacke, NS</h3></a>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects">Back</a>
            </div>
        </section>
    )
}

export default Heritage;