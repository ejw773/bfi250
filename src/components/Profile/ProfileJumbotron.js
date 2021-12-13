import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';

const ProfileJumbotron = (props) => {
  const {
    name,
    filmSet,
    setSelection,
    handleShowNameChange,
    handleShowEmailChange,
    email,
    handleShowPasswordChange,
    handleShowLogOut,
    handleShowDeleteAccount,
  } = props;
  return (
    <div className='jumbotron'>
      <h2>{name}'s Profile</h2>
      {/* <h4>Choose your list below.</h4> */}
      <p>The BFI publishes a new list every decade. Choose your list below.</p>

      <Dropdown>
        <Dropdown.Toggle
          className='btn-block btn-lg'
          variant='success'
          id='dropdown-basic'
        >
          Chosen: {filmSet.substring(3)}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onSelect={() => setSelection('bfi1952')}
            value='bfi1972'
          >
            1952 (10 Films)
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => setSelection('bfi1962')}
            value='bfi1972'
          >
            1962 (10 Films)
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => setSelection('bfi1972')}
            value='bfi1972'
          >
            1972 (10 Films)
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => setSelection('bfi1982')}
            value='bfi1972'
          >
            1982 (10 Films)
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => setSelection('bfi1992')}
            value='bfi1972'
          >
            1992 (10 Films)
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => setSelection('bfi2002')}
            value='bfi1972'
          >
            2002 (10 Films)
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => setSelection('bfi2012')}
            value='bfi1972'
          >
            2012 (250 Films)
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <br />
      <h3>Username: {name}</h3>
      <Button
        className='btn btn-warning btn-block'
        onClick={handleShowNameChange}
      >
        Change Username
      </Button>
      <br />

      <h3>{email}</h3>
      <Button
        className='btn btn-info btn-block'
        onClick={handleShowEmailChange}
      >
        Change Email
      </Button>
      <br />

      <h3>Password: ******</h3>
      <Button
        className='btn-primary btn-block'
        onClick={handleShowPasswordChange}
      >
        ChangePassword
      </Button>
      <br />
      <Button className='btn-secondary btn-block' onClick={handleShowLogOut}>
        Log Out
      </Button>
      <br />
      <Button
        className='btn-danger btn-sm btn-block'
        onClick={handleShowDeleteAccount}
      >
        Delete Account
      </Button>
      <br />
      <br />
    </div>
  );
};

export default ProfileJumbotron;
