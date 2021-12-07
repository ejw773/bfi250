import {
    CHANGE_FILM_SET,
    CHANGE_NAME,
    CHANGE_EMAIL,
    CHANGE_PASSWORD
} from '../actionTypes';

import AuthService from "../../services/auth-service"

export const changeFilmSet = (newSet) => (dispatch) => {
    return AuthService.changeFilmSet(newSet).then(
        (response) => {
            dispatch({
                type: CHANGE_FILM_SET,
                payload: {
                    newSet: newSet
                }            
            })
        }
    )
}

export const changeName = (newName) => (dispatch) => {
    AuthService.changeName(newName);
    dispatch({
      type: CHANGE_NAME,
      payload: {newName}
    })
}

export const changeEmail = (newEmail) => (dispatch) => {
    AuthService.changeEmail(newEmail);
    dispatch({
        type: CHANGE_EMAIL,
        payload: {newEmail}
    })
}

export const changePassword = (newPassword) => (dispatch) => {
    AuthService.changePassword(newPassword);
    dispatch({
        type: CHANGE_PASSWORD,
        payload: {}
    })
}