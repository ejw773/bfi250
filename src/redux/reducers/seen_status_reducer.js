import { 
    TOGGLE_SEEN_STATUS_SUCCESS,
    DELETE_SEEN_STATUS_SUCCESS,
    GET_SEEN_STATUS_SUCCESS,
    GET_SEEN_STATUS_FAIL
} from '../actionTypes';

const initialState = {};

export default function seenStatus(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case TOGGLE_SEEN_STATUS_SUCCESS:
            console.log('reducer fired')
            const { imdbID, toggleAction } = payload
            return {
                ...state,
                    [imdbID]: toggleAction
            };
        case DELETE_SEEN_STATUS_SUCCESS:
            return {
                ...state,
                
            }
        case GET_SEEN_STATUS_SUCCESS:
            return {
                ...state,
                seenStatus: payload
            }
        case GET_SEEN_STATUS_FAIL:
            return {
                ...state,
                seenStatus: 'Failed to Load'
            }
        default: return state;
    }
}
