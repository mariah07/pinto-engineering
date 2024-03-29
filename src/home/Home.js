import React, {useEffect, useRef} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './Home.css';
import building from "../img/building.jpg"
import engineer from "../img/engineer.jpg"
import architect from "../img/architect.jpg"
import { Helmet } from "react-helmet";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        Aos.init({duration: 1500, disable: 'mobile'});
    }, []);

    const scroll = useRef(null);
    const executeScroll = () => scroll.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
    return (
        <section className="home-section">
            <Helmet>
                <title>Pinto Engineering</title>
                <meta name="description" content="PINTO Engineering Limited is an established structural engineering consulting practice having served clients across government, public, and private sectors." />
                <meta name="robots" content="index,follow"/>
            </Helmet>
            <div className="overlay"></div>
            <div className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-text">
                    <h1>We provide 
                    State-of-the-art technology, 
                    highly personalized services, 
                    innovative and cost effective solutions</h1>
                    <div className="button-area">
                        <a href="/projects" id="project-button">View Our Projects</a>
                        <button id="services-button" onClick={executeScroll}>View Services</button>
                    </div>
                    <span><button onClick={executeScroll}>scroll<span className="border-pulse"></span></button>
                    </span>
                </div>
            </div>
            <div className="between">
                <div className="services-items">
                    <div className="anchor" ref={scroll}></div>
                    <div className="services-desc" data-aos="fade-in">
                        <h2>Engineering Design - Buildings, Civil & Marine, Remediation & Restoration</h2>
                        <h4>Our design services include reinforced concrete foundations (deep and shallow), reinforced concrete buildings, concrete retaining walls & tunnel structures, structural steel framed buildings, light-gauge steel, tilt-up concrete construction including composite panel design, wood framed construction including panelized projects, heavy timber construction, and temporary shoring.
                        We have a broad range of experience in new construction as well as restoration & remediation of existing structures.
                        PINTO offers our clients comprehensive, on-site investigation services to accompany restoration and remediation projects in order to minimize costly surprises during the construction process.
                        </h4>
                    </div>
                    <img src={building} alt="" loading="eager" data-aos="fade-left"/>
                </div>
                <div className="services-items">
                    <img src={engineer} alt="" loading="eager" data-aos="fade-right"/>
                    <div className="services-desc" data-aos="fade-in">
                        <h2>Investigation & Reports - Mediation and Arbitration, Feasibility Studies, Condition Assessment</h2>
                        <h4>PINTO provides mediation and arbitration services to assist parties in finding mutually agreeable solutions to project disputes.
                        We also offers technical reporting services to determine the feasibility of projects and assist clients with their project decision-making.
                        As part of our technical reporting services, PINTO provides comprehensive condition assessment reports.
                        </h4>
                    </div>
                </div>
                <div className="services-items">
                    <div className="services-desc" data-aos="fade-in">
                        <h2>Project Management - Construction & Shop Drawing Review, Construction Administration, Project Coordination</h2>
                        <h4>We offer a variety of construction administration services such as budget preparation, tender administration & consultation, RFI & change order coordination.
                        PINTO works with all stakeholders to effectively resolve issues as construction progresses on site.
                        </h4>
                    </div>
                    <img src={architect} alt="" loading="eager" data-aos="fade-left"/>
                </div>
            </div>
            <div className="scroll-section">
                <div className="scrolltop">
                    <h2>Get To Know Our Work</h2>
                </div>
                <div className="scroll-bottom">
                    <div className="animation">
                        <div id="panel1" className="panel panel-text">
                            <div className="text"><h3>ISL Digital Marketing</h3>
                            <p>PINTO Engineering provided structural design and construction administration services for a three-storey office building near the downtown Halifax business district. The limited downtown footprint provided a challenge to coordinate the tilt panels with the interior structural steel since the temporary panel bracing needed to remain in place while the floors were constructed around them. The following elements were included in the design:  reinforced concrete foundations, structural steel floor framing, structural steel roof framing, reinforced concrete tilt-up panels including lifting and bracing design.</p></div>
                            <span class="right" id="right-one"></span>
                            <span class="bottom" id="bottom-one"></span>
                        </div>
                        <div id="panel2" className="panel panel-image">
                        </div>
                        <div id="panel3" className="panel panel-text">
                            <div className="text"><h3>Armoury Square</h3>
                            <p>PINTO provided structural design and construction administration services for a 11-storey residential complex overlooking the historic Halifax Common.  The following elements were included in the design: reinforced concrete foundations, reinforced concrete columns and shearwalls, and 236,000 square feet of concrete floor and roof slabs including underground parking. </p></div>
                            <span class="right" id="right-two"></span>
                            <span class="bottom" id="bottom-two"></span>
                        </div>
                    </div>
                    <div className="animation">
                        <div id="panel4" className="panel panel-image">
                        </div>
                        <div id="panel5" className="panel panel-text">
                            <div className="text"><h3>Bedford Baptist Church</h3>
                            <p>PINTO provided structural design and construction administration services for an extension to the Bedford Baptist Church in Bedford, NS. The following elements were included in the design: reinforced concrete foundations, structural steel roof framing, timber roof framing, reinforced concrete tilt-up panels including lifting and bracing design. PINTO received 2004 Tilt-up Achievement Award from the Tilt-up Concrete Association as an outstanding example of tilt-up concrete construction.</p></div>
                            <span class="left"></span>
                            <span class="top"></span>
                        </div>
                        <div id="panel6" className="panel panel-image">
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-panel">
            </div>
            <div className="video-section">
                <p>PINTO Engineering is proud to have worked on the Big Boat Shed Revitalization Project</p>
            <iframe width="50%" height="450"
            src="https://www.youtube.com/embed/FNn2xue0Wb0">
            </iframe>
            </div>
            <div className="end-page">
                <div className="questions">
                    <h2>Have Questions?</h2>
                    <a href="/contact">Send Us a Message</a>
                </div>
            </div>
        </section>
    );
}
export default Home;