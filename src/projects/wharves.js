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
                    <a href="/woodside-ferry"><img src={woodside}/></a>
                    <h3>Woodside Ferry Terminal Pontoon, Dartmouth, NS</h3>
                </div>
                <div className="box">
                    <a href="/national-gypsum-dock"><img src={dock}/></a>
                    <h3>National Gypsum Dock, Dartmouth, NS</h3>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects">Back</a>
            </div>
        </section>
    )
}

export default Wharves;