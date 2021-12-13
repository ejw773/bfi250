import React from 'react';
import { Button } from 'react-bootstrap';

const DeleteButtons = (props) => {
  let { deleteMessage, handleCloseDeleteAccount, handleDeleteAccount } = props;
  if (deleteMessage === '') {
    return (
      <div>
        <Button variant='secondary' onClick={handleCloseDeleteAccount}>
          Cancel
        </Button>
        <Button variant='danger' onClick={handleDeleteAccount}>
          Delete Account
        </Button>
      </div>
    );
  } else {
    return <div style={{ color: 'red' }}>{deleteMessage}</div>;
  }
};

export default DeleteButtons;
