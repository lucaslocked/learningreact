import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";
// import CounterExample from './components/CounterExample';
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from './pages/Product';

function App() {
  return (
    <div>
      {/* <CounterExample /> */}
      <Router>
        <Header />
        <div className="p-3">
          <Switch>
            <Router exact path="/">
              <Home />
            </Router>
            <Router path="/about">
              <About />
            </Router>
            <Router path="/products/:id">
              <Product />
            </Router>
          </Switch>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
