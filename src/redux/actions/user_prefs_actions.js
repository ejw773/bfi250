import {
    CHANGE_FILM_SET,
    CHANGE_EMAIL,
    CHANGE_NAME
} from '../actionTypes';

export const changeEmail = (newEmail) => {
    return {
        type: CHANGE_EMAIL,
        payload: {
            newEmail: newEmail
        }
    }
}

export const changeName = (newName) => {
    return {
        type: CHANGE_NAME,
        payload: {
            newName: newName
        }
    }
}

export const changeFilmSet = (newSet) => {
    return {
        type: CHANGE_FILM_SET,
        payload: {
            newSet: newSet
        }
    }
};