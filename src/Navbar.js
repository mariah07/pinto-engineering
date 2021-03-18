import { NavLink } from 'react-router-dom'
import React, {useState, useEffect, useRef} from 'react';

const Navbar = () => {
    const wrapperRef = useRef(null);
    const [mobile,setMobile] = useState(false);
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50)
        })
    }, [])

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
          document.removeEventListener("click", handleClickOutside, false);
        };
      }, []);

      const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setMobile(false);
        }
      };
    return (
        <nav className={scroll ? "nav scrolling" : "nav"} ref={wrapperRef}>
            <div className="logo">Boilerplate</div>
            <ul className="nav-bar" style={{display: mobile ? "block" : "", transform: mobile ? "translateX(0)" : "", visibility: mobile ? "visible" : "", opacity: mobile ? "1" : "", animation: mobile ? "fade 0.4s" : ""}}>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/services" className="menu">Services</NavLink>
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