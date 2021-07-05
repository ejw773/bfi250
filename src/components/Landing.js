import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Landing.css'
import MenuBar from './MenuBar';

class LoginManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    };

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <MenuBar></MenuBar>
                <Landing />
            </div>
        )
    }
}

const Landing = () => {
    return (
        <div id='landing-page'>
            <Link to="/">Take Me to the Progress Bar</Link>
            <Modal.Dialog>
                <Modal.Header closebutton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Login With:</p>
                    <Button>Google</Button>
                    <Button>Facebook</Button>
                    <Button>Github</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default LoginManager;