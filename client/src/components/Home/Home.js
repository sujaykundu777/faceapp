import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import './Home.css';


const Home = () => {
    return (
        <div className="Home-Container">
            <p className="Home-intro">
                
                <h1 className="Home-title">App to demonstrate Face Recognition </h1>
                <br />
                <Link to="/login">
                <Button secondary>Get Started</Button>
                </Link>
            </p>
       </div>
    );
}

export default Home;