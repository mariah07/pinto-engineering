import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./bap-gallery/church.jpg";
import image2 from "./bap-gallery/church2.jpg";

const Baptist = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/institutional"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Bedford Baptist Church
                </h1>
                <h2>
                    Tilt-up Concrete Addition to Existing Church in Bedford, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage"/>
                    <img src={image2} className="sliderimage" />
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for an extension to the Bedford Baptist Church in Bedford, NS. The following elements were included in the design:  reinforced concrete foundations, structural steel roof framing, timber roof framing, reinforced concrete tilt-up panels including lifting and bracing design. PINTO received 2004 Tilt-up Achievement Award from the Tilt-up Concrete Association as an outstanding example of tilt-up concrete construction. The project was completed in 2003.</p>
                </div>
            </div>
        </section>
    );
}

export default Baptist;