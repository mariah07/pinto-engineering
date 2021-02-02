import { render } from '@testing-library/react'
import React, {useState} from 'react';

const Navbar = () => {
    const [mobile,setMobile] = useState(false);
    return (
        <nav>
            <div className="logo">Boilerplate</div>
            <ul className="nav-bar" style={{transform: mobile ? "translateX(0px)" : ""}}>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <i onClick={() => setMobile(!mobile)} id="mobile-menu" class="fas fa-bars"></i>
        </nav>
    );
}

export default Navbar;