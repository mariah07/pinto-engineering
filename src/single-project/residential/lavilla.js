import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./lav-gallery/la-villa.jpg";
import image2 from "./lav-gallery/lavilla2.jpg";

const LaVilla = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/residential"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    La Villa Residential Apartments
                </h1>
                <h2>
                    Multi-Unit Residential Complex in Downtown Halifax, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage" alt="PINTO provided structural design and construction administration services for La Villa Residential Apartments"/>
                    <img src={image2} className="sliderimage" alt="PINTO provided structural design and construction administration services for La Villa Residential Apartments"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for a four-storey residential and commercial building on Agricola Street in Halifax.  The following elements were included in the design: reinforced concrete foundations, reinforced concrete columns & shearwalls, reinforced concrete podium slab, timber wall, floor, & roof framing, and structural steel floor framing. The project was completed in 2009.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default LaVilla;