import {
    TOGGLE_SEEN_STATUS,
    SEARCH_TITLE,
    CHANGE_SHOW_SET,
    UPDATE_STATS
} from './actionTypes';

export const toggleSeenStatus = (bfiID, toggleAction) => {
    return {
        type: TOGGLE_SEEN_STATUS,
        payload: {
            bfiID: bfiID,
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

export const updateStats = (newStats) => {
    return {
        type: UPDATE_STATS,
        payload: {
            [newStats.key]: newStats.key,
            [newStats.value]: newStats.value            
        }
    }
}