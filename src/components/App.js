import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './App.css';
import getFilms from '../redux/actions/films';
import { getSeenStatus } from '../redux/actions/seen_status_actions';
import ProgressBar from './ProgressBar';
import Footer from './Footers/MainFooter';
import RenderCards from './RenderCards';
import Loading from './Loading';

const App = () => {
  const user = useSelector((state) => state.auth);
  const filmSet = user?.user?.filmSet;
  const showSet = useSelector((state) => state.showSet);
  const searchTitle = useSelector((state) => state.searchTitle.title);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSeenStatus());
  }, [dispatch]);

  let films = [];
  const allFilms = useSelector((state) => state?.movieData?.films);
  if (allFilms) {
    films = allFilms[filmSet];
  }

  let seenStatus = {};
  const allSeenStatus = useSelector((state) => state.seenStatus.seenStatus);
  if (allSeenStatus) {
    seenStatus = allSeenStatus;
  }

  if (!user?.isLoggedIn) {
    return <Redirect to='/login' />;
  }

  if (films.length === 0) {
    return <Loading />;
  } else {
    let totalFilms = 0;
    let totalSeen = 0;
    let totalSkipped = 0;
    let totalUnseen = 0;

    if (films.length !== 0) {
      totalFilms = films.length;
      totalSeen = films.filter(
        (film) => seenStatus[film.imdbID] === true
      ).length;
      totalSkipped = films.filter(
        (film) => seenStatus[film.imdbID] === false
      ).length;
      totalUnseen = films.filter(
        (film) => typeof seenStatus[film.imdbID] !== 'boolean'
      ).length;
    }

    const showTheseFilms = showSet.showSet;
    const titlesToSearch = films.filter((film) =>
      film.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    const filmsSeen = titlesToSearch.filter(
      (film) => seenStatus[film.imdbID] === true
    );
    const filmsSkipped = titlesToSearch.filter(
      (film) => seenStatus[film.imdbID] === false
    );
    const filmsToSee = titlesToSearch.filter(
      (film) => typeof seenStatus[film.imdbID] !== 'boolean'
    );

    return (
      <div>
        <div className='fixed-top'>
          <ProgressBar
            totalFilms={totalFilms}
            totalSeen={totalSeen}
            totalSkipped={totalSkipped}
            totalUnseen={totalUnseen}
          />
        </div>
        {showTheseFilms === 'view-seen' ? (
          <RenderCards BFI={filmsSeen} />
        ) : showTheseFilms === 'view-skipped' ? (
          <RenderCards BFI={filmsSkipped} />
        ) : showTheseFilms === 'view-tosee' ? (
          <RenderCards BFI={filmsToSee} />
        ) : (
          <RenderCards BFI={titlesToSearch} />
        )}
        <Footer />
      </div>
    );
  }
};

export default App;
