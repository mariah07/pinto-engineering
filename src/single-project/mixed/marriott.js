import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./marr-gallery/marriott.jpg";
import image2 from "./marr-gallery/marriott2.jpg";

const Marriott = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/mixed-use-development"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Marriott Residence Inn
                </h1>
                <h2>
                    Seven Story Hotel and Retail Complex in Downtown Halifax, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src={image1} className="sliderimage" alt="PINTO provided structural design and construction administration services for Marriott Residence Inn"/>
                    <img src={image2} className="sliderimage" alt="PINTO provided structural design and construction administration services for Marriott Residence Inn"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for this seven story hotel and retail complex located in downtown Halifax, Nova Scotia. PINTO worked closely with the Architect and Contractor to navigate the challenging existing sub-surface conditions that were to be incorporated into the structural design solution. The following elements were included in the design: reinforced concrete foundations, reinforced concrete beams, columns, & shearwalls, and 100,000 square feet of concrete floor & roof slabs including two levels of underground parking. The project was completed in 2004.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Marriott;