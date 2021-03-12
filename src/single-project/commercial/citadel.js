import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./cit-gallery/citadel.jpg";

const Citadel = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/commercial"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Citadel Inn Redevelopment
                </h1>
                <h2>
                    Downtown Halifax, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage"/>
                    <img src={image1} className="sliderimage" />
                    <img src={image1} className="sliderimage"/>
                </AliceCarousel>
            </div>
            <div className="text">
                <p>
                    PINTO provided structural peer review and construction administration services for the redevelopment of the Citadel Inn Hotel complex located in the central business district in downtown Halifax. The project is a combination of hotel facilities, residential units, and commercial space and was completed in 2012.
                </p>
            </div>
            <div className="title">
                
            </div>
        </section>
    );
}

export default Citadel;