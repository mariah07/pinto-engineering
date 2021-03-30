import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./win-gallery/windsor.jpeg";
import image2 from "./win-gallery/windsor2.jpeg";
import image3 from "./win-gallery/windsor3.jpeg";

const Windsor = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/health"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Windsor Elms Village
                </h1>
                <h2>
                    Replacement Continuing Care Facility in Falmouth, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage" alt="PINTO provided structural design and construction administration services for Windsor Elms Village"/>
                    <img src={image2} className="sliderimage" alt="PINTO provided structural design and construction administration services for Windsor Elms Village"/>
                    <img src={image3} className="sliderimage" alt="PINTO provided structural design and construction administration services for Windsor Elms Village"/>
                </AliceCarousel>
                <div className="text">
                <p>
                PINTO provided structural design and construction administration services for an 85,000 square foot replacement long term care facility located amid the scenic surroundings of Nova Scotia's Bay of Fundy. The following elements were included in the design: reinforced concrete foundations including concrete retaining walls, structural steel floor, roof, & canopy framing, insulated concrete form (ICF) exterior walls, and a layout of pre-engineered timber roof framing. The project was completed in 2010.</p>
                </div>
            </div>
        </section>
    );
}

export default Windsor;