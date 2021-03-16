import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./ay-gallery/Aylesford_Church.jpg";

const Ayles = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/institutional"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Aylesford Baptist Church
                </h1>
                <h2>
                    Tilt-up Concrete Replacement Church Facility in Aylesford, NS
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage"/>
                    <img src={image1} className="sliderimage" />
                    <img src={image1} className="sliderimage"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design services for a replacement to the Aylesford Baptist Church in Aylesford, Nova Scotia as part of a contractor led design-build team. In addition to the challenging shapes, the large V-shaped panel behind the main entrance was designed and detailed to be supported on each side panel on the front facade. The high temporary brace layout, in turn, required careful conflict coordination with the structural steel girder beams and intermediate wood roof trusses. The following elements were included in the design: reinforced concrete foundations, structural steel & pre-engineered timber roof framing, load-bearing reinforced concrete tilt-up panels including lifting and bracing design. The structural portion of the project was completed in 2011.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Ayles;