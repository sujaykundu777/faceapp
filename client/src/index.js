import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Login from '../src/components/Login/Login';
import Dashboard from './components/admin/Dashboard/Dashboard';
import Profile from './components/admin/Profile/Profile';
import About from './components/admin/About/About';

ReactDOM.render(
        <Router>
            <div>
            <Switch> 
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/about" component={About} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
            </div>
        </Router>

, document.getElementById('root'));
registerServiceWorker();
