import {
    CHANGE_FILM_SET,
    CHANGE_EMAIL,
    CHANGE_NAME,
    CHANGE_PASSWORD
} from '../actionTypes';

import AuthService from "../../services/auth-service"

export const changeEmail = (newEmail) => {
    return {
        type: CHANGE_EMAIL,
        payload: {
            newEmail: newEmail
        }
    }
}


export const changeName = (newName) => (dispatch) => {
    console.log('action being created for: ' + newName)
    AuthService.changeName(newName);
    dispatch({
      type: CHANGE_NAME,
      payload: {newName}
    })
  }

// export const changeName = (newName) => {
//     console.log(`new name: ${newName}`)
//     return {
//         type: CHANGE_NAME,
//         payload: {
//             newName: newName
//         }
//     }
// }

export const changeFilmSet = (newSet) => {
    return {
        type: CHANGE_FILM_SET,
        payload: {
            newSet: newSet
        }
    }
};

export const changePassword = (newPassword) => {
    return {
        type: CHANGE_PASSWORD,
        payload: {
            passowrd: newPassword
        }
    }
}