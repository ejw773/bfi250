import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilm,
  faIdBadge,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';

const OtherFooter = () => {
  const loginStatus = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  let movieButton = 'white';
  let profileButton = 'white';
  let aboutButton = 'white';

  if (location.pathname === '/login') {
    movieButton = 'blue';
    profileButton = 'red';
    aboutButton = 'white';
  }

  if (location.pathname === '/profile') {
    movieButton = 'white';
    profileButton = 'red';
    aboutButton = 'white';
  }

  if (location.pathname === '/about') {
    if (!loginStatus) {
      movieButton = 'blue';
      profileButton = 'white';
      aboutButton = 'red';
    } else {
      movieButton = 'white';
      profileButton = 'white';
      aboutButton = 'red';
    }
  }

  return (
    <Nav className='navbar fixed-bottom navbar-dark bg-dark'>
      <Link className='navbar-brand unreachable' to='/'>
        <FontAwesomeIcon icon={faFilm} color={movieButton} />
      </Link>
      <Link className='navbar-brand unreachable' to='/profile'>
        <FontAwesomeIcon icon={faIdBadge} color={profileButton} />
      </Link>
      <Link className='navbar-brand' to='/about'>
        <FontAwesomeIcon icon={faQuestion} color={aboutButton} />
      </Link>
    </Nav>
  );
};

export default OtherFooter;
