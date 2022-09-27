import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Morris = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/heritage"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    5247 Morris Street Renovation
                </h1>
                <h2>
                    Structural Renovation to Heritage Building in Halifax, NS
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664240808/consult_pinto/morris_gjpzoq.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for 5247 Morris Street"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664240808/consult_pinto/morris3_v5lzvx.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for 5247 Morris Street"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664240808/consult_pinto/morris2_wvrcgx.jpg"
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for 5247 Morris Street"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for a renovation to a former residence turned office building in Halifax's historic south end.  A structural investigation was required to determine the existing load path prior to removing load-bearing walls with the goal of maintaining as much of the original framing material as possible.  New elements included timber beams and columns to support existing floor framing as well as additional reinforcement of existing floor structure. The project was completed in 2011.</p>
                </div>
            </div>
        </section>
    );
}

export default Morris;