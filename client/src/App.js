/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './assets/images/goldkey.png';
import "./App.css";
// import backgroundVideo from "./assets/backgroundVideo";
import Background from "./components/Background";
import Login from "./components/Login";
// import './assets/backgroundVideo/index';
//import backgroundVideo from './assets/backgroundVideo/index';

function App() {
  return (
    <main>
      <Background></Background>
      <p>Intro here</p>
      <a className="App-link" href="" target="_blank" rel="noopener noreferrer">
        Register
      </a>

      <a className="App-link" href="" target="_blank" rel="noopener noreferrer">
        Sign Up
      </a>
    </main>
  );
}

export default App;
