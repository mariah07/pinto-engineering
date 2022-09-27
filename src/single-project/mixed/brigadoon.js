import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Brigadoon = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/mixed-use-development"><i class="fas fa-angle-left"></i></a>
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
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664241971/consult_pinto/brigadoon_yewraw.jpg"
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Brigadoon Village"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664241970/consult_pinto/brigadoon2_kcreor.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Brigadoon Village"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664241970/consult_pinto/brigadoon3_hl3hjp.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Brigadoon Village"/>
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