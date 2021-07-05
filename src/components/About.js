import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div id="about-page">
            <h1>This Will Be The 'About' Page</h1>
            <Link to="/">Back to Progress Bar</Link> <br />
            <Link to="/landing">Logout</Link>
        </div>
    )
}

export default About;