import "./projects.css"
import React, {useEffect} from "react";
import woodside from "../img/woodside.jpg";
import dock from "../img/dock.jpg";

const Wharves = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <div className="row">
                <div className="box">
                    <a href="/projects/wharves/woodside-ferry"><img src={woodside} alt="Woodside Ferry Terminal Pontoon - PINTO Engineering"/>
                    <h3>Woodside Ferry Terminal Pontoon, Dartmouth, NS</h3></a>
                </div>
                <div className="box">
                    <a href="/projects/wharves/national-gypsum-dock"><img src={dock} alt="National Gypsum Dock - PINTO Engineering"/>
                    <h3>National Gypsum Dock, Dartmouth, NS</h3></a>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects">Back</a>
            </div>
        </section>
    )
}

export default Wharves;