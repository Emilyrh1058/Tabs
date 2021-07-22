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
// import Nav from "./components/Nav";

// function App() {
//   return (
//     <Router>
//       <Route exact path="/" component={Background} />
//       <Route exact path="/contacts" component={Contacts} />
//     </Router>
//   );
// }

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <LoginPage />
            <div className="container">
              <Switch>
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/signup" component={Signup} />
                {/* <Route exact path="/profile/:username?" component={Profile} /> */}
                <Route exact path="/" component={Background} />
                <Route exact path="/contacts" component={Contacts} />
                {/* <Route component={NoMatch} /> */}
              </Switch>
            </div>
          </div>
        </Router>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;
