import React from 'react';
import './MenuBar.css';
import './ProgressBar.css';
import { ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const MenuBar = () => {
  return (
    <React.Fragment>
      <LinkContainer to='/'>
        <ProgressBar
          className='menu-bar menu-bar-header'
          now={100}
          label='BFI 250 Progress Bar'
        />
      </LinkContainer>
    </React.Fragment>
  );
};

export default MenuBar;
