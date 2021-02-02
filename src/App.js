import './css/App.css';
import './css/Navbar.css';
import './css/small.css';
import Home from './pages/Home.js';
import Navbar from './Navbar.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/"><Home /></Route>
      </Switch>
    </Router>
  );
}

export default App;
