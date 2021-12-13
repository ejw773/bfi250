import React from 'react';
import { Modal } from 'react-bootstrap';
import DeleteButtons from './DeleteButtons';

const DeleteAccountModal = (props) => {
  const {
    showDeleteAccount,
    handleCloseDeleteAccount,
    deleteMessage,
    handleDeleteAccount,
  } = props;
  return (
    <Modal show={showDeleteAccount} onHide={handleCloseDeleteAccount} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to proceed? There is no 'undo'.
      </Modal.Body>
      <Modal.Footer>
        <DeleteButtons
          deleteMessage={deleteMessage}
          handleCloseDeleteAccount={handleCloseDeleteAccount}
          handleDeleteAccount={handleDeleteAccount}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteAccountModal;
