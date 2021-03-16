import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./mor-gallery/morris.jpg";
import image2 from "./mor-gallery/morris2.jpg";
import image3 from "./mor-gallery/morris3.jpg";

const Morris = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/heritage"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    5247 Morris Street Renovation
                </h1>
                <h2>
                    Structural Renovation to Heritage Building in Halifax, NS
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
                    PINTO provided structural design and construction administration services for a renovation to a former residence turned office building in Halifax's historic south end.  A structural investigation was required to determine the existing load path prior to removing load-bearing walls with the goal of maintaining as much of the original framing material as possible.  New elements included timber beams and columns to support existing floor framing as well as additional reinforcement of existing floor structure. The project was completed in 2011.</p>
                </div>
            </div>
        </section>
    );
}

export default Morris;