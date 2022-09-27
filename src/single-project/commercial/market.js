import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

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
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664220722/consult_pinto/market_cac4z1.jpg" 
                    className="sliderimage" alt="PINTO provided services for Market Square"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664220723/consult_pinto/market3_jxtxft.jpg" 
                    className="sliderimage" alt="PINTO provided services for Market Square"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664220723/consult_pinto/market2_nor2x2.jpg" 
                    className="sliderimage" alt="PINTO provided services for Market Square"/>
                </AliceCarousel>
                <div className="text">
                </div>
            </div>
        </section>
    );
}

export default Market;