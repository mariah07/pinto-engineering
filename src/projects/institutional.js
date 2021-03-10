import "./projects.css"
import React, {useEffect} from "react";
import alyes from "../img/Aylesford_Church.jpg";
import church from "../img/church.jpg";
import inverness from "../img/inverness.jpg";
import mocton from "../img/mocton.jpg";

const Institutional = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="project">
            <div className="row">
                <div className="box">
                    <a href="/aylesford-church"><img src={alyes}/></a>
                    <h3>Aylesford Baptist Church, Aylesford, NS</h3>
                </div>
                <div className="box">
                    <a href="/bedford-church"><img src={church}/></a>
                    <h3>Bedford Baptist Church, Bedford, NS</h3>
                </div>
                <div className="box">
                    <a href="/inverness-memorial-hospital"><img src={inverness}/></a>
                    <h3>Inverness Consolidated Memorial Hospital, Inverness, NS</h3>
                </div>
            </div>
            <div className="row">
                <div className="box">
                    <a href="/moncton-law-courts"><img src={mocton}/></a>
                    <h3>Moncton Law Courts, Moncton, NB</h3>
                </div>
            </div>
            <div className="button-area">
                <a className="button" href="/projects">Back</a>
            </div>
        </section>
    )
}

export default Institutional;