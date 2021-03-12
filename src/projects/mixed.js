import "./projects.css"
import React, {useEffect} from "react";
import perkins from "../img/trillium.jpg";
import church from "../img/St._Lawrence.jpg";
import maryann from "../img/mary-ann.jpg";
import duckworth from "../img/duckworth.jpg";
import brigadoon from "../img/brigadoon.jpg";
import marriott from "../img/marriott.jpg";

const Mixed = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <div className="row">
                <div className="box">
                    <a href="/projects/mixed-use-developement/the-trillium"><img src={perkins}/></a>
                    <h3>The Trillium, Halifax, NS</h3>
                </div>
                <div className="box">
                    <a href="/projects/mixed-use-developement/saint-lawerence"><img src={church}/></a>
                    <h3>Saint Lawrence Place, Halifax, NS</h3>
                </div>
                <div className="box">
                    <a href="/projects/mixed-use-developement/mary-ann"><img src={maryann}/></a>
                    <h3>Mary Ann Development, Halifax, NS</h3>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <a href="/projects/mixed-use-developement/duckworth-street-metropark"><img src={duckworth}/></a>
                    <h3>Duckworth Street Metropark, St John's, Newfoundland and Labrador</h3>
                </div>
                <div className="box">
                    <a href="/projects/mixed-use-developement/brigadoon-village"><img src={brigadoon}/></a>
                    <h3>Brigadoon Village, South Alton, NS</h3>
                </div>
                <div className="box">
                    <a href="/projects/mixed-use-developement/marriott-residence-inn"><img src={marriott}/></a>
                    <h3>Marriott Residence Inn, Halifax, NS</h3>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects">Back</a>
            </div>
        </section>
    )
}

export default Mixed;