import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './App.css';
import getFilms from '../services/film-service';
import ProgressBar from './ProgressBar';
import Footer from './Footer';
import RenderCards from './RenderCards';

const App = () => {
  const [films, setFilms] = useState({})

  const user = useSelector((state) => state.auth)
  const seenStatus = useSelector((state => state.seenStatus))
  const showSet = useSelector((state => state.showSet))
  const searchTitle = useSelector((state) => state.searchTitle.title)

  const filmSet = user.filmSet
  useEffect(() => {
    getFilms(filmSet).then(
      (response) => {
        setFilms(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])

  if (!user.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  if (!films[filmSet]) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  } else {

    // Variable containing all the films
    const allFilms = films[filmSet];
  
    // Filter by any string entered in the search bar
    let titlesToSearch = allFilms.filter(film => film.title.toLowerCase().includes(searchTitle.toLowerCase()))
  
    // Create sets of films based on seenStatus
    let filmsSeen = titlesToSearch.filter(film => seenStatus[film.imdbID]===true);
    let filmsSkipped = titlesToSearch.filter(film => seenStatus[film.imdbID]===false);
    let filmsToSee = titlesToSearch.filter(film => typeof (seenStatus[film.imdbID])!=='boolean');
  
    // Variable holding the name of the set to be shown, based on seenStatus
    let showTheseFilms = showSet.showSet;
    
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

export default App;