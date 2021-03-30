import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./duck-gallery/duckworth.jpg";
import image2 from "./duck-gallery/duckworth2.jpg";
import image3 from "./duck-gallery/duckworth3.jpg";

const Duckworth = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/mixed-use-development"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Duckworth Street Metropark
                </h1>
                <h2>
                    Concrete Parkade in Downtown St. John's, Newfoundland
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage" alt="PINTO provided structural design services for Duckworth Street Metropark"/>
                    <img src={image2} className="sliderimage" alt="PINTO provided structural design services for Duckworth Street Metropark"/>
                    <img src={image3} className="sliderimage" alt="PINTO provided structural design services for Duckworth Street Metropark"/>
                </AliceCarousel>
                <div className="text">
                <p>
                PINTO provided structural design services for a 10-story reinforced concrete building located in downtown St. John's, Newfoundland that includes five stories of parking space and five-stories of condominiums. Included in our services were reinforced concrete foundations, slabs, columns, and shearwalls. The project was completed in 2013.</p>
                </div>
            </div>
        </section>
    );
}

export default Duckworth;