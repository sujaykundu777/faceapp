import React, {Component} from 'react';
import './Dashboard.css';
import Header from '../../common/Header/Header';
import Nav from '../Nav/Nav';
import Upload from '../../admin/Upload/Upload';
import withAuth from '../../withAuth';

class Dashboard extends Component {
  
    render(){
    return(
        <div className="App">
            <Header />
            <div className="DashContainer">
                <Nav/>
                <Upload />
            </div>
        </div>
    );  
   }  
}

export default withAuth(Dashboard);