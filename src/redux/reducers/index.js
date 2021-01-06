import { combineReducers } from 'redux';
import movieData from './movie_data_reducer';
import showSet from './show_set_reducer';
import searchTitle from './search_reducer';
import seenStatus from './seen_status_reducer';

export default combineReducers( {movieData, showSet, searchTitle, seenStatus } );
