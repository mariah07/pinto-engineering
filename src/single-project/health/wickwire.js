import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./wick-gallery/wickwire.jpg";
import image2 from "./wick-gallery/wickwire2.jpg";
import image3 from "./wick-gallery/wickwire3.jpg";

const Wickwire = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/health"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Wickwire Place Assisted Living Residence
                </h1>
                <h2>
                    Wood Framed Assisted Living Facility in Wolfville, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage" alt="PINTO provided structural design and construction administration services for Wickwire Place Assisted Living Residence"/>
                    <img src={image2} className="sliderimage" alt="PINTO provided structural design and construction administration services for Wickwire Place Assisted Living Residence"/>
                    <img src={image3} className="sliderimage" alt="PINTO provided structural design and construction administration services for Wickwire Place Assisted Living Residence"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for a new long term care facility located in the historic town of Wolfville in Nova Scotia's Annapolis Valley. The following elements were included in the design: reinforced concrete foundations, reinforced concrete slabs, columns, & shearwalls, structural steel roof framing, timber wall and floor framing, and a layout of pre-engineered timber roof framing. The project was completed in 2007. </p>
                </div>
            </div>
        </section>
    );
}

export default Wickwire;