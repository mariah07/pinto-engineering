import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Glen = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/commercial"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Glenbourne Plaza
                </h1>
                <h2>
                    Structural Steel Commercial Complex in Halifax, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664220509/consult_pinto/glen_masdnz.jpg" className="sliderimage" alt="PINTO provided structural design and construction administration services for Glenbourne Plaza"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664220508/consult_pinto/glen2_ldehqm.jpg" className="sliderimage" alt="PINTO provided structural design and construction administration services for Glenbourne Plaza"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                        PINTO provided structural design and construction administration services for a two-level commercial complex in the Bayers Lake business district.  The following elements were included in the design:  reinforced concrete foundations, structural steel floor & wall systems, and layout of pre-engineered timber roof system. The project was completed in 2003.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Glen;