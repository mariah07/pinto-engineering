import './css/App.css';
import './css/Navbar.css';
import './css/small.css';
import './css/medium.css';
import './css/Footer.css';
import Home from './pages/Home.js';
import EngineeringDesign from './services/engineering-design.js'
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Contact from './contact/contact';
import About from './about/about';
import ProjectManagement from './services/project-management.js';
import Investigation from './services/investigation-reports.js';
import Projects from './projects/projects-page.js';
import Bridges from './projects/bridges.js';
import Commerical from './projects/commercial';
import Heritage from './projects/heritage';
import Industrial from './projects/industrial';
import Institutional from './projects/institutional';
import Health from './projects/health';
import Mixed from './projects/mixed';
import Residential from './projects/residential';
import Wharves from './projects/wharves';
import Margaret from './single-project/bridges/margaret';
import Railway from './single-project/bridges/railway';
import Citadel from './single-project/commercial/citadel';
import Highfield from './single-project/commercial/highfield';
import Comfort from './single-project/commercial/comfort';
import Coving from './single-project/commercial/coving';
import Glen from './single-project/commercial/glen';
import ISL from './single-project/commercial/isl';
import Market from './single-project/commercial/market';
import Foyer from './single-project/health/foyer';
import Inverary from './single-project/health/inverary';
import Northwood from './single-project/health/northwood';
import Wickwire from './single-project/health/wickwire';
import Windsor from './single-project/health/windsor';
import Morris from './single-project/heritage/morris';
import Perkins from './single-project/heritage/perkins';
import StGeorge from './single-project/heritage/stgeorge';
import StJohn from './single-project/heritage/stjohn';
import Uniacke from './single-project/heritage/uniacke';
import Texas from './single-project/industrial/texas';
import Thomas from './single-project/industrial/thomas';
import Ayles from './single-project/institutional/ayles';
import Baptist from './single-project/institutional/baptist';
import Inverness from './single-project/institutional/inverness';
import Moncton from './single-project/institutional/moncton';
import Brigadoon from './single-project/mixed/brigadoon';
import Duckworth from './single-project/mixed/duckworth';
import Lawrence from './single-project/mixed/lawrence';
import Marriott from './single-project/mixed/marriott';
import MaryAnn from './single-project/mixed/maryann';
import Trillium from './single-project/mixed/trillium';
import Armoury from './single-project/residential/armoury';
import Convoy from './single-project/residential/convoy';
import Grand from './single-project/residential/grand';
import LaVilla from './single-project/residential/lavilla';
import Waterton from './single-project/residential/waterton';
import Wedgewood from './single-project/residential/wedgewood';
import Dock from './single-project/wharves/dock';
import Woodside from './single-project/wharves/woodside';
import NotFound from "./pages/NotFound";

import im2 from "./img/building.jpg"; import im3 from "./img/engineer.jpg"; import im4 from "./img/architect.jpg"; import im5 from "./about/building.jpeg";
import im6 from "./contact/construct.jpg";

class App extends React.Component  {

  componentDidMount() {
    const imagesPreload = [im2, im3, im4, im5, im6];
    imagesPreload.forEach((image) => {
        const newImage = new Image();
        newImage.src = image;
        window[image] = newImage;
    });
  }
  render(){
    return (
      <Router>
        <Navbar />
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/about"><About /></Route>

            <Route path="/services/engineering-design"><EngineeringDesign /></Route>
            <Route path="/services/project-management"><ProjectManagement /></Route>
            <Route path="/services/investigation-reports"><Investigation /></Route>

            <Router exact path="/projects"><Projects /></Router>
            <Router exact path="/projects/bridges"><Bridges /></Router>
            <Router exact path="/projects/commercial"><Commerical /></Router>
            <Router exact path="/projects/heritage"><Heritage /></Router>
            <Router exact path="/projects/industrial-aviation"><Industrial /></Router>
            <Router exact path="/projects/institutional"><Institutional /></Router>
            <Router exact path="/projects/health"><Health /></Router>
            <Router exact path="/projects/mixed-use-development"><Mixed /></Router>
            <Router exact path="/projects/residential"><Residential /></Router>
            <Router exact path="/projects/wharves"><Wharves /></Router>

            <Router path="/projects/bridges/margaret-bridge"><Margaret /></Router>
            <Router path="/projects/bridges/railway-bridge"><Railway /></Router>

            <Router path="/projects/commercial/citadel-inn"><Citadel /></Router>
            <Router path="/projects/commercial/highfield-plaza"><Highfield /></Router>
            <Router path="/projects/commercial/market-square"><Market /></Router>
            <Router path="/projects/commercial/isl-digital-marketing"><ISL /></Router>
            <Router path="/projects/commercial/glenbourne-plaza"><Glen /></Router>
            <Router path="/projects/commercial/covington-station"><Coving /></Router>
            <Router path="/projects/commercial/comfort-inn"><Comfort /></Router>

            <Router path="/projects/health/inverary-manor-nursing-home"><Inverary /></Router>
            <Router path="/projects/health/wickwire-assisted-living-residence"><Wickwire /></Router>
            <Router path="/projects/health/foyer-longterm-care-facility"><Foyer /></Router>
            <Router path="/projects/health/windsor-elms-village"><Windsor /></Router>
            <Router path="/projects/health/northwood-continuing-care"><Northwood /></Router>

            <Router path="/projects/heritage/perkins-house-museum"><Perkins /></Router>
            <Router path="/projects/heritage/st-john-anglican-church"><StJohn /></Router>
            <Router path="/projects/heritage/morris-street"><Morris /></Router>
            <Router path="/projects/heritage/st-george-anglican-church"><StGeorge /></Router>
            <Router path="/projects/heritage/uniacke-estate-museum"><Uniacke /></Router>

            <Router path="/projects/industrial-aviation/texas-duct"><Texas /></Router>
            <Router path="/projects/industrial-aviation/thomas-hill"><Thomas /></Router>

            <Router path="/projects/institutional/aylesford-church"><Ayles /></Router>
            <Router path="/projects/institutional/bedford-church"><Baptist /></Router>
            <Router path="/projects/institutional/inverness-memorial-hospital"><Inverness /></Router>
            <Router path="/projects/institutional/moncton-law-courts"><Moncton /></Router>

            <Router path="/projects/mixed-use-development/the-trillium"><Trillium /></Router>
            <Router path="/projects/mixed-use-development/saint-lawerence"><Lawrence /></Router>
            <Router path="/projects/mixed-use-development/mary-ann"><MaryAnn /></Router>
            <Router path="/projects/mixed-use-development/duckworth-street-metropark"><Duckworth /></Router>
            <Router path="/projects/mixed-use-development/brigadoon-village"><Brigadoon /></Router>
            <Router path="/projects/mixed-use-development/marriott-residence-inn"><Marriott /></Router>

            <Router path="/projects/residential/grand-haven"><Grand /></Router>
            <Router path="/projects/residential/wedgewood-condominium"><Wedgewood /></Router>
            <Router path="/projects/residential/la-villa"><LaVilla /></Router>
            <Router path="/projects/residential/convoy-quay-gardens"><Convoy /></Router>
            <Router path="/projects/residential/the-waterton"><Waterton /></Router>
            <Router path="/projects/residential/armoury-square"><Armoury /></Router>

            <Router path="/projects/wharves/woodside-ferry"><Woodside /></Router>
            <Router path="/projects/wharves/national-gypsum-dock"><Dock /></Router>
            <Router path="/404" ><NotFound /></Router>

            <Redirect to="/404" />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
