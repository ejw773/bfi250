import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Modal, Form, Button, Spinner, Card, Container } from 'react-bootstrap';
import './Login.css';
import qrCode from './img/snack-qr.png';
import MenuBar from './MenuBar';
import OtherFooter from './Footers/OtherFooter';
import { register, login } from '../redux/actions/auth';
import { clearMessage } from '../redux/actions/message';

const Login = () => {
  // Current Status
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);

  // Control Sign Up
  const [showSignUp, setShowSignUp] = useState(false);
  const handleShowSignUp = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

  // Control Log In
  const [showLogIn, setShowLogIn] = useState(false);
  const handleShowLogIn = () => setShowLogIn(true);
  const handleCloseLogIn = () => setShowLogIn(false);

  // Control No Log In
  const [showNoLogin, setShowNoLogIn] = useState(false);
  const handleShowNoLogIn = () => setShowNoLogIn(true);
  const handleCloseNoLogIn = () => setShowNoLogIn(false);

  // User Information
  const [name, setName] = useState('');
  const handleNameChange = (val) => setName(val);

  const [email, setEmail] = useState('');
  const handleEmailChange = (val) => setEmail(val);

  const [password, setPassword] = useState('');
  const handlePasswordChange = (val) => setPassword(val);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const message = useSelector((state) => state.message);

  let messageToDisplay = '';

  if (message.message) {
    messageToDisplay = message.message;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  let submitText = 'Submit';

  if (loading) {
    submitText = <Spinner animation='border' />;
  } else {
    submitText = 'Submit';
  }

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessful(false);
    dispatch(register(name, email, password))
      .then(() => {
        setSuccessful(true);
        setLoading(false);
        clearForm();
        handleCloseSignUp();
      })
      .catch((e) => {
        setLoading(false);
        setSuccessful(false);
        console.log(successful);
        console.log(e);
      });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login(email, password))
      .then(() => {
        clearForm();
        handleCloseLogIn();
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  if (isLoggedIn) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      <div className='fixed-top'>
        <MenuBar />
      </div>
      <div id='login-page'>
        <Container>
          <Card>
            <h1>Login</h1>
            <p>For best experience, create an account to save your data.</p>
            <Button
              className='btn btn-primary btn-lg btn-block'
              onClick={handleShowSignUp}
            >
              Sign Up
            </Button>
            <Button
              className='btn btn-primary btn-lg btn-block'
              onClick={handleShowLogIn}
            >
              Log In
            </Button>
            <Button
              className='btn btn-primary btn-lg btn-block'
              onClick={handleShowNoLogIn}
            >
              Use Without Account
            </Button>
            {/* <Button className="btn btn-primary btn-lg btn-block btn-link" id="nologin-button" href="https://nologin.bfi250.com/" target="_blank" rel="noreferrer">Use Without Account</Button> */}
          </Card>
          <Card>
            <Card.Body>
              <h2>Mobile App</h2>
              <p>The mobile app is available through Expo Go:</p>
              <img
                src={qrCode}
                className='rounded center'
                id='qr-code'
                alt=''
              />
            </Card.Body>
          </Card>
        </Container>

        {/* Sign Up Modal */}
        <Modal show={showSignUp} onHide={handleCloseSignUp} centered>
          <Modal.Header closeButton>
            <Modal.Title>Create Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => handleRegistration(e)}>
              <Form.Group className='mb-3' controlId='formBasicName'>
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter User Name'
                  value={name}
                  onChange={(e) => handleNameChange(e.target.value)}
                />
                <Form.Text className='text-muted'>
                  Call yourself whatever you want.
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
                <Form.Text className='text-muted'>
                  Remember your password. We can't retrieve it.
                </Form.Text>
              </Form.Group>
              <Button variant='primary' type='submit'>
                {submitText}
              </Button>
              <p style={{ color: 'red' }}>{messageToDisplay}</p>
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
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                {submitText}
              </Button>
              <p style={{ color: 'red' }}>{messageToDisplay}</p>
            </Form>
          </Modal.Body>
        </Modal>

        {/* No Login Modal */}
        <Modal show={showNoLogin} onHide={handleCloseNoLogIn} centered>
          <Modal.Header closeButton>
            <Modal.Title>Leaving bfi250.com</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Clicking below will take you to an older version of the website,
              at subdomain 'nologin.bfi250.com'.
            </p>
            <p>
              This site only displays the 2012 set of films, and will save your
              activity to your browser's local storage.
            </p>
            <Form>
              <Button
                className='btn btn-primary btn-lg btn-block btn-link'
                id='nologin-button'
                href='https://nologin.bfi250.com/'
                target='_blank'
                rel='noreferrer'
              >
                Go to: nologin.bfi250.com
              </Button>
              <Button
                className='btn btn-primary btn-lg btn-block'
                variant='primary'
                onClick={handleCloseNoLogIn}
              >
                Cancel
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
      <OtherFooter />
    </div>
  );
};

export default Login;
