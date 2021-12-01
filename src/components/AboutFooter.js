import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilm, faIdBadge, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const AboutFooter = () => {
    return (
        <Nav className="navbar fixed-bottom navbar-dark bg-dark">
            <Link className="navbar-brand" to=""><FontAwesomeIcon icon={faSearch} /></Link>
            <Link className="navbar-brand" to="/"><FontAwesomeIcon icon={faFilm} /></Link>
            <Link className="navbar-brand" to="/login"><FontAwesomeIcon icon={faSignInAlt} /></Link>
            <Link className="navbar-brand" to="/profile"><FontAwesomeIcon icon={faIdBadge} /></Link>
        </Nav>
    )
}

export default AboutFooter;
