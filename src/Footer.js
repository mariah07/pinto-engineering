

const Footer = () => {
    return (
        <section id="footer">
            <div className="footer-content">
                <h3>Company</h3>
                <p>Description</p>
            </div>
            <div className="footer-content">
                <h3>Explore</h3>
                <ul className="explore">
                    <li><a>Services</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-content">
                <h3>Social</h3>
                <ul className="social">
                    <li><a><i class="fab fa-facebook-square"></i></a></li>
                    <li><a><i class="fab fa-twitter-square"></i></a></li>
                    <li><a><i class="fab fa-instagram-square"></i></a></li>
                </ul>
            </div>
            <div className="footer-content">
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>email</li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;