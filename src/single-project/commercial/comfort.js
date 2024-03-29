import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Comfort = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/commercial"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Comfort Inn
                </h1>
                <h2>
                    Halifax, Nova Scotia, Canada
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664220331/consult_pinto/comfort_tjffdo.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Comfort Inn"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664220330/consult_pinto/comfort2_agppmw.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Comfort Inn"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for a four storey hotel in the Bayers Lake business district.  The following elements were included in the design:  reinforced concrete foundations, reinforced concrete columns & shearwalls, suspended concrete podium slab, three levels of timber floor & wall framing, and a layout of pre-engineered timber roof framing.  Project completed in 2010.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Comfort;