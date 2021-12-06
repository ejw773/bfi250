import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const NameChangeModal = (props) => {
    const { showNameChange, handleCloseNameChange, handleNameChange, nameText, setNameText } = props
    return (
        <Modal show={showNameChange} onHide={handleCloseNameChange} centered>
        <Modal.Header closeButton>
        <Modal.Title>User Name Change</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleNameChange}>
                <Form.Group className="mb-3" controlId="changeUserName">
                    <Form.Control type="text" placeholder="New User Name" value={nameText} onChange={e => setNameText(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">Change Name</Button>
            </Form>
        </Modal.Body>
    </Modal>

    )
}

export default NameChangeModal