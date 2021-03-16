import React, {useEffect} from "react";
import "./about.css";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="about">
            <div className="about-header">
                <h1>About PINTO Engineering</h1>
                <p></p>
            </div>
            <div className="main-content">
                <div className="text">PINTO Engineering Limited is an established structural engineering consulting practice having served national and international clients across government, public, and private sectors since 1987. Over the years we have built significant confidence in our clients who have come to expect that PINTO will outperform benchmarks and deliver value on every project. Through the use of finite element design methods as well as BIM modeling, PINTO has become known in the industry for economical solutions. Our dedication to providing highly personalized attention to our clients is supported by our experienced and highly qualified team whose combined talents gives us the necessary expertise in every facet of structural consulting services.
                </div>
                <div className="text">
                PINTO has many project successes in the commercial, healthcare, residential, transportation, marine, and institutional sectors including several LEED certified projects. One of our recent project successes, “The Trillium”, (a 20-story residential, commercial, and retail complex and winner of the 2010 Nova Scotia Lieutenant Governor General’s award for Excellence in Engineering) is a testament to our team’s ability to work together to be innovative, tackle challenging issues, and overcome obstacles.
                </div>
                <div className="text">
                To show our commitment to providing quality services to our valued clients and enshrining our core values of customer support, employee development, project team communications, and quality peer review, we are well on our way to becoming an ISO 9001 registered company so stay tuned in early 2016.
                </div>
            </div>
        </section>
    )
}

export default About;