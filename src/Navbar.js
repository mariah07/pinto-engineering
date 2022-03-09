import React, {useState, useEffect, useRef} from 'react';
import { NavLink } from 'react-router-dom'
import logo from './img/logo.png'; 
import { useHistory  } from 'react-router-dom';

const Navbar = () => {
    const wrapperRef = useRef(null);
    const [mobile,setMobile] = useState(false);
    const [scroll, setScroll] = useState(false);
    const history = useHistory();

    const setOverlay = (mobile) => {
      const element = document.getElementsByClassName("overlay")[0];
      if(mobile) {
          element.style.display = "block";
          element.style.opacity = "1";
      }
      else {
          element.style.display = "";
          element.style.opacity = "";
      }
  }

    const Scroll = () => {
      setScroll(window.scrollY > 50);
    }

    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setMobile(false);
        setOverlay(false);
      }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
          document.removeEventListener("click", handleClickOutside, false);
        };
    });


      useEffect(() => {
        return history.listen((location) => { 
          if(location.pathname !== "/" && location.pathname !== "/contact"){
            window.removeEventListener("scroll", Scroll, true);
            setScroll(true);
            setMobile(false);
         }
         else {
            window.addEventListener("scroll", Scroll, true);
            setScroll(false);
            setMobile(false);
         }
       }) 
       
      }, [history]);


      useEffect(() => {
        if(window.location.pathname === "/" || window.location.pathname === "/contact" ) {
            window.addEventListener("scroll", Scroll, true);
            setScroll(false);
          }
        else {
            window.removeEventListener("scroll", Scroll, true);
            setScroll(true);
        }
    }, []);

    return (
        <nav className={scroll ? "scrolling" : ""} ref={wrapperRef}>
            <div className="logo"><a href="/"><img src={logo} alt=""/></a></div>
            <ul className="nav-bar" style={{display: mobile ? "block" : "", transform: mobile ? "translateX(0)" : "", opacity: mobile ? "1" : ""}}>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><a className="menu">Services <i class="fas fa-angle-down"></i></a>
                    <div className="dropdown-menu">
                        <div className='menu-space'></div>
                        <NavLink to="/services/engineering-design" className="dropdown" activeClassName="active">Engineering Design</NavLink>
                        <NavLink to="/services/project-management" className="dropdown" activeClassName="active">Project Management</NavLink>
                        <NavLink to="/services/investigation-reports" className="dropdown" activeClassName="active">Investigation & Reports</NavLink>
                    </div>
                </li>
                <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
            <i onClick={() => {setMobile(!mobile); setOverlay(!mobile);}} id="mobile-menu" className="fas fa-bars"></i>
        </nav>
    );
}

export default Navbar;