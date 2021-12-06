import {
    SEARCH_TITLE,
    CHANGE_SHOW_SET,
    CHANGE_FILM_SET
} from '../actionTypes';

import AuthService from '../../services/auth-service'

// export const toggleSeenStatus = (imdbID, toggleAction) => {
//     return {
//         type: TOGGLE_SEEN_STATUS,
//         payload: {
//             imdbID: imdbID,
//             toggleAction: toggleAction
//         }
//     }
// };

export const searchTitle = (searchTerms) => {
    return {
        type: SEARCH_TITLE,
        payload: {
            searchTerms: searchTerms
        }
    }
};

export const changeShowSet = (newSet) => {
    return {
        type: CHANGE_SHOW_SET,
        payload: {
            newSet: newSet
        }
    }
};

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
