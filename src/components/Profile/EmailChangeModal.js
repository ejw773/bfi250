import React from 'react';
import { Modal, Button, Form } from'react-bootstrap'

const EmailChangeModal = (props) => {
    const { showEmailChange, handleCloseEmailChange, handleEmailChange, emailText, setEmailText } = props
    return (
        <Modal show={showEmailChange} onHide={handleCloseEmailChange} centered>
            <Modal.Header closeButton>
            <Modal.Title>Email Change</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleEmailChange}>
                    <Form.Group className="mb-3" controlId="changeUserName">
                        <Form.Control type="email" placeholder="New Email" value={emailText} onChange={e => setEmailText(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Change Email</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default EmailChangeModal