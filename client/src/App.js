import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';
import logo from './logo.png';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-brand">
            <img src={logo} alt="logo" className="App-logo" />
          </div>
          
          {/* <nav className="App-nav">
                <ul className="App-nav-container">
                  <li className="App-nav-link">Home</li>
                  <li className="App-nav-link">Login</li>
                </ul>
              </nav> */}
        </header>
        <div className="App-main-content">
            <p className="App-intro">
                  
                <h1 className="App-title">App to demonstrate Face Recognition </h1>
                <br />
                <Button secondary>Get Started</Button>
            </p>
        </div>
        
      </div>
    );
  }
}

export default App;
