import { 
    REMOVE_STATUS_SUCCESS,
    REMOVE_STATUS_FAILURE,
    FETCH_STATUS_SUCCESS,
    FETCH_STATUS_FAILURE,
    TOGGLE_STATUS_SUCCESS,
    TOGGLE_STATUS_FAILURE,
    SEARCH_TITLE,
    CHANGE_SHOW_SET
 } from './actionTypes';
import bfiAPI from '../api/bfi'

export async function fetchStatus(dispatch, getState) {
    console.log("initial fetch fired");
    try {
        const response = await bfiAPI.get('/status/1');
        console.log("initial call for status fired")
        console.log(response.data);
        dispatch({
            type: FETCH_STATUS_SUCCESS,
            payload: response.data
        });
    } catch(err) {
        console.log(err);
        dispatch({
            type: FETCH_STATUS_FAILURE,
            payload: err
        });
    }
}

export function toggleSeenStatus(bfiID, toggleAction) {
    return async function toggleStatusThunk(dispatch, getState) {
        try {
            const response = await bfiAPI.post('/status', { userID: 2, imdbID: bfiID, status: toggleAction });
            dispatch({
                type: TOGGLE_STATUS_SUCCESS,
                payload: response.data
            });
        } catch(err) {
            dispatch({
                type: TOGGLE_STATUS_FAILURE,
                payload: err
            });
        }
    }
}

export const deleteSeenStatus = (imdbID) => {
    
} 

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
