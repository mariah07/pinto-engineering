import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./bri-gallery/brigadoon.jpg";
import image2 from "./bri-gallery/brigadoon2.jpg";
import image3 from "./bri-gallery/brigadoon3.jpg";

const Brigadoon = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/mixed-use-developement"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Brigadoon Village
                </h1>
                <h2>
                    Multi-Use Children's Recreational Facility in Nova Scotia's Annapolis Valley
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
                PINTO was pleased to provide structural design and construction administration services for a medical and recreational camp facility for children living with chronic illnesses located in the pristine surroundings of Lake McGee near Aylesford, NS.  The following elements were included in the design: reinforced concrete foundations, timber floor, wall, & roof framing, and a layout for pre-engineered timber trusses.  The camp included five camper cabins, an arts hall, a dining hall, and a staff cabin. The project was completed in 2011.
                </p>
                </div>
            </div>
        </section>
    );
}

export default Brigadoon;