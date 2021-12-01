import {
    CHANGE_EMAIL,
    CHANGE_NAME,
    CHANGE_FILM_SET
} from '../actionTypes';

const initialState = {};

export default function userPrefsReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_EMAIL:
            console.log('changing email')
            return state
        case CHANGE_NAME:
            console.log('changing user name')
            return state
        case CHANGE_FILM_SET:
            console.log('Changing Film Set')
            return state
        default:
            return state
    }
}
