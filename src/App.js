import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Work from "./pages/Work";
import Home from "./pages/Home";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          {/* <Route path="/" >
              <Home />
          </Route> */}
          <Route path="/work" >
            <Work />
          </Route>

          <Route path="/about" >
            <About />
          </Route>
          {/* <Route path="/news" >
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route> */}
        </Switch>
        <Footer />
      </div>
    </Router >

  );
}

export default App;

