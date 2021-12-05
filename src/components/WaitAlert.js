import React from 'react'
import { Alert, Spinner } from 'react-bootstrap'

const Wait = () => {
    return (
        <Alert variant='warning'>
            <Alert.Heading>Logging In</Alert.Heading>
            <Spinner animation='border' variant='dark' />
            <p>Please be patient. On occasion, this takes as long as 10 seconds.</p>
        </Alert>
    )
}

export default Wait