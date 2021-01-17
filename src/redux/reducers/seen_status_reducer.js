import { FETCH_STATUS_SUCCESS, TOGGLE_STATUS_SUCCESS } from '../actionTypes';

const initialState = {
};

export default function seenStatus(state = initialState, action) {
    console.log('seenStatus reducer fired');
    console.log(action.payload)
    switch(action.type) {
        case FETCH_STATUS_SUCCESS: {
            return {
                ...state,
                [action.payload.imdbID]: action.payload.status
            }
        }
        case TOGGLE_STATUS_SUCCESS: {
            return {
                ...state,
                [action.payload.imdbID]: action.payload.status
            };            
        }
        default: return state;
    }
}
