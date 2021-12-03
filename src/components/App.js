import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './App.css';
import getFilms from '../redux/actions/films'
import ProgressBar from './ProgressBar';
import Footer from './Footer';
import RenderCards from './RenderCards';

import { API_URL } from '../api/apiUrl'
console.log(`Data being pulled from: ${API_URL}`)

const App = () => {
//  const [films, setFilms] = useState({})

  const user = useSelector((state) => state.auth)
  console.log(user.email)
  const showSet = useSelector((state => state.showSet))
  const searchTitle = useSelector((state) => state.searchTitle.title)

  const filmSet = user.filmSet

  const films = useSelector((state) => state.movieData.films)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFilms(filmSet))
  }, [])

  if (!user.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  // if (!filmSet || !films) {
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // } else {

    if (films[filmSet] !== undefined) {


    // Variable containing all the films
    const allFilms = films[filmSet];
    // Filter by any string entered in the search bar
    let titlesToSearch = allFilms.filter(film => film.title.toLowerCase().includes(searchTitle.toLowerCase()))
  
    // Create sets of films based on seenStatus
    let filmsSeen = titlesToSearch.filter(film => film.viewStatus)
    let filmsSkipped = titlesToSearch.filter(film => film.viewStatus === false);
    let filmsToSee = titlesToSearch.filter(film => typeof (film.viewStatus)!=='boolean');

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
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>

    )
  }
}


  // }

export default App;