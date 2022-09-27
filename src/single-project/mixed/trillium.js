import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Trillium = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/mixed-use-development"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    The Trillium
                </h1>
                <h2>
                    20 Story, Mixed Residential and Commercial Complex in Downtown Halifax, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664242002/consult_pinto/trillium_jking7.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for The Trillium"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664242002/consult_pinto/trillium2_rm8f60.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for The Trillium"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for this 20-storey residential, commercial, and retail complex in the heart of downtown Halifax.  The following elements were included in the design: reinforced concrete foundations including raft footing, reinforced concrete beams, columns, & shearwalls,  281,000 square feet of concrete floor & roof slabs including three levels of underground parking, structural steel penthouse, and structural steel canopies.  The Trillium won the 2010 Nova Scotia Lieutenant Governor General's Award for Engineering. The project was completed in 2012.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Trillium;