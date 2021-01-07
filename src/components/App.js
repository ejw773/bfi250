import React from 'react'
import './App.css'
import ProgressBar from './ProgressBar'
import Footer from './Footer'
import RenderCards from './RenderCards'
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Create variables containing the sets of films to be rendered
    const allFilms = this.props.movieData.BFI2012;
    let titlesToSearch = allFilms.filter(film => film.title.toLowerCase().includes(this.props.searchTitle.toLowerCase()))
    let filmsSeen = titlesToSearch.filter(film => this.props.seenStatus[film.imdbID]===true);
    let filmsSkipped = titlesToSearch.filter(film => this.props.seenStatus[film.imdbID]===false);
    let filmsToSee = titlesToSearch.filter(film => this.props.seenStatus[film.imdbID]===undefined);
    let showTheseFilms = this.props.showSet.showSet;

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
