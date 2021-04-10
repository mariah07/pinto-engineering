

const Footer = () => {
    return (
        <section id="footer">
            <div className="footer">
                <div className="footer-content desc">
                    <h3>PINTO Engineering</h3>
                    <p>PINTO Engineering Limited is an established structural engineering consulting practice having served national and international clients across government, public, and private sectors since 1987. Over the years we have built significant confidence in our clients who have come to expect that PINTO will outperform benchmarks and deliver value on every project. </p>
                </div>
                <div className="footer-content">
                    <h3>Explore</h3>
                    <ul className="explore">
                        <li><a href="/services">Services</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-content">
                    <h3>Contact</h3>
                    <ul className="address">
                        <li><i className="fas fa-map-marker-alt"></i>
                        <p> Suite 401 - 3480 Joseph Howe Drive <br />
                            Halifax, Nova Scotia B3L 4H7<br/>
                            P.O. Box 2555</p></li>
                        <li className="phone"><i className="fas fa-phone"></i> <p><a href="tel:+18006596618">+1 (800) 659-6618</a>
                        <br/><a href="tel:+19024209800">+1 (902) 420-9800</a></p></li>
                        <li><i className="fas fa-envelope"></i> <a href="mailto:info@consultpinto.com">info@consultpinto.com</a></li>
                    </ul>
                </div>
                <div className="footer-content">
                    <h3>Connect</h3>
                    <ul className="social">
                        <li><a href="https://www.facebook.com/PintoEngineeringLtd" rel="nofollow"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="https://www.twitter.com/consultpinto" rel="nofollow"><i className="fab fa-twitter-square"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/malcolm-pinto-engineering-ltd-" rel="nofollow"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="copy-right">
                <p>© 1987 - 2021 Malcolm Pinto Engineering. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer;