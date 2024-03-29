import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Thomas = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/industrial-aviation"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Thomas Hill Environmental Retro Fit
                </h1>
                <h2>
                    Burns & McDonnell, Kansas City, Missouri, USA
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664241401/consult_pinto/Thomos_duct_sfmv4j.jpg" 
                    className="sliderimage" alt="PINTO provided design services for Thomas Hill Environmental Retro Fit"/>
                </AliceCarousel>
                <div className="text">
                <p>
                    PINTO provided design services for large-scale structural ductwork required for power generation station.  Services provided included the following:  design of structural steel duct walls, design of structural steel interior lateral pipe trusses, and peer review of design for structural steel bearing support mechanism. Project completed in 2007.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Thomas;