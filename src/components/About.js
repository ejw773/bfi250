import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ProgressBar.css';

const About = () => {
    let loginStatus = true;
    let logOption = "Logout";
    if (loginStatus = false) {
        logOption = "Login"
    }
    return (
        <div>
            <Link to="/">
                    <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
                    <div className="progress-all progress-bar bg-primary" id="view-all" role="progressbar" style={{width:'100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Back to Progress Bar</div>
            </Link>
            <div className="progress progress-all">
                    <div className="progress-all progress-bar bg-light" id="view-all" role="progressbar" style={{width: '50%', textDecoration: 'underline', color: 'black', border: 'solid black 4px'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">About</div>
                    <Link to="/landing">
                        <div>
                            <div className="progress-all progress-bar bg-secondary" id="view-all" role="progressbar" style={{width: '50%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{logOption}</div>
                        </div>
                    </Link>
            </div>
            <div id="about-page">
                <h1>About the BFI Progress Bar</h1>
                <Link to="/landing">Logout</Link>
                <p>"BFI Progress Bar" is an individual project by <a rel="noreferrer" target="_blank" href="https://www.elijahwilcott.com">Elijah Wilcott</a> for completion of the <a rel="noreferrer" target="_blank" href='https://www.digitalcrafts.com'>DigitalCrafts</a> full-stack program.</p>
                <p>It was created using React, Redux, Node.js, Express, and Passport. The Github repo is <a rel="noreferrer" target="_blank" href="https://github.com/ejw773/bfi250">here for frontend</a> and <a rel="noreferrer" target="_blank" href="https://github.com/ejw773/bfi250-server">here for backend</a>.</p>
                <p>As of January 2021, the frontend resides on <a target="_blank" rel="noreferrer" href="https://www.siteground.com">SiteGround</a>, and the backend on <a target="_blank" rel="noreferrer" href="https://www.heroku.com">Heroku</a>.</p>
                <p>The films on this list are all from the British Film Institute's well-respected <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Sight_%26_Sound#The_Sight_&_Sound_Poll_of_the_Greatest_Films_of_All_Time">Sight and Sound Critics poll</a>. The list produced in 2012 is 250 titles long, and the <a target="_blank" rel="noreferrer" href="https://fanwithamovieyammer.wordpress.com/the-sight-sound-top-250-list/">Fan With a Movie Yammer</a> blog is dedicated to this list.</p>
                <p>Some of the data for the individual films came initially from the <a target="_blank" rel="noreferrer" href="http://www.omdbapi.com/">OMDb API</a>.</p>
                <p>I have endeavored to keep this tool as simple and elegant - not to mention mobile-friendly - as possible. I wanted to be able to pull out my phone and easily navigate the list while sorting through obscure DVDs in the public library. Since I personally feel strongly that not all the films on this list should be seen, having a "Skip" feature was the initial catalyst for this project. I encourage users to take advantage of it.</p>
                <h2>Demo Video:</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/07n1iiyvbys" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default About;