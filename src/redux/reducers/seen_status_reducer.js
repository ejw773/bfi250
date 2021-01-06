import {
    TOGGLE_SEEN_STATUS,
    REMOVE_SEEN_STATUS
} from '../actionTypes';

const initialState = {
    tt0052357: true,
    tt0033467: true,
    tt0018455: true,
    tt0062622: true,
    tt0049730: true,
    tt0019760: true,
    tt0019254: true,
    tt0056801: false,
    tt0015648: true,
    tt0053472: false,
    tt0078788: false,
    tt0047478: true,
    tt0045152: true
};

export default function seenStatus(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_SEEN_STATUS: {
            return {
                ...state,
                [action.payload.bfiID]: state.action.payload.toggleAction
            }
        }
        case REMOVE_SEEN_STATUS: {
            return state
        }
    }
    return state;
}
