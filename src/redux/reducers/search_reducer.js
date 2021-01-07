import { SEARCH_TITLE } from '../actionTypes';

const initialState = {
    title: "Napoleon"
};

export default function searchTitle(state = initialState, action) {
    console.log(action.payload)
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
