import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Foyer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/health"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Foyer Pere Fiset Long Term Care Facility
                </h1>
                <h2>
                    Wood Framed Long Term Care Facility in Cheticamp, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664221786/consult_pinto/foyer_ivdcsk.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Foyer Pere Fiset Long Term Care Facility"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664221787/consult_pinto/foyer2_ijmlyn.jpg"
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Foyer Pere Fiset Long Term Care Facility"/>
                </AliceCarousel>
                <div className="text">
                <p>
                PINTO provided structural design and construction administration services for a 10-bed replacement long term care facility located along the Cabot trail on Cape Breton Island. Special care was required in detailing the timber structure to deal with extreme wind loading conditions in the area. The following elements were included in the design: reinforced concrete foundations, structural steel roof framing, timber wall and floor framing, and a layout of pre-engineered timber roof framing. The project was completed in 2011.
                </p>
            </div>
            </div>
        </section>
    );
}

export default Foyer;