import React, { Component } from 'react';
import './Profile.css';
import Header from '../../common/Header/Header';
import Nav from '../Nav/Nav';
import { Button } from 'semantic-ui-react';
import AuthService from '../../AuthService';
import withAuth from '../../withAuth';
const Auth = new AuthService();


class Profile extends Component {
    handleLogout(){
        Auth.logout()
        this.props.history.replace('/login');
      }
    render(){
    return(

        <div className="App">
        <Header />
        <div className="DashContainer">
            <Nav/>
            <div className="ProfileContainer">
                <h1> Profile Page</h1>
                <p className="App-intro">
                <Button onClick={this.handleLogout.bind(this)}>Logout</Button>
                 </p>
            </div>
        </div>
    </div>
           
    );  
   }  
}

export default withAuth(Profile);