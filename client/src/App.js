import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/common/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/dashboard/Dashboard/Dashboard';
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
         <div className="App">
          <Header />
          <Switch>  
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/dashboard" component={Dashboard} exact />
          </Switch> 
          </div>
      </Router>
    );
  }
}

export default App;
