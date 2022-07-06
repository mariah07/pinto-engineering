import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./about.css";
import Tril from '../pages/trill.jpg'; 
import Church from '../img/church.jpg'; 
import tech from "./tech-logo.png";
import peo from "./peo-logo.png";
import ap from "./apega-logo.png";
import eng from "./eng-logo.jpg";
import pegnl from "./pengl.PNG";
import egbc from "./egbc-logo.png";
import cens from "./cens-logo.png";
import ens from "./ens-logo.png";
import acec from "./acec-logo.PNG";
import { Helmet } from "react-helmet";

const About = () => {
    useEffect(() => {
        Aos.init({duration: 2000, disable: 'mobile'});
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="about">
            <Helmet>
                <title>About | Pinto Engineering</title>
                <meta name="description" content="PINTO has become known in the industry for economical solutions. Our dedication is to providing highly personalized attention to our clients." />
                <meta name="robots" content="index,follow"/>
            </Helmet>
            <div className="overlay"></div>
            <div className="about-header">
                <h1 data-aos="fade-in">PINTO Engineering Limited</h1>
                <p></p>
            </div>
            <div className="main-content">
                <div className="text"><h2>PINTO Engineering Limited is an established structural engineering consulting practice having served national and international clients across government, public, and private sectors since 1987.</h2>Over the years we have built significant confidence in our clients who have come to expect that PINTO will outperform benchmarks and deliver value on every project. Through the use of finite element design methods as well as BIM modeling, PINTO has become known in the industry for economical solutions. Our dedication to providing highly personalized attention to our clients is supported by our experienced and highly qualified team whose combined talents gives us the necessary expertise in every facet of structural consulting services.
                </div>
                <div className="text"><h2>PINTO has many project successes in the commercial, healthcare, residential, transportation, marine, and institutional sectors including several LEED certified projects.</h2>
                One of our project successes, “The Trillium”, (a 20-story residential, commercial, and retail complex and winner of the 2010 Nova Scotia Lieutenant Governor General’s award for Excellence in Engineering) is a testament to our team’s ability to work together to be innovative, tackle challenging issues, and overcome obstacles.
                </div>
            </div>
            <div className="adv-content" id="the-pinto-advantage">
                <h2>The Pinto Advantage</h2>
                <div className="content">
                    <div className="box" data-aos="fade-in">
                        <h3>30 Years of Experience</h3>
                        <p>For nearly 30 years, PINTO has been serving the engineering needs of Nova Scotia, Canada, and beyond.  We dedicate ourselves to meeting the needs of our clients in structural & civil design, project management, mediation & arbitration, and forensic investigation.  PINTO has contributed to nearly 2,500  projects since being established in 1987 including commercial and residential high-rises, bridges, office buildings, industrial facilities, retail centres, hotels, recreational facilities, warehouses, medical facilities, factories, heritage restoration, renovation & retro-fit, wharfs, and more.</p>
                    </div>
                    <div className="box" data-aos="fade-in">
                        <h3>Commitment to Quality</h3>
                        <p>PINTO is committed to providing our valued clients with the highest quality products and services and our goal on each and every project is always complete customer satisfaction. Our committment to quality includes the development of our staff in their professional careers, which ultimately provides a better experience for our clients. To show our committment to these core values, we are well on our way to becoming an ISO 9001 registered company.  
                        </p>
                    </div>
                    <div className="box" data-aos="fade-in">
                        <h3>State-of-the-Art Technology</h3>
                        <p>PINTO continues to be an industry leader by incorporating the newest, state-of-the-art techniques in our approach. Our current application of technology utilizes many FEM (Finite Element Modelling) software packages such as ETABS, SAFE, RAM, and RISA. These sophisticated packages are used for integrated design, drafting, and fabrication of tall skyscrapers, long span bridges, and Industrial structures as well as optimizing design solutions. Autodesk's Revit Structure, which is a Building Information Modelling (BIM) software package that is dramatically changing the way projects are realized in the industry, is used on all projects at PINTO.
                        <br /> <br />
                        BIM allows our designers to not only to produce conventional drawings such as 2D plans, but complete 3D models that are actually live views of the virtual building. This enables us to better collaborate with architects, owners, engineers, and construction professionals, thus resulting in optimized designs with fewer errors and less waste, which in turn results in decreased costs for our clients and increased client satisfaction.</p>
                    </div>
                    <div className="box" data-aos="fade-in">
                        <h3>Dedication to Clients</h3>
                        <p>Highly personalized services and detailed attention to our client's needs are hallmarks of PINTO Engineering. Our dedication to providing highly personalized attention to our clients is supported by our excellent staff of design engineers & technologists, CAD technicians, and administrators whose combined talents and experience give us the necessary expertise in every facet of structural consulting services.  The personal involvement of our principal in every project that comes into our office, from preliminary concept to final field observations, ensures that projects are delivered on schedule and within budget.
                        <br /> <br />
                        We are proud of our achievements in servicing our clients and are always looking for client feedback and new ways of improving our level of service, which is now enshrined as a core value in our ISO 9001 Quality Management System.</p>
                    </div>
                    <div className="box" data-aos="fade-in"> 
                        <h3>Continuous Education and Learning</h3>
                        <p>PINTO is committed to the continuing education and professional development of our employees. Members of our organization are encouraged to attend educational seminars and courses to continuously improve their level of expertise, which assures our clients that we are making every effort to maximize value on their projects. This committment is enshrined as one of the core values within our ISO 9001 Quality Management System.</p>
                    </div>
                </div>
            </div>
            <div className="award-section" id="awards">
                <h2>Awards</h2>
                <div className="award">
                    <img src={Tril} alt="The Trillium" loading="lazy"/>
                    <div className="text">
                        <h3>2010 Nova Scotia Lieutenant Governor General’s Award for Engineering</h3>
                        <p>This 20 storey, reinforced concrete multi-use structure located in the heart of downtown Halifax had its share of engineering challenges. Our structural designers created a three-dimensional model of the structure using finite element analysis software that included dynamic analysis.  Structures with eccentric offsets like the Trillium are considered 'irregular structures' and only a dynamic approach can lead to realistic estimates of the torque distributions resulting from earthquake loads. The Trillium won the 2010 Nova Scotia Lieutenant Governor General's Award for Engineering.
                        <br /> <br/>
                        Project: <a href="/projects/mixed-use-development/the-trillium" target="_blank">The Trillium</a></p>
                    </div>
                </div>
                <div className="award">
                    <img src={Church} alt="Bedford Baptist Church" loading="lazy"/>
                    <div className="text">
                        <h3>2004 Tilt-up Achievement Award</h3>
                        <p>
                        In 2004, a major renovation was completed for the Bedford Baptist Church in Bedford, NS, and B.D. Stevens Ltd., along with PINTO, was awarded the 2004 Tilt-up Achievement Award from the Tilt-up Concrete Association (TCA) as an outstanding example of tilt-up concrete construction.  The irregular panel shapes presented a unique challenge in reinforcing the panels as well as lifting the panels into place.
                        <br /> <br/>
                        Project: <a href="/projects/institutional/bedford-church" target="_blank">Bedford Baptist Church</a> · About the Award: <a href="https://tilt-up.org/awards/" target="_blank" rel="noreferrer nofollow noopener">For more information</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="affil-section" id="affiliations">
                <div className="text"><p>As a member of several industry governing bodies, PINTO rigorously applies stringent standards and codes of conduct in doing business with our clients and abiding by our obligations to the general public. The following are our affiliations.</p></div>
                <div className="affil">
                    <a href="https://www.acec.ca/" target="_blank" rel="noreferrer nofollow noopener"><img src={acec} alt="ACEC" loading="lazy"/></a>
                    <a href="https://engineersnovascotia.ca/" target="_blank" rel="noreferrer nofollow noopener"><img src={ens} alt="Engineers Nova Scotia" loading="lazy"/></a>
                    <a href="https://www.cens.org/" target="_blank" rel="noreferrer nofollow noopener"><img src={cens} alt="CENS" loading="lazy"/></a>
                    <a href="https://www.egbc.ca/" target="_blank" rel="noreferrer nofollow noopener"><img src={egbc} alt="EGBC" loading="lazy"/></a>
                    <a href="http://technova.ca/" target="_blank" rel="noreferrer nofollow noopener"><img src={tech} alt="Tech Nova" loading="lazy"/></a>
                </div>
                <div className="affil">
                    <a href="https://www.pegnl.ca/" target="_blank" rel="noreferrer nofollow noopener"><img src={pegnl} alt="PENGL" loading="lazy"/></a>
                    <a href="http://www.apegga.org/" target="_blank" rel="noreferrer nofollow noopener"><img src={ap} alt="APEGGA" loading="lazy"/></a>
                    <a href="https://www.peo.on.ca/" target="_blank" rel="noreferrer nofollow noopener"><img src={peo} alt="PEO" loading="lazy"/></a>
                    <a href="https://www.apegnb.com/" target="_blank" rel="noreferrer nofollow noopener"><img src={eng} alt="APEGNB" loading="lazy"/></a>
                </div>
            </div>
        </section>
    )
}

export default About;