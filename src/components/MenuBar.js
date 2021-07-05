import React from 'react';
import './ProgressBar.css'
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap'

const MenuBar = () => {
    return (
        <div>
            <ProgressBar now={100} label="Welcome to the BFI 250 Progress Bar" className="progress-all"/>
            <ProgressBar className="progress progress-sections">
                <ProgressBar variant="danger" now={33} label="Login" className="progress-bar" />
                <ProgressBar variant="warning" now={33} label="About" className="progress-bar" />
                <ProgressBar variant="success" now={34} label="Something" className="progress-bar" /> 
            </ProgressBar>
        </div>
    )
}

export default MenuBar;