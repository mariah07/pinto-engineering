import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./uni-gallery/uniacke.jpg";

const Uniacke = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/heritage"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Uniacke Estate Museum
                </h1>
                <h2>
                    Structural Remediation of Heritage Building in Mount Uniacke, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage" alt="PINTO provided structural design and construction administration services for Uniacke Estate Museum"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for a renovation to the entrance balcony and roof canopy of the picturesque Uniacke Estate Museum.  The canopy required a structural investigation to determine the extent of degradation of the heavy timber structure.  Special care is required in heritage properties to include as much original material as possible in the design solution.  New elements included replacement of steel columns and reinforcement of existing timber beams and concrete pilasters. The project was completed in 2010.</p>
                </div>
            </div>
        </section>
    );
}

export default Uniacke;