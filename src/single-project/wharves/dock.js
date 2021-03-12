import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./doc-gallery/dock.jpg";

const Dock = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/wharves"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Little Bras D’or Railway Bridge Replacement
                </h1>
                <h2>
                    Highway 105, Cape Breton County, Nova Scotia
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
                PINTO provided structural design services for a reinforced concrete replacement bridge (CB076) on Highway 105.  The following elements were included in the design:  reinforced concrete abutments, reinforced concrete bridge girders, and reinforced concrete bridge deck.  Project completed in 2011.
                </p>
            </div>
            <div className="title">
                
            </div>
        </section>
    );
}

export default Dock;