import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./inv-gallery/inverness.jpg";
import image2 from "./inv-gallery/inverness2.jpg";

const Inverness = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/institutional"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Inverness Consolidated Memorial Hospital
                </h1>
                <h2>
                    New Addition onto Existing Hospital in Inverness, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage"/>
                    <img src={image2} className="sliderimage" />
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for a new ambulatory care unit for the existing hospital in Inverness, Nova Scotia. The following elements were included in the design: reinforced concrete foundations, structural steel wall & roof framing, and structural steel canopies.  Particular care was required to retrofit the new addition to the existing reinforced concrete structure, which required a detailed structural investigation prior to beginning design. The project was completed in 2011.</p>
                </div>
            </div>
        </section>
    );
}

export default Inverness;