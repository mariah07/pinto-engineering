import "./projects.css"
import React, {useEffect} from "react";
import bridge from "../img/bridge.jpg";
import bridge2 from "../img/bridge2.jpg";

const Bridges = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <div className="row">
                <div className="box">
                    <a href="/margaret-bridge"><img src={bridge}/></a>
                    <h3>Princess Margaret Bridge, Fredericton, NB</h3>
                </div>
                <div className="box">
                    <a href="/railway-bridge"><img src={bridge2}/></a>
                    <h3>Little Bras D’or Railway Bridge Replacement, Highway 105, Cape Breton County, NS</h3>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects">Back</a>
            </div>
        </section>
    )
}

export default Bridges;