import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./gran-gallery/grand.jpg";

const Grand = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/residential"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Grand Haven Heights
                </h1>
                <h2>
                    Multi-Unit Residential Building in Halifax, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage" alt="PINTO provided structural design and construction administration services for Grand Haven Heights"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for the first of several planned 12-story residential complexes overlooking the fast-growing Washmill Lake neighborhood.  The following elements were included in the design: reinforced concrete foundations, reinforced concrete columns & shearwalls, and a whopping 347,000 square feet of concrete floor & roof slabs including underground parking. The project was completed in 2014.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Grand;