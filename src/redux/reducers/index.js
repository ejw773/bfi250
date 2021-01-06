import { combineReducers } from 'redux';
import movieData from './movie_data_reducer';
import showSet from './show_set_reducer';
import searchTitle from './search_reducer';
import seenFilm from './seen_film_reducer';
import skipFilm from './skip_film_reducer';
import unseenFilm from './unseen_film_reducer';
import unskipFilm from './unskip_film_reducer';

export default combineReducers( {movieData, showSet, searchTitle, seenFilm, skipFilm, unseenFilm, unskipFilm } );
