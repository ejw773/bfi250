import { SEARCH_TITLE } from '../actionTypes';

const initialState = {
    title: 'Na'
};

export default function searchTitle(state = initialState, action) {
    switch(action.type) {
        case SEARCH_TITLE: {
            return {
                ...state,
                title: action.payload.searchTerms
            };            
        }
        default: return state;
    }
}
