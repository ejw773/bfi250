import {
    TOGGLE_SEEN_STATUS,
    SEARCH_TITLE,
    CHANGE_SHOW_SET
} from '../actionTypes';

export const toggleSeenStatus = (imdbID, toggleAction) => {
    return {
        type: TOGGLE_SEEN_STATUS,
        payload: {
            imdbID: imdbID,
            toggleAction: toggleAction
        }
    }
};

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
