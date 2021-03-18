import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./con-gallery/convoy.jpg";

const Convoy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/residential"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Convoy Quay Gardens
                </h1>
                <h2>
                    Twin Nine-Story Multi-Unit Residential Complexes in Bedford, NS
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage" alt="PINTO provided structural design and construction administration services for Convoy Quay Gardens"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for a nine-storey, two tower residential complex overlooking the Bedford Basin as part of the Bedford Waterfront Redevelopment Project.  The following elements were included in the design: reinforced concrete foundations, reinforced concrete columns & shearwalls, and 260,000 square feet of concrete floor & roof slabs including underground parking. The project was completed in 2001.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Convoy;