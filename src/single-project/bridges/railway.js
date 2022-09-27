import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Railway = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/bridges"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Little Bras D’or Railway Bridge Replacement
                </h1>
                <h2>
                    Highway 105, Cape Breton County, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664216015/consult_pinto/rbridge_tcovu7.jpg" 
                    className="sliderimage" alt="PINTO provided structural design services for Little Bras D’or Railway Bridge Replacement"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664216015/consult_pinto/rbridge2_tm3be9.jpg" 
                    className="sliderimage" alt="PINTO provided structural design services for Little Bras D’or Railway Bridge Replacement"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664216015/consult_pinto/rbridge3_pf0qy5.jpg" 
                    className="sliderimage" alt="PINTO provided structural design services for Little Bras D’or Railway Bridge Replacement"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664216014/consult_pinto/rbridge4_ckom0o.jpg" 
                    className="sliderimage" alt="PINTO provided structural design services for Little Bras D’or Railway Bridge Replacement"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design services for a reinforced concrete replacement bridge (CB076) on Highway 105.  The following elements were included in the design:  reinforced concrete abutments, reinforced concrete bridge girders, and reinforced concrete bridge deck.  Project completed in 2011.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Railway;