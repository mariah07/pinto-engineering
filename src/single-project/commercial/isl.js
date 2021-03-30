import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./isl-gallery/isl.jpg";
import image2 from "./isl-gallery/ISL2.jpg";

const ISL = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/commercial"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    ISL Digital Marketing
                </h1>
                <h2>
                    Tilt-up Concrete and Structural Steel Office Building in Halifax, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage" alt="PINTO provided structural design and construction administration services for ISL Digital Marketing"/>
                    <img src={image2} className="sliderimage" alt="PINTO provided structural design and construction administration services for ISL Digital Marketing"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                        PINTO provided structural design and construction administration services for a three-storey office building near the downtown Halifax business district. The limited downtown footprint provided a challenge to coordinate the tilt panels with the interior structural steel since the temporary panel bracing needed to remain in place while the floors were constructed around them. The following elements were included in the design:  reinforced concrete foundations, structural steel floor framing, structural steel roof framing, reinforced concrete tilt-up panels including lifting and bracing design. The project was completed in 2011.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ISL;