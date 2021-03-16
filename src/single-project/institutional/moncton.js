import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./mon-gallery/mocton.jpg";
import image2 from "./mon-gallery/mocton2.jpg";
import image3 from "./mon-gallery/mocton3.jpg";

const Moncton = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
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
                    <img src={image1} className="sliderimage"/>
                    <img src={image2} className="sliderimage" />
                    <img src={image3} className="sliderimage"/>
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