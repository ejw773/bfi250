import { 
    TOGGLE_SEEN_STATUS,
    GET_SEEN_STATUS_SUCCESS,
    GET_SEEN_STATUS_FAIL
} from '../actionTypes';

const initialState = {};

export default function seenStatus(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_SEEN_STATUS: {
            return {
                ...state,
                seenStatus: {
                    [action.payload.imdbID]: action.payload.toggleAction
                }
            };            
        }
        case GET_SEEN_STATUS_SUCCESS:
            return {
                ...state,
                seenStatus: action.payload
            }
        case GET_SEEN_STATUS_FAIL:
            return {
                ...state,
                seenStatus: 'Failed to Load'
            }
        default: return state;
    }
}
