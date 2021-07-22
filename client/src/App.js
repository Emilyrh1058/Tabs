import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import ApolloClient from 'apollo-boost';
//import "/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
import "./index.css";
import Background from "./components/Background";
import LoginForm from "./pages/LoginForm";
import Signup from './pages/Signup';
import LoginPage from './components/Login'
import Cards from "./components/Cards/";
import SocialCardPage from "./components/SocialCard/SocialApp";

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
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
                <Route exact path="/contacts" component={Cards} />
                <Route exact path="/social" component={SocialCardPage} />
                {/* <Route component={NoMatch} /> */}
              </Switch>
            </div>  
          </div>
        </Router>
      </ApolloProvider>
      <main>
        <Background></Background>
        {/* <a className="App-link" href="" target="_blank" rel="noopener noreferrer">
          Register
        </a>
        <a className="App-link" href="" target="_blank" rel="noopener noreferrer">
          Log In
        </a> */}
      </main>

    </React.Fragment>
  );
}

export default App;