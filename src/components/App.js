import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './App.css';
import getFilms from '../services/film-service';
import ProgressBar from './ProgressBar';
import Footer from './Footer';
import RenderCards from './RenderCards';
import { connect } from 'react-redux';

const App = (props) => {
  const [apiFilms, setApiFilms] = useState({})
  const user = useSelector((state) => state.auth.user)
  const filmSet = user.filmSet
  console.log(user)
  useEffect(() => {
    getFilms(filmSet).then(
      (response) => {
        setApiFilms(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])

  if (!user) {
    return <Redirect to="/login" />;
  }

  if (!apiFilms[filmSet]) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  } else {

    console.log(apiFilms)

    // Variable containing all the films
    const allFilms = apiFilms[filmSet];
  
    // Filter by any string entered in the search bar
    let titlesToSearch = allFilms.filter(film => film.title.toLowerCase().includes(props.searchTitle.toLowerCase()))
  
    // Create sets of films based on seenStatus
    let filmsSeen = titlesToSearch.filter(film => props.seenStatus[film.imdbID]===true);
    let filmsSkipped = titlesToSearch.filter(film => props.seenStatus[film.imdbID]===false);
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