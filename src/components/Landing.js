import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div id='landing-page'>
            <h1>This Will Be The Landing Page</h1>
            <Link to="/">Take Me to the Progress Bar</Link>
        </div>
    )
}

export default Landing;