import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./wo-gallery/woodside.jpg";
import image2 from "./wo-gallery/woodside2.jpg";
import image3 from "./wo-gallery/woodside3.jpg";
import image4 from "./wo-gallery/woodside4.jpg";

const Woodside = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/wharves"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Woodside Ferry Terminal Pontoon
                </h1>
                <h2>
                    Concrete Replacement Pontoon in Dartmouth, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage" alt="PINTO provided design and construction administration services for Woodside Ferry Terminal Pontoon"/>
                    <img src={image2} className="sliderimage" alt="PINTO provided design and construction administration services for Woodside Ferry Terminal Pontoon"/>
                    <img src={image3} className="sliderimage" alt="PINTO provided design and construction administration services for Woodside Ferry Terminal Pontoon"/>
                    <img src={image4} className="sliderimage" alt="PINTO provided design and construction administration services for Woodside Ferry Terminal Pontoon"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO lead the design portion of the team for the $3.2 million design-build project to replace the 27-year-old pontoon at the Woodside Ferry Terminal in Dartmouth, Nova Scotia. The team was engaged early in 2014, with construction on this important piece of public and civic infrastructure completed in December, the same year. PINTO provided design and construction administration services including reinforced concrete design and structural steel design. 
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Woodside;