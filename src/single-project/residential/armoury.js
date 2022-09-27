import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Armoury = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/residential"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    Armoury Square
                </h1>
                <h2>
                    11 Story Multi-Unit Residential Complex in downtown Halifax, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664242595/consult_pinto/armoury_iv9npp.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Armoury Square"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664242595/consult_pinto/armoury2_fe9zca.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Armoury Square"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664242595/consult_pinto/armoury3_ufw4gr.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for Armoury Square"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for a 11-storey residential complex overlooking the historic Halifax Common.  The following elements were included in the design: reinforced concrete foundations, reinforced concrete columns & shearwalls, and 236,000 square feet of concrete floor & roof slabs including underground parking. The project was completed in 2007.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Armoury;