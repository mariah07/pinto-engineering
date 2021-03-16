import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./tex-gallery/texas.jpg";
import image2 from "./tex-gallery/texas2.jpg";
import image3 from "./tex-gallery/texas3.jpg";

const Texas = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/industrial-aviation"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Texas Duct
                </h1>
                <h2>
                    Texas, United States
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage"/>
                    <img src={image1} className="sliderimage" />
                    <img src={image1} className="sliderimage"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided design services for large-scale structural inlet ductwork required for power generation station.  Services provided included the following:  design of structural steel duct walls, design of structural steel interior lateral pipe trusses, design of structural steel bearing support mechanism, production of fabrication shop drawings, production of bill of materials. Project completed in 2007.</p>
                </div>
            </div>
        </section>
    );
}

export default Texas;