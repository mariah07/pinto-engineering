import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import '../css/App.css';
import Church from '../img/church.jpg'; 
import ISL from '../img/ISL_Building_Pic.jpg';
import arm from '../img/armourysquare-bighero_960_411_c1.jpg';

const Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className="home-section">
            <div className="hero">
                <h1 data-aos="fade-up">Quality, Safety and Design</h1>
                <p data-aos="fade-up">State-of-the-art technology and highly personalized services enable us to provide our clients with innovative and cost effective solutions. </p>
                <a data-aos="fade-up" href="/services">Services</a>
            </div>
            <div className="between">
                <h2 data-aos="fade-in">Who We Are</h2>
                <p data-aos="fade-in">PINTO has many project successes in the commercial, healthcare, residential, transportation, marine, and institutional sectors including several LEED certified projects. One of our recent project successes, “The Trillium”, (a 20-story residential, commercial, and retail complex and winner of the 2010 Nova Scotia Lieutenant Governor General’s award for Excellence in Engineering) is a testament to our team’s ability to work together to be innovative, tackle challenging issues, and overcome obstacles.</p>
                <a data-aos="fade-in" href="/about">Learn More</a>
            </div>
            <div>
                <div className="scrolltop">
                    <h2>Get To Know Our Work</h2>
                    <a  href="/projects">Projects</a>
                </div>
                <div className="animation">
                    <div id="panel1" className="panel">
                        <div className="text"><h3>ISL Digital Marketing</h3>
                        <p>PINTO Engineering provided structural design and construction administration services for a three-storey office building near the downtown Halifax business district. The limited downtown footprint provided a challenge to coordinate the tilt panels with the interior structural steel since the temporary panel bracing needed to remain in place while the floors were constructed around them. The following elements were included in the design:  reinforced concrete foundations, structural steel floor framing, structural steel roof framing, reinforced concrete tilt-up panels including lifting and bracing design.</p></div>
                        <div className="image"><img src={ISL}/></div>
                    </div>
                    <div id="panel2" className="panel">
                        <div className="image"><img src={Church}/></div>
                        <div className="text"><h3>Bedford Baptist Church</h3>
                        <p>PINTO provided structural design and construction administration services for an extension to the Bedford Baptist Church in Bedford, NS. The following elements were included in the design: reinforced concrete foundations, structural steel roof framing, timber roof framing, reinforced concrete tilt-up panels including lifting and bracing design. PINTO received 2004 Tilt-up Achievement Award from the Tilt-up Concrete Association as an outstanding example of tilt-up concrete construction.</p></div>
                    </div>
                    <div id="panel3" className="panel">
                        <div className="text"><h3>Armoury Square</h3>
                        <p>PINTO provided structural design and construction administration services for a 11-storey residential complex overlooking the historic Halifax Common.  The following elements were included in the design: reinforced concrete foundations, reinforced concrete columns and shearwalls, and 236,000 square feet of concrete floor and roof slabs including underground parking. </p></div>
                        <div className="image"><img src={arm}/></div>
                    </div>
                </div>
            </div>
            <div className="bottom">
            </div>
            <div className="quote">
                <div className="bubble"  data-aos="zoom-in-left">
                    <i class="fas fa-quote-left"></i>
                    <p>We have and continue to enjoy and reap the benefits of a good business relationship with PINTO Engineering. We highly recommend your team for any aspect of structural design or consulting.  We find you reliable, efficient and extremely knowledgeable. Moreover, your expertise in mediation and arbitration adds a very important dimension to your design, and subsequently has benefited our projects.
                    <br /><br />
                    Thank you for your innovation, dedication and commitment over the years. We wish you continuous success, and look forward for a long and prosperous relationship.</p>
                </div>
                <div className="author">
                    <h4>Wadih Fares, P.Eng., <a href="https://www.wmfares.com/" target="_blank" rel="noreferrer nofollow noopener">W. M. Fares and Associates Incorporated</a></h4>
                </div>
            </div>
        </section>
    )
}
export default Home;