import { TOGGLE_SEEN_STATUS } from '../actionTypes';

const initialState = {
    tt0052357: true,
    tt0033467: true,
    tt0031885: false
};

export default function seenStatus(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_SEEN_STATUS: {
            return {
                ...state,
                [action.payload.bfiID]: action.payload.toggleAction
            };            
        }
        default: return state;
    }
}
