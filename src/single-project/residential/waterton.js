import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Waterton = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/residential"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    The Waterton
                </h1>
                <h2>
                    12 Story Multi-Unit Residential Complex in Halifax, NS
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664242617/consult_pinto/waterton2_uh8yod.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for The Waterton"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664242616/consult_pinto/waterton_a74fiu.jpg" 
                    className="sliderimage" alt="PINTO provided structural design and construction administration services for The Waterton"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    PINTO provided structural design and construction administration services for a 12-storey residential complex overlooking Chocolate Lake in Halifax, NS.  The following elements were included in the design: reinforced concrete foundations, reinforced concrete columns & shearwalls, and 680,000 square feet of concrete floor & roof slabs including underground parking. The project was completed in 2007.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Waterton;