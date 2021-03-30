import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./inv-gallery/inverary_manor.jpg";

const Inverary = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/health"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Inverary Manor Nursing Home
                </h1>
                <h2>
                    Expansion of Continuing Care Facility in Inverness, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage" alt="PINTO provided structural design and construction administration services for Inverary Manor Nursing Home"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for this distinctive two-storey replacement continuing care facility plus an expansion linking the existing Inverness Consolidated Memorial Hospital with the new continuing care facility.  The following elements were included in the design: reinforced concrete foundations, reinforced concrete columns, beams, & shearwalls, 90,000 square feet of reinforced concrete floor & roof slabs, structural steel canopies, and insulated concrete form (ICF) exterior walls. The project was completed in 2012.</p>
                </div>
            </div>
        </section>
    );
}

export default Inverary;