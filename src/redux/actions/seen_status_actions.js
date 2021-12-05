import {
    TOGGLE_SEEN_STATUS_SUCCESS,
    TOGGLE_SEEN_STATUS_FAIL,

    DELETE_SEEN_STATUS_SUCCESS,
    DELETE_SEEN_STATUS_FAIL,

    GET_SEEN_STATUS_SUCCESS,
    GET_SEEN_STATUS_FAIL
} from '../actionTypes'

import SeenStatusService from '../../services/seen-status-service'

export const getSeenStatus = () => (dispatch) => {
    return SeenStatusService.getSeenStatus().then(
        (response) => {
            dispatch({
                type: GET_SEEN_STATUS_SUCCESS,
                payload: response
            });
            return Promise.resolve()
        },
        (error) => {
            console.log(error)
            dispatch({
                type: GET_SEEN_STATUS_FAIL,
            });
            return Promise.reject();
        }
    )
}

export const deleteSeenStatus = (imdbID) => (dispatch) => {
    return SeenStatusService.deleteSeenStatus(imdbID).then(
        (response) => {
            dispatch({
                type: DELETE_SEEN_STATUS_SUCCESS,
                payload: imdbID
            });
            return Promise.resolve()
        },
        (error) => {
            console.log(error)
            dispatch({
                type: DELETE_SEEN_STATUS_FAIL,
            });
            return Promise.reject();
        }
    )
}

export const toggleSeenStatus = (film, seenStatus) => (dispatch) => {
    return SeenStatusService.updateSeenStatus(film, seenStatus).then(
        (response) => {
            dispatch({
                type: TOGGLE_SEEN_STATUS_SUCCESS,
                payload: {
                    film, seenStatus
                }
            });
            return Promise.resolve()
        },
        (error) => {
            console.log(error)
            dispatch({
                type: DELETE_SEEN_STATUS_FAIL,
            });
            return Promise.reject();
        }
    )
}