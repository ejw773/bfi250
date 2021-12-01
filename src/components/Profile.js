import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import MenuBar from './MenuBar'
import AboutFooter from './AboutFooter'

const Profile = () => {
    const user = useSelector((state) => state.auth.user)
    
    if (!user) {
        return <Redirect to="/login" />;
    }
    const { name, email } = user.user
    return (
        <React.Fragment>
            <MenuBar />
                <div>
                    <h1>Welcome, {name}!</h1>
                    <h2>This is your email:</h2>
                    <h3>{email}</h3>
                </div>
            <AboutFooter />
        </React.Fragment>
    )
}

export default Profile