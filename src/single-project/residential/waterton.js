import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./wat-gallery/waterton.jpg";
import image2 from "./wat-gallery/waterton2.jpg";

const Waterton = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/residential"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    The Waterton
                </h1>
                <h2>
                    12 Story Multi-Unit Residential Complex in Halifax, NS
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage" alt="PINTO provided structural design and construction administration services for The Waterton"/>
                    <img src={image2} className="sliderimage" alt="PINTO provided structural design and construction administration services for The Waterton"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for a 12-storey residential complex overlooking Chocolate Lake in Halifax, NS.  The following elements were included in the design: reinforced concrete foundations, reinforced concrete columns & shearwalls, and 680,000 square feet of concrete floor & roof slabs including underground parking. The project was completed in 2007.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Waterton;