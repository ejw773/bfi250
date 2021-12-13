import { CHANGE_SHOW_SET } from '../actionTypes';

const initialState = {
  showSet: 'view-all',
};

export default function showSet(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SHOW_SET: {
      return {
        ...state,
        showSet: action.payload.newSet,
      };
    }
    default:
      return state;
  }
}
