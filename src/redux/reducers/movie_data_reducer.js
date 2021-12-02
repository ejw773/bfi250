import {
  GET_FILMS_SUCCESS,
  GET_FILMS_FAIL
} from '../actionTypes'

const initialState = {};

export default function movieData(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_FILMS_SUCCESS:
      return {
        ...state,
        films: payload
      }
    default: return state;
  };
}
