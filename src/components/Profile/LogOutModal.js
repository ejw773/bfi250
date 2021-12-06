import React from 'react';
import { Modal, Button } from'react-bootstrap'

const LogOutModal = (props) => {
    const { showLogOut, handleCloseLogOut, handleLogOut, handleLogOutAll } = props
    return (
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
    )
}

export default LogOutModal