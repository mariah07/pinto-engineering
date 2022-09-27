import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Margaret = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/bridges"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Princess Margaret Bridge
                </h1>
                <h2>
                    Fredericton, New Brunswick, Canada
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664215989/consult_pinto/mbridge_l1p6jt.jpg" 
                    className="sliderimage" alt="PINTO was engaged by SNC-Lavalin to act as peer reviewer for the design engineers on the refurbishment of the Princess Margaret Bridge"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664215989/consult_pinto/mbridge2_xtspei.jpg" 
                    className="sliderimage" alt="PINTO was engaged by SNC-Lavalin to act as peer reviewer for the design engineers on the refurbishment of the Princess Margaret Bridge"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664215988/consult_pinto/mbridge1_y7yags.jpg" 
                    className="sliderimage" alt="PINTO was engaged by SNC-Lavalin to act as peer reviewer for the design engineers on the refurbishment of the Princess Margaret Bridge"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664215988/consult_pinto/mbridge3_audibn.jpg" 
                    className="sliderimage" alt="PINTO was engaged by SNC-Lavalin to act as peer reviewer for the design engineers on the refurbishment of the Princess Margaret Bridge"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                        PINTO was engaged by SNC-Lavalin to act as peer reviewer for the design engineers on the refurbishment of the Princess Margaret Bridge in Fredericton, NB.  PINTO's role was to review and sign-off on all provided structural design calculations involved with the concrete piers, structural steel trusses, structural steel girders, and concrete bridge decks.  Project completed in 2011.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Margaret;