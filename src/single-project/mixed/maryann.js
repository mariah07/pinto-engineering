import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./mary-gallery/mary-ann.jpg";

const MaryAnn = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/mixed-use-developement"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Mary Ann Development
                </h1>
                <h2>
                    New Multi-Unit Residential and Retail Complex in Downtown Halifax, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage"/>
                </AliceCarousel>
            </div>
            <div className="text">
                <p>
                PINTO is pleased to be providing structural design services for the Mary Ann Development located in the heart of the downtown Halifax shopping district near Spring Garden Road.  This exciting new project is a combination of commercial shopping space at street level and residential units on the upper levels. Construction is currently underway and scheduled for completion in 2016.
                </p>
            </div>
            <div className="title">
                
            </div>
        </section>
    );
}

export default MaryAnn;