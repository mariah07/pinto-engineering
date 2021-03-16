import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./doc-gallery/dock.jpg";
import image2 from "./doc-gallery/dock2.jpg";
import image3 from "./doc-gallery/dock3.jpg";

const Dock = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/wharves"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    National Gypsum Dock
                </h1>
                <h2>
                    Remediation of Dock Structure in Dartmouth, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage"/>
                    <img src={image2} className="sliderimage" />
                    <img src={image3} className="sliderimage"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                        PINTO provided structural design and construction administration services for the refurbishment of the loading dock at National Gypsum (Canada) Ltd. in Dartmouth, NS.  The following services were provided beginning in 2005:  extensive site investigation & annual condition assessment reports, design of new reinforced concrete bridge beams & bridge decks, design of structural steel support for gypsum conveyor system, assessment & recommendations for sheet pile refurbishment, as well as multiple temporary repairs to reinforced concrete corbels & columns.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Dock;