import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Login from '../src/components/Login/Login';
import Dashboard from './components/dashboard/Dashboard/Dashboard';


ReactDOM.render(
        <Router>
            <div>
            <Switch> 
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
            </div>
        </Router>

, document.getElementById('root'));
registerServiceWorker();
