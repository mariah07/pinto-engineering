import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const MaryAnn = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/mixed-use-development"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Mary Ann Development
                </h1>
                <h2>
                    New Multi-Unit Residential and Retail Complex in Downtown Halifax, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664241997/consult_pinto/mary-ann_orwayo.jpg" 
                    className="sliderimage" alt="PINTO is providing structural design services for the Mary Ann Development"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO is pleased to be providing structural design services for the Mary Ann Development located in the heart of the downtown Halifax shopping district near Spring Garden Road.  This exciting new project is a combination of commercial shopping space at street level and residential units on the upper levels. Construction is currently underway and scheduled for completion in 2016.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default MaryAnn;