import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ProgressBar from './ProgressBar';
import Footer from './Footer';
import RenderCards from './RenderCards';
import { connect } from 'react-redux';

const App = (props) => {
  const [ movies, setMovies ] = useState([])
  const [ allFilms, setAllFilms] = useState([])
  const [ titlesToSearch, setTitlesToSearch ] = useState([])
  const [ filmsSeen, setFilmsSeen ] = useState([])
  const [ filmsSkipped, setFilmsSkipped ] = useState([])
  const [ filmsToSee, setFilmsToSee ] = useState([])
  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    const response = await axios.get('https://cors-anywhere.herokuapp.com/https://bfi250-data.herokuapp.com/films');
    setMovies(response.data);
    console.log("Again")
  // Filter by any string entered in the search bar
  const all = await response.data[2012];
  let titles = await all.filter(film => film.title.toLowerCase().includes(props.searchTitle.toLowerCase()))


// Create sets of films based on seenStatus
  let seen = await titles.filter(film => props.seenStatus[film.imdbID]===true);
  let skipped = await titles.filter(film => props.seenStatus[film.imdbID]===false);
  let toSee = await titles.filter(film => typeof (props.seenStatus[film.imdbID])!=='boolean');
  setAllFilms(all)
  setTitlesToSearch(titles);
  setFilmsSeen(seen);
  setFilmsSkipped(skipped);
  setFilmsToSee(toSee);
  }

  // Variable containing all the films  
  // let allFilms = props.movieData.BFI2012;
  // console.log(movies);


  // Variable holding the name of the set to be shown, based on seenStatus
  let showTheseFilms = props.showSet.showSet;


  return (
    <div>
      <div className="fixed-top">
        <ProgressBar filmSet={allFilms}/>
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