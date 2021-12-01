import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Modal, Dropdown, Container, Row, Col, Button } from 'react-bootstrap'
import './Profile.css';
import MenuBar from './MenuBar'
import ProfileFooter from './ProfileFooter'
import { logout, logoutAll } from '../redux/actions/auth'
import { clearMessage } from '../redux/actions/message';
import { changeFilmSet } from '../redux/actions/actions';

const Profile = () => {
    const user = useSelector((state) => state.auth.user)
    
    // Control Log Out
    const [showLogOut, setShowLogOut] = useState(false)
    const handleShowLogOut = () => setShowLogOut(true)
    const handleCloseLogOut = () => setShowLogOut(false)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch])

    const handleLogOut = async (e) => {
        e.preventDefault()
        dispatch(logout())
        // .catch(() => {
        //     setLoading(false)
        // })
        handleCloseLogOut()
    }

    const handleLogOutAll = (e) => {
        e.preventDefault()
        dispatch(logoutAll())
        handleCloseLogOut()
    }

    if (!user) {
        return <Redirect to="/login" />;
    }
    const { name, email, filmSet } = user
    const setSelection = (selection) => {
        dispatch(changeFilmSet(selection))
    }
    return (
        <div id='profile-page'>
            <MenuBar />
                <div>
                    <h1>Welcome, {name}!</h1>
                    <h2>This is your email:</h2>
                    <h3>{email}</h3>
                </div>


                <Container>
                        <Row>     
                            <Col className="align-self-center col-md-auto p-3 mb-2 bg-secondary bg-gradient text-white">Some stuff here.</Col>
                        </Row>
                        <Row>
                            <Col className="align-self-center col-md-auto p-3 mb-2 bg-secondary bg-gradient text-white">Choose your film set. Your current selection is {filmSet}</Col>
                        </Row>
                        <Row>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Choose Year
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onSelect={() => setSelection('bfi1952')} value="bfi1972">1952 (10 Films)</Dropdown.Item>
                                        <Dropdown.Item onSelect={() => setSelection('bfi1962')} value="bfi1972">1962 (10 Films)</Dropdown.Item>
                                        <Dropdown.Item onSelect={() => setSelection('bfi1972')} value="bfi1972">1972 (10 Films)</Dropdown.Item>
                                        <Dropdown.Item onSelect={() => setSelection('bfi1982')} value="bfi1972">1982 (10 Films)</Dropdown.Item>
                                        <Dropdown.Item onSelect={() => setSelection('bfi1992')} value="bfi1972">1992 (10 Films)</Dropdown.Item>
                                        <Dropdown.Item onSelect={() => setSelection('bfi2002')} value="bfi1972">2002 (10 Films)</Dropdown.Item>
                                        <Dropdown.Item onSelect={() => setSelection('bfi2012')} value="bfi1972">2012 (250 Films)</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row>
                            <Col><Button onClick={handleShowLogOut}>Log Out</Button></Col>
                        </Row>
                    </Container>



                {/* Log Out Modal */}
                <Modal show={showLogOut} onHide={handleCloseLogOut} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Log Out</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Where would you like to log out?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseLogOut}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleLogOut}>
                            This Device
                        </Button>
                        <Button variant="danger" onClick={handleLogOutAll}>
                            All Devices
                        </Button>
                    </Modal.Footer>
                </Modal>

            <ProfileFooter />
        </div>
    )
}

export default Profile