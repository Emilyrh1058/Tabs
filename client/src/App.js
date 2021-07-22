import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import ApolloClient from "apollo-boost";
import "bootstrap/dist/css/bootstrap.min.css";
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import Background from "./components/Background";
import LoginForm from "./pages/LoginForm";
import Signup from "./pages/Signup";
import LoginPage from "./components/Login";
import Cards from "./components/Cards/";
import Contacts from "./pages/Contacts";
import Nav from "./components/Nav";

// function App() {
//   return (
//     <Router>
//       <Route exact path="/" component={Background} />
//       <Route exact path="/contacts" component={Contacts} />
//     </Router>
//   );
// }

export default App;
