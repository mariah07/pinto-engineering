import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./market-gallery/market.jpg";
import image2 from "./market-gallery/market2.jpg";
import image3 from "./market-gallery/market3.jpg";

const Market = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/commercial"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Market Square
                </h1>
                <h2>
                    Saint John, New Brunswick, Canada
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage" alt="PINTO provided services for Market Square"/>
                    <img src={image2} className="sliderimage" alt="PINTO provided services for Market Square"/>
                    <img src={image3} className="sliderimage" alt="PINTO provided services for Market Square"/>
                </AliceCarousel>
                <div className="text">
                </div>
            </div>
        </section>
    );
}

export default Market;