import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Lawrence = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
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
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664241984/consult_pinto/St._Lawrence_bcxwfh.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Saint Lawrence Place"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664241984/consult_pinto/St._Lawrence2_p19bic.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Saint Lawrence Place"/>
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