import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Modal, Dropdown, Button, Form } from 'react-bootstrap'
import './Profile.css';
import MenuBar from './MenuBar'
import OtherFooter from './Footers/OtherFooter'
import { logout, logoutAll } from '../redux/actions/auth'
import { clearMessage } from '../redux/actions/message';
import { changeFilmSet, changeShowSet } from '../redux/actions/actions';

const Profile = () => {
    const user = useSelector((state) => state.auth)

    const [nameText, setNameText] = useState('')
    
    // Control Name Change
    const [showNameChange, setShowNameChange] = useState(false)
    const handleShowNameChange = () => setShowNameChange(true)
    const handleCloseNameChange = () => setShowNameChange(false)
    
    // Control Log Out
    const [showLogOut, setShowLogOut] = useState(false)
    const handleShowLogOut = () => setShowLogOut(true)
    const handleCloseLogOut = () => setShowLogOut(false)
    
    // Control Delete Account
    const [showDeleteAccount, setShowDeleteAccount] = useState(false)
    const handleShowDeleteAccount = () => setShowDeleteAccount(true)
    const handleCloseDeleteAccount = () => setShowDeleteAccount(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch])

    const handleNameChange = async (e) => {
        e.preventDefault()
        //dispatch()
        handleCloseNameChange()
    }
    
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

    const handleDeleteAccount = (e) => {
        e.preventDefault()
        console.log('deleting the account')
        handleCloseDeleteAccount()
    }

    if (!user.isLoggedIn) {
        return <Redirect to="/login" />;
    }
    const { name, email, filmSet } = user.user
    const setSelection = (selection) => {
        dispatch(changeFilmSet(selection))
        dispatch(changeShowSet('view-all'))
        return <Redirect to="/" />
    }
    return (
        <div id='profile-page'>
            <MenuBar />
                <div className="jumbotron">
                <h2>{name}'s Profile</h2>
                    {/* <h4>Choose your list below.</h4> */}
                    <p>The BFI publishes a new list every decade. Choose your list below.</p>
                    <Dropdown>
                        <Dropdown.Toggle className="btn-block btn-lg" variant="success" id="dropdown-basic">
                            Chosen: {filmSet.substring(3)}
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
                    <br />
                    <h3>Username: {name}</h3>
                    <Button className="btn btn-warning btn-block" onClick={handleShowNameChange}>Change Username</Button>
                    <br />

                    <h3>{email}</h3>
                    <Button className="btn btn-info btn-block" >Change Email</Button>
                    <br />

                    <h3>Password: ******</h3>
                    <Button className="btn-primary btn-block" >ChangePassword</Button>
                    <br />
                    <Button className="btn-secondary btn-block" onClick={handleShowLogOut}>Log Out</Button>
                    <br />
                    <Button className="btn-danger btn-sm btn-block" onClick={handleShowDeleteAccount}>Delete Account</Button>
                    <br />
                    <br />
                </div>

                {/* NameChange Modal */}
                <Modal show={showNameChange} onHide={handleCloseNameChange} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>User Name Change</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleNameChange}>
                            <Form.Group className="mb-3" controlId="changeUserName">
                                <Form.Control type="text" placeholder="New User Name" value={nameText} onChange={e => setNameText(e.target.value)} />
                            </Form.Group>
                            <Button variant="secondary" type="cancel">Cancel</Button>
                            <Button variant="primary" type="submit">Change Name</Button>
                            {/* For error handling: */}
                            {/* <p style={{color: 'red'}}>{messageToDisplay}</p> */}
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
                        <Button variant="warning" onClick={handleLogOut}>
                            This Device
                        </Button>
                        <Button variant="danger" onClick={handleLogOutAll}>
                            All Devices
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Delete Account Modal */}
                <Modal show={showDeleteAccount} onHide={handleCloseDeleteAccount} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to proceed? There is no 'undo'.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseDeleteAccount}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={handleDeleteAccount}>
                            Delete Account
                        </Button>
                    </Modal.Footer>
                </Modal>


            <OtherFooter />
        </div>
    )
}

export default Profile