import React from 'react';
import './MenuBar.css'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const MenuBar = () => {
    return (
        <React.Fragment>
            <Link>
                <div className="menu-div menu-div-header color-primary">
                    <p>BFI 250 Progress Bar</p>
                </div>
            </Link>
            <Row noGutters>
                <Col>
                    <Link to="/">
                        <div className="menu-div menu-div-item color-danger">
                            <p>Progress</p>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to="/about">
                        <div className="menu-div menu-div-item color-warning">
                            <p>About</p>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to="/landing">
                        <div className="menu-div menu-div-item color-success">
                            <p>Login</p>
                        </div>
                    </Link>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default MenuBar;