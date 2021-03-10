import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import '../css/App.css';
import logo from '../img/colored-smoke.png'; 

const Home = () => {
    const handleClick = () => {
        alert("Click Successful!");
      };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <section className="home-section">
            <div className="hero">
                <h1 data-aos="fade-right">Collaborate Effectively, and Beautifully.</h1>
                <p data-aos="fade-right">DueTo provides an effective and joyful way to manage your creative projects</p>
                <a href="/services">Services</a>
                {/* <button onClick={handleClick} id="ok">temp</button> */}
            </div>
            <div className="between">
                <img data-aos="fade-up" src={logo} />
            </div>
            <div>
                <div className="scrolltop">
                    <h3>Benefits and features</h3>
                    <h1> Great Sum of parts. Sign up Now</h1>
                    <a href="/services">About</a>
                </div>
                <div className="animation">
                    <div id="panel1" className="panel">
                        <h1>Simplifying the Complex </h1>
                        <p>This is content that describes the website</p>
                    </div>
                    <div id="panel2" className="panel">
                        <h1>Overlay</h1>
                    </div>
                    <div id="panel3" className="panel">

                    </div>
                </div>
            </div>
            <div className="bottom">

            </div>
        </section>
    )
}
export default Home;