import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./wed-gallery/wedgewood.jpg";
import image2 from "./wed-gallery/wedgewood2.jpg";
import image3 from "./wed-gallery/wedgewood3.jpg";
import image4 from "./wed-gallery/wedgewood4.jpg";

const Wedgewood = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/residential"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Wedgewood Condominium
                </h1>
                <h2>
                    Six Story, Multi-Unit Condominium Complex in Halifax, NS
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage" alt="PINTO provided structural design and construction administration services for Wedgewood Condominium"/>
                    <img src={image2} className="sliderimage" alt="PINTO provided structural design and construction administration services for Wedgewood Condominium"/>
                    <img src={image3} className="sliderimage" alt="PINTO provided structural design and construction administration services for Wedgewood Condominium"/>
                    <img src={image4} className="sliderimage" alt="PINTO provided structural design and construction administration services for Wedgewood Condominium"/>
                </AliceCarousel>
                <div className="text">
                <p>
                PINTO provided structural design and construction administration services for a six-level, 80 unit residential complex on Parkland Drive in Halifax.  The following elements were included in the design: reinforced concrete foundations, reinforced concrete columns & shearwalls, and 220,000 square feet of concrete floor & roof slabs including underground parking. The project was completed in 2003.
                </p>
            </div>
            </div>
        </section>
    );
}

export default Wedgewood;