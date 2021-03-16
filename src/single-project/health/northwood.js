import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./nor-gallery/northwood.jpg";
import image2 from "./nor-gallery/northwood2.jpg";
import image3 from "./nor-gallery/northwood3.jpg";
import image4 from "./nor-gallery/northwood4.jpg";

const Northwood = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/health"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Northwood Continuing Care Centre - Ivany Place
                </h1>
                <h2>
                    Northwood Continuing Care Facility in Bedford, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage"/>
                    <img src={image2} className="sliderimage" />
                    <img src={image3} className="sliderimage"/>
                    <img src={image4} className="sliderimage"/>
                </AliceCarousel>
                <div className="text">
                <p>
                PINTO provided structural design and construction administration services for Northwood's one-of-a-kind continuing care facility located in Bedford, Nova Scotia.  PINTO worked closely with the architect on achieving their vision of a 'column-free' space to increase the comfort of the residents. The following elements were included in the design: reinforced concrete foundations, reinforced concrete columns, beams, & shearwalls, 180,000 square feet of reinforced concrete floor & roof slabs, insulated concrete form (ICF) exterior walls, and structural steel canopies. The project was completed in 2009. </p>
                </div>
            </div>
        </section>
    );
}

export default Northwood;