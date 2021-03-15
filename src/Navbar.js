import { render } from '@testing-library/react'
import { NavLink } from 'react-router-dom'
import React, {useState, useEffect} from 'react';

const Navbar = () => {
    const [mobile,setMobile] = useState(false);
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50)
        })
    }, [])
    return (
        <nav className={scroll ? "nav scrolling" : "nav"}>
            <div className="logo">Boilerplate</div>
            <ul className="nav-bar" style={{display: mobile ? "block" : "", transform: mobile ? "translateX(0)" : ""}}>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><a className="menu">Services</a>
                    <div className="dropdown-menu">
                        <NavLink to="/engineering-design" className="dropdown" activeClassName="active">Engineering Design</NavLink>
                        <NavLink to="/project-management" className="dropdown" activeClassName="active">Project Management</NavLink>
                        <NavLink to="/investigation-reports" className="dropdown" activeClassName="active">Investigation & Reports</NavLink>
                    </div>
                </li>
                <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
            <i onClick={() => setMobile(!mobile)} id="mobile-menu" class="fas fa-bars"></i>
        </nav>
    );
}

export default Navbar;