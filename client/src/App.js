import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import Background from "./components/Background";
// import Login from "./components/Login";
import Cards from "./components/Cards/";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Background} />
      <Route exact path="/" component={Home} />
      <Route exact path="/contacts" component={Cards} />
      <Route exact path="/contacts" component={Nav} />
    </Router>
  );
}

export default App;
