import React from 'react';
import { useState } from 'react'
import { Modal, Form, Container, Row, Col, Button } from 'react-bootstrap'
import './Login.css'
import MenuBar from './MenuBar'
import AboutFooter from './AboutFooter'
import { register, login, logout, logoutAll } from '../services/auth'
import getMyProfile from '../services/user'

const Login = () => {
    // Control Sign Up
    const [showSignUp, setShowSignUp] = useState(false)
    const handleShowSignUp = () => setShowSignUp(true)
    const handleCloseSignUp = () => setShowSignUp(false)

    // Control Log In
    const [showLogIn, setShowLogIn] = useState(false)
    const handleShowLogIn = () => setShowLogIn(true)
    const handleCloseLogIn = () => setShowLogIn(false)

    // Control Log Out
    const [showLogOut, setShowLogOut] = useState(false)
    const handleShowLogOut = () => setShowLogOut(true)
    const handleCloseLogOut = () => setShowLogOut(false)

    // User Information
    const [name, setName] = useState('')
    const handleNameChange = (val) => setName(val)

    const [email, setEmail] = useState('')
    const handleEmailChange = (val) => setEmail(val)


    const [password, setPassword] = useState('')
    const handlePasswordChange = (val) => setPassword(val)


    const clearForm = () => {
        setName('')
        setEmail('')
        setPassword('')
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        const userInfo = {
            name,
            email,
            password
        }
        register(userInfo)
        handleCloseSignUp()
    }

    const handleLogIn = (e) => {
        e.preventDefault()
        const userInfo = {
            email,
            password
        }
        login(userInfo)
        handleCloseLogIn()
    }

    const handleLogOut = async (e) => {
        e.preventDefault()
        handleCloseLogOut()
        console.log('Logging out.')
    }

    const handleLogOutAll = (e) => {
        e.preventDefault()
        handleCloseLogOut()
        console.log('Logging out of all devices.')
    }


    return (
        <div>
            <MenuBar />
            <div id="about-page">
                    <Container>
                        <Row>     
                            <Col className="align-self-center col-md-auto p-3 mb-2 bg-secondary bg-gradient text-white" >Each decade since 1952, the British Film Institute's Sight & Sound Magazine has been putting out a carefully compiled list of the greatest films of all time. The published lists are usually 10 titles long, but in 2012 they put out a whopping 250 titles.</Col>
                        </Row>
                        <Row>
                            <Col className="align-self-center col-md-auto p-3 mb-2 bg-secondary bg-gradient text-white">For best experience, create an account to save your data. Alternatively, you can visit <a href="https://nologin.bfi250.com/">nologin.bfi250.com</a> to use without a login.</Col>
                        </Row>
                        <Row>
                            <Col><Button onClick={handleShowSignUp}>Sign Up</Button></Col>
                            <Col><Button onClick={handleShowLogIn}>Log In</Button></Col>
                            <Col><Button onClick={handleShowLogOut}>Log Out</Button></Col>
                        </Row>
                    </Container>

                    {/* Sign Up Modal */}
                    <Modal show={showSignUp} onHide={handleCloseSignUp} centered>
                        <Modal.Header closeButton>
                        <Modal.Title>Create Account</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={(e) => handleRegistration(e)}>

                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="name" placeholder="Enter User Name" value={name} onChange={e => handleNameChange(e.target.value)}/>
                                    <Form.Text className="text-muted">
                                    Call yourself whatever you want.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => handleEmailChange(e.target.value)} />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => handlePasswordChange(e.target.value)} />
                                    <Form.Text className="text-muted">
                                    Remember your password. We can't retrieve it.
                                    </Form.Text>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>


                    {/* Sign In Modal */}
                    <Modal show={showLogIn} onHide={handleCloseLogIn} centered>
                        <Modal.Header closeButton>
                        <Modal.Title>Log In</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleLogIn}>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => handleEmailChange(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => handlePasswordChange(e.target.value)} />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>

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

            </div>
            <AboutFooter />
        </div>
    )
}

export default Login;