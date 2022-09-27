import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Northwood = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/health"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Northwood Continuing Care Centre - Ivany Place
                </h1>
                <h2>
                    Northwood Continuing Care Facility in Bedford, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664221816/consult_pinto/northwood_oge6kf.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Northwood Continuing Care Centre"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664221816/consult_pinto/northwood2_eea5by.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Northwood Continuing Care Centre"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664221817/consult_pinto/northwood4_djcndr.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Northwood Continuing Care Centre"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664221817/consult_pinto/northwood3_txuhj0.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Northwood Continuing Care Centre"/>
                </AliceCarousel>
                <div className="text">
                <p>
                PINTO provided structural design and construction administration services for Northwood's one-of-a-kind continuing care facility located in Bedford, Nova Scotia.  PINTO worked closely with the architect on achieving their vision of a 'column-free' space to increase the comfort of the residents. The following elements were included in the design: reinforced concrete foundations, reinforced concrete columns, beams, & shearwalls, 180,000 square feet of reinforced concrete floor & roof slabs, insulated concrete form (ICF) exterior walls, and structural steel canopies. The project was completed in 2009. </p>
                </div>
            </div>
        </section>
    );
}

export default Northwood;