import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './Profile.css';
import MenuBar from './MenuBar'
import ProfileJumbotron from './Profile/ProfileJumbotron'
import NameChangeModal from './Profile/NameChangeModal'
import EmailChangeModal from './Profile/EmailChangeModal'
import PasswordChangeModal from './Profile/ProfileJumbotron'
import LogOutModal from './Profile/LogOutModal'
import DeleteAccountModal from './Profile/DeleteAccountModal';
import OtherFooter from './Footers/OtherFooter'
import { logout, logoutAll, deleteAccount } from '../redux/actions/auth'
import { changeName } from '../redux/actions/user_prefs_actions'
import { clearMessage } from '../redux/actions/message';
import { changeFilmSet, changeShowSet } from '../redux/actions/actions';

const Profile = () => {
    const user = useSelector((state) => state.auth)
    const [nameText, setNameText] = useState('')
    const [deleteMessage, setDeleteMessage] = useState('')

    // Control Name Change
    const [showNameChange, setShowNameChange] = useState(false)
    const handleShowNameChange = () => setShowNameChange(true)
    const handleCloseNameChange = () => setShowNameChange(false)
    
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

            <ProfileJumbotron 
                name={name}
                filmSet={filmSet}
                setSelection={setSelection}
                handleShowNameChange={handleShowNameChange}
                email={email}
                handleShowLogOut={handleShowLogOut}
                handleShowDeleteAccount={handleShowDeleteAccount}
            />

            <NameChangeModal 
                showNameChange={showNameChange}
                handleCloseNameChange={handleCloseNameChange}
                handleNameChange={handleNameChange}
                nameText={nameText}
                setNameText={setNameText}
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

            <OtherFooter />
        </div>
    )
}

export default Profile