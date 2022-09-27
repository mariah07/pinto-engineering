import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Woodside = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
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
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664244128/consult_pinto/woodside_xsyc1r.jpg" 
                    className="sliderimage" alt="PINTO provided design and construction administration services for Woodside Ferry Terminal Pontoon"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664244128/consult_pinto/woodside2_hknxgo.jpg" 
                    className="sliderimage" alt="PINTO provided design and construction administration services for Woodside Ferry Terminal Pontoon"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664244128/consult_pinto/woodside3_ssjsdr.jpg" 
                    className="sliderimage" alt="PINTO provided design and construction administration services for Woodside Ferry Terminal Pontoon"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664244128/consult_pinto/woodside4_dsklvw.jpg" 
                    className="sliderimage" alt="PINTO provided design and construction administration services for Woodside Ferry Terminal Pontoon"/>
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