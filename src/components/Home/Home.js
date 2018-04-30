import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import './Home.css';

const Home = () => {
    return (
        <div className="Home-Container">
            <h1 className="Home-intro">
                
                <p className="Home-title">App to demonstrate Face Recognition </p>
                <br />
                <Link to="/login">
                <Button secondary>Get Started</Button>
                </Link>
            </h1>
       </div>
    );
}

export default Home;