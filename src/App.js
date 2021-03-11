import './css/App.css';
import './css/Navbar.css';
import './css/small.css';
import './css/Footer.css';
import Home from './pages/Home.js';
import EngineeringDesign from './services/engineering-design.js'
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import React from 'react';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
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

class App extends React.Component  {
  render(){
    return (
      <Router>
        <Navbar />
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/engineering-design"><EngineeringDesign /></Route>
            <Route path="/project-management"><ProjectManagement /></Route>
            <Route path="/investigation-reports"><Investigation /></Route>
            <Router path="/projects"><Projects /></Router>
            <Router path="/bridges"><Bridges /></Router>
            <Router path="/commercial"><Commerical /></Router>
            <Router path="/heritage"><Heritage /></Router>
            <Router path="/industrial-aviation"><Industrial /></Router>
            <Router path="/institutional"><Institutional /></Router>
            <Router path="/health"><Health /></Router>
            <Router path="/mixed-use-developement"><Mixed /></Router>
            <Router path="/residential"><Residential /></Router>
            <Router path="/wharves"><Wharves /></Router>
            <Router path="/margaret-bridge"><Margaret /></Router>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
