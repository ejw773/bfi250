import React from 'react';
import { Link } from 'react-router-dom';
import './ProgressBar.css';

const About = () => {
    return (
        <div>
            <Link to="/">
                <div className="progress progress-all">
                    <div className="progress-all progress-bar bg-primary" id="view-all" role="progressbar" style={{width:'100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Back to Progress Bar</div>
                </div>
            </Link>
            <div className="progress progress-all">
                    <div className="progress-all progress-bar bg-secondary" id="view-all" role="progressbar" style={{width: '100%', textDecoration: 'underline', border: 'solid white 4px'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">About</div>
            </div>
            <div id="about-page">
                <h1>This Will Be The 'About' Page</h1>
                <Link to="/landing">Logout</Link>
            </div>
        </div>
    )
}

export default About;