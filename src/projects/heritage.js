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
            <div className="row">
                <div className="box">
                    <a href="/projects/heritage/perkins-house-museum"><img src={perkins}/></a>
                    <h3>Perkins House Museum, Liverpool, NS</h3>
                </div>
                <div className="box">
                    <a href="/projects/heritage/st-john-anglican-church"><img src={church}/></a>
                    <h3>St John’s Anglican Church Restoration, Lunenburg, NS</h3>
                </div>
                <div className="box">
                    <a href="/projects/heritage/morris-street"><img src={morris}/></a>
                    <h3>5247 Morris Street Renovation, Halifax, NS</h3>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <a href="/projects/heritage/st-george-anglican-church"><img src={george}/></a>
                    <h3>St. Georges Anglican Church Restoration, Halifax, NS</h3>
                </div>
                <div className="box">
                    <a href="/projects/heritage/uniacke-estate-museum"><img src={uniacke}/></a>
                    <h3>Uniacke Estate Museum, Mt. Uniacke, NS</h3>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects">Back</a>
            </div>
        </section>
    )
}

export default Heritage;