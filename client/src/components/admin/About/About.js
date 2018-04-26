import React, {Component} from 'react';
import './About.css';

import Header from '../../common/Header/Header';
import Nav from '../Nav/Nav';
import withAuth from '../../withAuth';


class About extends Component {
      render() {
           return(

            <div className="App">
            <Header />
                <div className="DashContainer">
                    <Nav/>
                  
                    <h1> About the App </h1>
                  
                </div>
            </div>
           );
      }
     
}

export default withAuth(About);