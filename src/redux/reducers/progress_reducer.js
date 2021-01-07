import { UPDATE_STATS } from '../actionTypes';

const initialState = {
    totalSeen: 75,
    totalSkipped: 50
}

export default function updateStats(state = initialState, action) {
    switch(action.type) {
        case UPDATE_STATS: {
            return {
                ...state,
                [action.payload.key]: action.payload.value
            }
        }
        default: return state;
    }
}