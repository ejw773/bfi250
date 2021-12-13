import React from 'react';
import {Container, Card } from 'react-bootstrap'
import OtherFooter from './Footers/OtherFooter'
import './About.css'

const About = () => {
    return (
        <div id="about-page">
            <Container>
                <Card>
                <h1>About BFI 250</h1>      
                <p>Each decade since 1952, the British Film Institute's <a href="https://en.wikipedia.org/wiki/Sight_%26_Sound" target="_blank" rel="noreferrer">Sight & Sound Magazine</a> has been putting out a carefully compiled list of the greatest films of all time. The published lists are usually 10 titles long, but in 2012 they put out a whopping <a href="https://fanwithamovieyammer.wordpress.com/the-sight-sound-top-250-list/" target="_blank" rel="noreferrer">250 titles</a>.</p>
                <p>I wanted a tool to help me track my way through the list. I had three basic criteria:</p>
                <ul>
                    <li>A visually simple progress bar. This tool does ONE thing.</li>
                    <li>Mobile-friendly.</li>
                    <li>A button to "Skip" films I don't intend to see.</li>
                </ul>
                <p>Technologies Used:</p>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Bootstrap</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </ul>
                <p>The frontend is hosted on <a href="https://www.siteground.com/" target="_blank" rel="noreferrer">SiteGround</a>, and the backend is hosted on <a href="https://www.heroku.com" target="_blank" rel="noreferrer">Heroku</a>. This project was completed as part of my course work at <a href="https://www.nucamp.co/" rel="noreferrer" target="_blank">Nucamp</a> coding bootcamp.</p>
                <p>
                    GitHub: <a 
                        href="https://github.com/ejw773/bfi250" target="_blank" rel="noreferrer">Frontend</a> | <a 
                        href="https://github.com/ejw773/bfi250-node-server" target="_blank" rel="noreferrer">Backend</a> | <a 
                        href="https://github.com/ejw773/bfi250-mobile" target="_blank" rel="noreferrer">Mobile App</a> | <a
                        href="https://github.com/ejw773/bfi250-mobile" target="_blank" rel="noreferrer">Mobile App on Expo Snack</a></p>
                {/* <h2>About Me</h2>
                <p>I am a web developer in Greenville, South Carolina, with a life-long love for movies. I'm always thrilled to see how the BFI recognizes the value of silent masterpieces, such as <a href="https://en.wikipedia.org/wiki/Sunrise:_A_Song_of_Two_Humans" rel="noreferrer" target="_blank">Sunrise</a>.</p> */}
                </Card>
                </Container>            
            <OtherFooter />
        </div>
    )
}

export default About;