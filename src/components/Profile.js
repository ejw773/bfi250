import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import './Profile.css';
import MenuBar from './MenuBar'
import ProfileJumbotron from './Profile/ProfileJumbotron'
import NameChangeModal from './Profile/NameChangeModal'
import EmailChangeModal from './Profile/EmailChangeModal'
import PasswordChangeModal from './Profile/PasswordChangeModal'
import LogOutModal from './Profile/LogOutModal'
import DeleteAccountModal from './Profile/DeleteAccountModal';
import OtherFooter from './Footers/OtherFooter'
import { logout, logoutAll, deleteAccount } from '../redux/actions/auth'
import { changeFilmSet, changeName, changeEmail, changePassword } from '../redux/actions/user_prefs_actions'
import { clearMessage } from '../redux/actions/message';
import { changeShowSet } from '../redux/actions/local_actions';

const Profile = () => {
    const user = useSelector((state) => state.auth)
    const [nameText, setNameText] = useState('')
    const [emailText, setEmailText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    const [deleteMessage, setDeleteMessage] = useState('')

    // Control Name Change
    const [showNameChange, setShowNameChange] = useState(false)
    const handleShowNameChange = () => setShowNameChange(true)
    const handleCloseNameChange = () => setShowNameChange(false)

    // Control Email Change
    const [showEmailChange, setShowEmailChange] = useState(false)
    const handleShowEmailChange = () => setShowEmailChange(true)
    const handleCloseEmailChange = () => setShowEmailChange(false)
    
    // Control Password Change
    const [showPasswordChange, setShowPasswordChange] = useState(false)
    const handleShowPasswordChange = () => setShowPasswordChange(true)
    const handleClosePasswordChange = () => setShowPasswordChange(false)

    // Control Log Out
    const [showLogOut, setShowLogOut] = useState(false)
    const handleShowLogOut = () => setShowLogOut(true)
    const handleCloseLogOut = () => setShowLogOut(false)
    
    // Control Delete Account
    const [showDeleteAccount, setShowDeleteAccount] = useState(false)
    const handleShowDeleteAccount = () => setShowDeleteAccount(true)
    const handleCloseDeleteAccount = () => setShowDeleteAccount(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch])

    const handleNameChange = async (e) => {
        e.preventDefault()
        dispatch(changeName(nameText))
        handleCloseNameChange()
    }

    const handleEmailChange = async (e) => {
        e.preventDefault()
        dispatch(changeEmail(emailText))
        handleCloseEmailChange()
    }

    const handlePasswordChange = async (e) => {
        e.preventDefault()
        dispatch(changePassword(passwordText))
        handleClosePasswordChange()
    }
    
    const handleLogOut = async (e) => {
        e.preventDefault()
        dispatch(logout())
        handleCloseLogOut()
    }

    const handleLogOutAll = (e) => {
        e.preventDefault()
        dispatch(logoutAll())
        handleCloseLogOut()
    }

    const handleDeleteAccount = (e) => {
        e.preventDefault()
        setDeleteMessage('Deleting account. You will be redirected...')
        setTimeout(() => {
            dispatch(deleteAccount())
            handleCloseDeleteAccount()    
        }, 2000)
    }

    if (!user.isLoggedIn) {
        return <Redirect to="/login" />;
    }
    const { name, email, filmSet } = user.user
    const setSelection = (selection) => {
        dispatch(changeFilmSet(selection))
        dispatch(changeShowSet('view-all'))
        return <Redirect to="/" />
    }
    return (
        <div id='profile-page'>
            <MenuBar />
            <Container>
                <Row>
                    <Col>
            <ProfileJumbotron 
                name={name}
                filmSet={filmSet}
                setSelection={setSelection}
                handleShowNameChange={handleShowNameChange}
                handleShowEmailChange={handleShowEmailChange}
                email={email}
                handleShowLogOut={handleShowLogOut}
                handleShowDeleteAccount={handleShowDeleteAccount}
                handleShowPasswordChange={handleShowPasswordChange}
            />

            <NameChangeModal 
                showNameChange={showNameChange}
                handleCloseNameChange={handleCloseNameChange}
                handleNameChange={handleNameChange}
                nameText={nameText}
                setNameText={setNameText}
            />

            <EmailChangeModal 
                showEmailChange={showEmailChange}
                handleCloseEmailChange={handleCloseEmailChange}
                handleEmailChange={handleEmailChange}
                emailText={emailText}
                setEmailText={setEmailText}
            />

            <PasswordChangeModal 
                showPasswordChange={showPasswordChange}
                handleClosePasswordChange={handleClosePasswordChange}
                handlePasswordChange={handlePasswordChange}
                passwordText={passwordText}
                setPasswordText={setPasswordText}
            />

            <LogOutModal 
                showLogOut={showLogOut}
                handleCloseLogOut={handleCloseLogOut}
                handleLogOut={handleLogOut}
                handleLogOutAll={handleLogOutAll}
            />

            <DeleteAccountModal 
                showDeleteAccount={showDeleteAccount}
                handleCloseDeleteAccount={handleCloseDeleteAccount}
                deleteMessage={deleteMessage}
                handleDeleteAccount={handleDeleteAccount}
            />
            </Col>
            </Row>
            </Container>
            <OtherFooter />
        </div>
    )
}

export default Profile