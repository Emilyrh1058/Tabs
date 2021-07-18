import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
// import Footer from './components/Footer';
// import NoMatch from './pages/NoMatch';
import "./App.css";
import Background from "./components/Background";
import Login from "./components/Login";
import Signup from './pages/Signup';


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
            <Login />
            <div className="container">
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                {/* <Route exact path="/profile/:username?" component={Profile} /> */}

                {/* <Route component={NoMatch} /> */}
              </Switch>
            </div>
            {/* <Footer /> */}
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
