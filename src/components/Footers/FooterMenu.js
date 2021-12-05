import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faIdBadge } from '@fortawesome/free-solid-svg-icons';

const FooterMenu = () => {
    return (
        <Nav className="navbar fixed-bottom navbar-dark bg-dark">
            <Link className="navbar-brand" to="/profile"><FontAwesomeIcon icon={faIdBadge} /></Link>
            <Link className="navbar-brand" to="/about"><FontAwesomeIcon icon={faQuestion} /></Link>
        </Nav>
    )
}

export default FooterMenu;
