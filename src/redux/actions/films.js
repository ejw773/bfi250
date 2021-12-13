import { GET_FILMS_SUCCESS, GET_FILMS_FAIL } from '../actionTypes';

import filmService from '../../services/film-service';

const getFilms = (filmSet) => (dispatch) => {
  return filmService(filmSet).then(
    (response) => {
      dispatch({
        type: GET_FILMS_SUCCESS,
        payload: response,
      });
      return Promise.resolve();
    },
    (error) => {
      console.log(error);
      dispatch({
        type: GET_FILMS_FAIL,
      });
      return Promise.reject();
    }
  );
};

export default getFilms;
