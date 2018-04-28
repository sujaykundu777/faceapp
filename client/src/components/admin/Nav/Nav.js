import React, {Component} from 'react';
import './Nav.css';
import { Link } from "react-router-dom";
import {Button} from 'semantic-ui-react';
import AuthService from '../../AuthService';
import withAuth from '../../withAuth';
const Auth = new AuthService();


class Nav extends Component {

    handleLogout(){
        Auth.logout()
      }

  render(){

      return(
        <div className="NavsContainer">
        <Link to="/dashboard">
        <Button> Upload Photo </Button>
        </Link>
        <Link to="/profile">
        <Button> Visit Profile </Button>
        </Link>
        <Link to="/about">
        <Button> About This App </Button>
        </Link>
        <Link to="/">
        <Button onClick={this.handleLogout.bind(this)}>Logout</Button>
        </Link>
      </div>
      );
  }

}

export default withAuth(Nav);