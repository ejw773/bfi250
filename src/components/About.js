import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
import MenuBar from './MenuBar'
import AboutFooter from './AboutFooter'

const About = () => {
    return (
        <div>
            <MenuBar />
            <div id="about-page">
            </div>
            <AboutFooter />
        </div>
    )
}

export default About;