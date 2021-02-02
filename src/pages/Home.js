import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import '../css/App.css';
import logo from '../img/colored-smoke.png'; 

const Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <section className="home-section">
            <div className="hero">
                <h1 data-aos="fade-right" className="transition">Collaborate Effectively, and Beautifully.</h1>
                <p className="transition">DueTo provides an effective and joyful way to manage your creative projects</p>
                <a className="transition">Click</a>
            </div>
            <div className="between">
                <img data-aos="fade-up" src={logo} />
            </div>
            <div className="animation">
                <div className="sticky">

                </div>
                <div className="sticky">

                </div>
                <div className="sticky">

                </div>
            </div>
        </section>
    )
}
export default Home;