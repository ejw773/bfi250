import React from 'react';
import './MenuBar.css'
import './ProgressBar.css'
import { ProgressBar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const MenuBar = () => {
    return (
        <React.Fragment>
            <LinkContainer to="/">
                <ProgressBar className="menu-bar menu-bar-header" now={100} label="BFI 250 Progress Bar" />
            </LinkContainer>
                <ProgressBar className="menu-bar">
                    <LinkContainer to="/">
                        <ProgressBar className="menu-bar-item" variant="danger" now={33} key={1} label="Progress" />
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <ProgressBar className="menu-bar-item" variant="warning" now={33} key={2} label="About" />
                    </LinkContainer>
                    <LinkContainer to="/landing">
                        <ProgressBar className="menu-bar-item" variant="success" now={34} key={3} label="Login" />
                    </LinkContainer>
                </ProgressBar>
        </React.Fragment>
    )
}

export default MenuBar;