import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

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
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664221825/consult_pinto/wickwire_aqkdha.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Wickwire Place Assisted Living Residence"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664221826/consult_pinto/wickwire3_hxkuck.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Wickwire Place Assisted Living Residence"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664221826/consult_pinto/wickwire2_xol65y.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Wickwire Place Assisted Living Residence"/>
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