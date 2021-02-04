import './css/App.css';
import './css/Navbar.css';
import './css/small.css';
import './css/Footer.css';
import Home from './pages/Home.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import React from 'react';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class App extends React.Component  {
  render(){
    return (
      <Router>
        <Navbar />
        <Switch>
            <Route exact path="/"><Home /></Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
