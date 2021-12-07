import React from 'react';
import { Modal, Button, Form } from'react-bootstrap'

const PasswordChangeModal = (props) => {
    const { showPasswordChange, handleClosePasswordChange, handlePasswordChange, passwordText, setPasswordText } = props
    return (
        <Modal show={showPasswordChange} onHide={handleClosePasswordChange} centered>
            <Modal.Header closeButton>
            <Modal.Title>Password Change</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handlePasswordChange}>
                    <Form.Group className="mb-3" controlId="changeUserName">
                        <Form.Control type="password" placeholder="New Password" value={passwordText} onChange={e => setPasswordText(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Change Password</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default PasswordChangeModal