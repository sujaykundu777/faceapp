import React, {Component} from 'react';
import './Dashboard.css';
import Header from '../../common/Header/Header';
import { Button } from 'semantic-ui-react';
import AuthService from '../../AuthService';
import withAuth from '../../withAuth';
const Auth = new AuthService();


class Dashboard extends Component {
    handleLogout(){
        Auth.logout()
        this.props.history.replace('/login');
      }
    render(){
    return(
        <div className="App">
            <Header />
            <div className="DashContainer">
                
                <h1> Welcome {this.props.user.email}</h1>
                <p className="App-intro">
            <Button onClick={this.handleLogout.bind(this)}>Logout</Button>
            </p>
            </div>
        </div>
    );  
   }  
}

export default withAuth(Dashboard);