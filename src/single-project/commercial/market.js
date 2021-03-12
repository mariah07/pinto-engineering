import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./market-gallery/market.jpg";

const Market = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
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
                    <img src={image1} className="sliderimage"/>
                    <img src={image1} className="sliderimage" />
                    <img src={image1} className="sliderimage"/>
                </AliceCarousel>
            </div>
            <div className="text">
                
            </div>
            <div className="title">
                
            </div>
        </section>
    );
}

export default Market;