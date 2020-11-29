import React from 'react';
import './Footer.css'

const Footer = (props) => {
    return (
        <div>
            <nav className="navbar fixed-bottom navbar-dark bg-dark">
                <a className="navbar-brand" href="http://explore.bfi.org.uk/sightandsoundpolls/2012/" target="_blank">Sight & Sound "Greatest Films of All Time" | 2012 Edition</a>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    )
}

export default Footer;