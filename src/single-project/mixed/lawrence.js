import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./law-gallery/St._Lawrence.jpg";
import image2 from "./law-gallery/St._Lawrence2.jpg";

const Lawrence = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <a href="/projects/mixed-use-development"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Saint Lawrence Place
                </h1>
                <h2>
                    Multi-Unit Commercial and Residential Complex in Halifax, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage" alt="PINTO provided structural design and construction administration services for Saint Lawrence Place"/>
                    <img src={image2} className="sliderimage" alt="PINTO provided structural design and construction administration services for Saint Lawrence Place"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for this 5 story commercial plus 14 story residential complex as part of a revitalization development in the fast-growing Fairview neighbourhood in Halifax, Nova Scotia.  The following elements were included in the design: reinforced concrete foundations, columns, floor & roof slabs, shearwalls, as well as structural steel canopies. The project was completed in 2013.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Lawrence;