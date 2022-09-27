import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const StGeorge = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/heritage"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    St. Georges Anglican Church Restoration
                </h1>
                <h2>
                    Structural Heavy Timber Restoration of Historic Church in Halifax, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664240828/consult_pinto/st_george_zpv8jn.jpg" 
                    className="sliderimage" alt="PINTO was engaged to provide structural design and construction administration services for St. Georges Anglican Church Restoration"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664240828/consult_pinto/george3_vil4ar.jpg" 
                    className="sliderimage" alt="PINTO was engaged to provide structural design and construction administration services for St. Georges Anglican Church Restoration"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664240828/consult_pinto/george5_v4nqdp.jpg" 
                    className="sliderimage" alt="PINTO was engaged to provide structural design and construction administration services for St. Georges Anglican Church Restoration"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664240827/consult_pinto/george4_n0dg2v.jpg" 
                    className="sliderimage" alt="PINTO was engaged to provide structural design and construction administration services for St. Georges Anglican Church Restoration"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    Fire destroyed almost half of this historic church in 1994 and PINTO was engaged to provide structural design and construction administration services in restoring this unique heavy timber structure near downtown Halifax that includes a circular palladian roof design. Completed in 2005, the project included design and detail of heavy timber floor, roof, and tower framing as well as extensive site investigation.  Special care was required to design the connections as close as possible to the original while, at the same time, bringing the structure up to the standards of the latest building codes.</p>
                </div>
            </div>
        </section>
    );
}

export default StGeorge;