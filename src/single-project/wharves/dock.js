import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Dock = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/wharves"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    National Gypsum Dock
                </h1>
                <h2>
                    Remediation of Dock Structure in Dartmouth, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664244121/consult_pinto/dock_tam7sh.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for National Gypsum Dock"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664244122/consult_pinto/dock2_w5tojj.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for National Gypsum Dock"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664244121/consult_pinto/dock3_z9vxrb.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for National Gypsum Dock"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                        PINTO provided structural design and construction administration services for the refurbishment of the loading dock at National Gypsum (Canada) Ltd. in Dartmouth, NS.  The following services were provided beginning in 2005:  extensive site investigation & annual condition assessment reports, design of new reinforced concrete bridge beams & bridge decks, design of structural steel support for gypsum conveyor system, assessment & recommendations for sheet pile refurbishment, as well as multiple temporary repairs to reinforced concrete corbels & columns.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Dock;