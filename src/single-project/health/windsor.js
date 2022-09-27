import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Windsor = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/health"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Windsor Elms Village
                </h1>
                <h2>
                    Replacement Continuing Care Facility in Falmouth, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664221835/consult_pinto/windsor_daggtl.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Windsor Elms Village"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664221834/consult_pinto/windsor3_ftru8y.jpg"
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Windsor Elms Village"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664221835/consult_pinto/windsor2_chethq.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Windsor Elms Village"/>
                </AliceCarousel>
                <div className="text">
                <p>
                PINTO provided structural design and construction administration services for an 85,000 square foot replacement long term care facility located amid the scenic surroundings of Nova Scotia's Bay of Fundy. The following elements were included in the design: reinforced concrete foundations including concrete retaining walls, structural steel floor, roof, & canopy framing, insulated concrete form (ICF) exterior walls, and a layout of pre-engineered timber roof framing. The project was completed in 2010.</p>
                </div>
            </div>
        </section>
    );
}

export default Windsor;