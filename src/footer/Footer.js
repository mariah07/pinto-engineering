

const Footer = () => {
    return (
        <section id="footer">
            <div className="footer">
                <div className="footer-content desc">
                    <h4 id="first-title">Malcolm</h4>
                    <h2>PINTO</h2>
                    <h4 id="second-title">Engineering LTD.</h4>
                </div>
                <div className="footer-content">
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
                    <ul className="social">
                        <li><a href="https://www.facebook.com/PintoEngineeringLtd" target="_blank" rel="nofollow noreferrer"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="https://www.twitter.com/consultpinto" target="_blank" rel="nofollow noreferrer"><i className="fab fa-twitter-square"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/malcolm-pinto-engineering-ltd-" target="_blank" rel="nofollow noreferrer"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="copy-right">
                <p>© 1987 - 2023 Malcolm Pinto Engineering. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer;