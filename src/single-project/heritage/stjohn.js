import React, {useEffect} from "react";
import "../single-proj.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const StJohn = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="single-project">
            <div className="overlay"></div>
            <a href="/projects/heritage"><i class="fas fa-angle-left"></i></a>
            <div className="title">
                <h1>
                    St John’s Anglican Church Restoration
                </h1>
                <h2>
                    Structural Restoration of Historic Heavy Timber Church in Lunenburg, Nova Scotia
                </h2>
            </div>
            <div className="carousel">
                <AliceCarousel infinite={true} disableButtonsControls={true} buttonsDisabled={true} autoPlay={true} autoPlayInterval="4000">
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664240840/consult_pinto/SJChurch_fzx52h.jpg" 
                    className="sliderimage" alt="PINTO was engaged to provide structural design and construction administration services for St John’s Anglican Church Restoration"/>
                    <img src="https://res.cloudinary.com/mariah07/image/upload/v1664240840/consult_pinto/stjohn2_foudvh.jpg" 
                    className="sliderimage" alt="PINTO was engaged to provide structural design and construction administration services for St John’s Anglican Church Restoration"/>
                </AliceCarousel>
                <div className="text">
                    <p>
                    Fire destroyed this historic church in 2001 and PINTO was engaged to provide structural design and construction administration services in restoring this treasured heavy timber structure near downtown Lunenburg, Nova Scotia. Completed in 2002, the project included design and detail of heavy timber floor, roof, and tower framing as well as extensive site investigation.  Special care was required to design the connections as close as possible to the original while, at the same time, bringing the structure up to the standards of the latest building codes.</p>
                </div>
            </div>
        </section>
    );
}

export default StJohn;