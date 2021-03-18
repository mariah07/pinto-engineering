import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./cov-gallery/coving.jpg";

const Coving = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/commercial"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Covington Station
                </h1>
                <h2>
                    Tilt-up Concrete and Structural Steel Commercial Complex in Kentville, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage" alt=" PINTO provided structural design and construction administration services for Covington Station"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for a three-storey office building in Kentville's business district.  The following elements were included in the design:  reinforced concrete foundations and reinforced concrete tilt-up panels including lifting and bracing design.  Project completed in 2009.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Coving;