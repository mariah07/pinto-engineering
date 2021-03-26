import "./individual-services.css"
import building from "../img/building.jpg"
import React, {useEffect} from "react";

const EngineeringDesign = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="design">
            <h1>Engineering Design</h1>
            <p>
            </p>
            <img src={building} alt=""/>
            <div className="banner">
                <h2>Structural - Buildings</h2>
                <p>PINTO offers comprehensive structural consulting services in the commercial, retail, healthcare, sports, industrial, and institutional sectors. Our design services include reinforced concrete foundations (deep and shallow), reinforced concrete buildings, concrete retaining walls & tunnel structures, structural steel framed buildings, light-gauge steel, tilt-up concrete construction including composite panel design, wood framed construction including panelized projects, heavy timber construction, and temporary shoring.</p>
            </div>
            <div className="banner">
                <h2>Structural - Civil & Marine</h2>
                <p>PINTO offers design services for Civil and Marine projects that include reinforced concrete bridges & abutments, structural steel bridges, wharves & docks, pile systems, as well as pontoons. We have a broad range of experience in new construction as well as restoration & remediation of existing structures. </p>
            </div>
            <div className="banner">
                <h2>Remediation & Restoration</h2>
                <p>PINTO's services in structural remediation and restoration include heritage restoration & renovation, marine structure remediation as well as timber, steel, & concrete retrofits and renovations. PINTO offers our clients comprehensive, on-site investigation services to accompany restoration and remediation projects in order to minimize costly surprises during the construction process.</p>
            </div>
        </section>
    )
}

export default EngineeringDesign;