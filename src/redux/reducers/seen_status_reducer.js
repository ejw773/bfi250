import { FETCH_STATUS_SUCCESS, TOGGLE_STATUS_SUCCESS, REMOVE_STATUS_SUCCESS } from '../actionTypes';

const initialState = {
    status: {}
};

export default function seenStatus(state = initialState, action) {
    switch(action.type) {
        case FETCH_STATUS_SUCCESS: {
            return {
                ...state,
                status: action.payload || {}
            }
        }
        case TOGGLE_STATUS_SUCCESS: {
            return {
                ...state,
                status: {
                    ...state.status,
                    [action.payload.imdbID]: action.payload.status
                }
            }            
        }
        case REMOVE_STATUS_SUCCESS: {
            return {
                ...state,
                status: {
                    ...state.status,
                    [action.payload.imdbID]: null
                }
            }
        }
        default: return state;
    }
}
