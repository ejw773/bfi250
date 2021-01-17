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

export function fetchStatus() {
    return async function fetchStatusThunk(dispatch, getState) {
        console.log("initial fetch fired");
        try {
            const response = await bfiAPI.get('/status/1');
            let theData = response.data;
            let formattedData = {};
            let i;
            for (i = 0; i < theData.length; i++) {
              let theID = theData[i].imdbID;
              let theStatus = theData[i].status;
              formattedData = {
                  ...formattedData,
                  [theID]: theStatus
              }
            }
            console.log(formattedData);
              dispatch({
                  type: FETCH_STATUS_SUCCESS,
                  payload: formattedData
              })
        } catch(err) {
            console.log(err);
            dispatch({
                type: FETCH_STATUS_FAILURE,
                payload: err
            });
        }
    }
}

export function toggleSeenStatus(imdbID, toggleAction) {
    return async function toggleStatusThunk(dispatch, getState) {
        try {
            const response = await bfiAPI.post('/status', { userID: 1, imdbID: imdbID, status: toggleAction });
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

export function deleteSeenStatus(imdbID) {
    console.log(`Removing ${imdbID}`)
    return async function toggleStatusThunk(dispatch, getState) {
        try {
            const response = await bfiAPI.delete(`/delete/1/${imdbID}`);
            dispatch({
                type: REMOVE_STATUS_SUCCESS,
                payload: response.data
            });
        } catch(err) {
            dispatch({
                type: REMOVE_STATUS_FAILURE,
                payload: err
            });
        }
    }
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
