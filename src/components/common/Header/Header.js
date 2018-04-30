import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="App-header">
                 <div className="App-brand">
                  <Link to="/"> <img src={logo} alt="logo" className="App-logo" /> </Link>
                 </div>

                {/* <nav className="App-nav">
                    <ul className="App-nav-container">
                        <li className="App-nav-link">Home</li>
                        <li className="App-nav-link">Login</li>
                    </ul>
                    </nav> */}
        </div>
    );
}

export default Header;