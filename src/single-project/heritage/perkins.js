import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Perkins = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/heritage"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Perkins House Museum
                </h1>
                <h2>
                    Structural Investigation of Heavy Timber Heritage Museum in Liverpool, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664240817/consult_pinto/perkins_vbkf5s.jpg"
                    className="sliderimage" alt="PINTO provided structural investigation services for Perkins House Museum"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural investigation services for a report on the condition of the Perkins House Museum in Liverpool, Nova Scotia. Constructed in 1766, it is among the oldest structures in the province and therefore, required particular care during the site investigation component of the project. Included were a structural condition assessment including a detailed report as well as recommendations for repairs that minimized the impact to the existing heritage structure. The project was completed in 2014.</p>
                </div>
            </div>
        </section>
    );
}

export default Perkins;