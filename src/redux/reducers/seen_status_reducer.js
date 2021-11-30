import { TOGGLE_SEEN_STATUS } from '../actionTypes';

const initialState = {
};

export default function seenStatus(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_SEEN_STATUS: {
            return {
                ...state,
                [action.payload.imdbID]: action.payload.toggleAction
            };            
        }
        default: return state;
    }
}
