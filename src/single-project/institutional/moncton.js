import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Moncton = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/institutional"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Moncton Law Courts
                </h1>
                <h2>
                    Construction Administration of Renovation to Moncton Law Courts Building, Moncton, New Brunswick
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664241558/consult_pinto/mocton_pyhdpi.jpg" 
                    className="sliderimage" alt="PINTO provided construction administration services for Moncton Law Courts"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664241558/consult_pinto/mocton3_ewp2op.jpg" 
                    className="sliderimage" alt="PINTO provided construction administration services for Moncton Law Courts"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664241558/consult_pinto/mocton2_aacsph.jpg" 
                    className="sliderimage" alt="PINTO provided construction administration services for Moncton Law Courts"/>
                </AliceCarousel>
                <div className="text">
                <p>
                    PINTO provided construction administration services for a renovation to the existing Law Courts building in Moncton, NB.  The following services were included: construction site review, steel shop drawing review, and contractor progress claim review. The project was completed in 2010.
                </p>
                </div>
            </div>
        </section>
    );
}

export default Moncton;