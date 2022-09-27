import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Texas = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/industrial-aviation"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Texas Duct
                </h1>
                <h2>
                    Texas, United States
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664241393/consult_pinto/texas_ebd6dq.jpg" 
                    className="sliderimage" alt="PINTO provided design services for Texas Duct"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664241393/consult_pinto/texas3_dwjjrf.jpg" 
                    className="sliderimage" alt="PINTO provided design services for Texas Duct"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664241393/consult_pinto/texas2_itrduv.jpg" 
                    className="sliderimage" alt="PINTO provided design services for Texas Duct"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided design services for large-scale structural inlet ductwork required for power generation station.  Services provided included the following:  design of structural steel duct walls, design of structural steel interior lateral pipe trusses, design of structural steel bearing support mechanism, production of fabrication shop drawings, production of bill of materials. Project completed in 2007.</p>
                </div>
            </div>
        </section>
    );
}

export default Texas;