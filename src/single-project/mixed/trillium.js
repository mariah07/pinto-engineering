import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./trill-gallery/trillium.jpg";
import image2 from "./trill-gallery/trillium2.jpg";

const Trillium = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/mixed-use-developement"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    The Trillium
                </h1>
                <h2>
                    20 Story, Mixed Residential and Commercial Complex in Downtown Halifax, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage"/>
                    <img src={image2} className="sliderimage" />
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for this 20-storey residential, commercial, and retail complex in the heart of downtown Halifax.  The following elements were included in the design: reinforced concrete foundations including raft footing, reinforced concrete beams, columns, & shearwalls,  281,000 square feet of concrete floor & roof slabs including three levels of underground parking, structural steel penthouse, and structural steel canopies.  The Trillium won the 2010 Nova Scotia Lieutenant Governor General's Award for Engineering. The project was completed in 2012.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Trillium;