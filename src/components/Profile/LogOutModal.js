import React from 'react';
import { Modal, Button } from'react-bootstrap'

const LogOutModal = (props) => {
    const { showLogOut, handleCloseLogOut, handleLogOut } = props
    return (
        <Modal show={showLogOut} onHide={handleCloseLogOut} centered>
            <Modal.Header closeButton>
                <Modal.Title>Log Out</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to log out?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseLogOut}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleLogOut}>
                    Log Out
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LogOutModal