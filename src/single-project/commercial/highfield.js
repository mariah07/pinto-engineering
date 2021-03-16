import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./highfield-gallery/Highfield.jpg";
import image2 from "./highfield-gallery/Highfield2.jpg";

const Highfield = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/commercial"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Highfield Plaza
                </h1>
                <h2>
                    Two-Story Steel Framed Commercial Complex in Dartmouth, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage"/>
                    <img src={image2} className="sliderimage" />
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for this eye-catching commercial complex in the Highfield Park business district in Dartmouth, Nova Scotia.  The following elements were included in the design:  reinforced concrete foundations, structural steel floor & wall systems, and layout of pre-engineered timber roof system. 
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Highfield;