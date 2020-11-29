import React from 'react';
import ProgressBar from './Progress'
import './Header.css'

const Header = (props) => {
    return (
        <div className="fixed-top">
            <ProgressBar />
        </div>
    )
}

export default Header