// This is done

import React from 'react';
import './App.css';
import ProgressBar from './ProgressBar';
import Footer from './Footer';
import RenderCards from './RenderCards';
import { connect } from 'react-redux';
import { updateStats } from '../redux/actions';

const App = (props) => {

  // Create variables containing the sets of films to be rendered
  const allFilms = props.movieData.BFI2012;

  // First, filter by any string entered in the search bar
  let titlesToSearch = allFilms.filter(film => film.title.toLowerCase().includes(props.searchTitle.toLowerCase()))

  // Second, create sets of films based on seenStatus
  let filmsSeen = titlesToSearch.filter(film => props.seenStatus[film.imdbID]===true);

  let filmsSkipped = titlesToSearch.filter(film => props.seenStatus[film.imdbID]===false);

  let filmsToSee = titlesToSearch.filter(film => props.seenStatus[film.imdbID]===undefined);

  // Variable holding the name of the set to be shown, based on seenStatus
  let showTheseFilms = props.showSet.showSet;

  return (
    <div>
      <div className="fixed-top">
        <ProgressBar />
      </div>
      {
        showTheseFilms==='view-seen' ?
        <RenderCards BFI={filmsSeen} /> :
        showTheseFilms==='view-skipped' ?
        <RenderCards BFI={filmsSkipped} /> :
        showTheseFilms==='view-tosee' ?
        <RenderCards BFI={filmsToSee} /> :
        <RenderCards BFI={titlesToSearch} />
      }
      <Footer />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    movieData: state.movieData,
    seenStatus: state.seenStatus,
    showSet: state.showSet,
    searchTitle: state.searchTitle.title
  }
}

const mapDispatchToProps = dispatch => ({
  updateStats: (key, value) => dispatch(updateStats(key, value))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);