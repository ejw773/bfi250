// This is done

import React from 'react';
import './App.css';
import ProgressBar from './ProgressBar';
import Footer from './Footer';
import RenderCards from './RenderCards';
import { connect } from 'react-redux';

const App = (props) => {

  // Variable containing all the films
  const allFilms = props.movieData.BFI2012;

  // Filter by any string entered in the search bar
  let titlesToSearch = allFilms.filter(film => film.title.toLowerCase().includes(props.searchTitle.toLowerCase()))

  // Create sets of films based on seenStatus
  // KNOWN BUG: If the films are all marked "Seen" or "Skipped", then un-marked, clicking "To See" in the progress bar brings up nothing
  let filmsSeen = titlesToSearch.filter(film => props.seenStatus[film.imdbID]===true);
  let filmsSkipped = titlesToSearch.filter(film => props.seenStatus[film.imdbID]===false);
  // let filmsToSee = titlesToSearch.filter(film => props.seenStatus[film.imdbID]===undefined || null);
  let filmsToSee = titlesToSearch.filter(film => typeof (props.seenStatus[film.imdbID])!=='boolean');


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


export default connect(mapStateToProps, null)(App);