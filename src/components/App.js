import React from 'react'
import './App.css'
import ProgressBar from './ProgressBar'
import Footer from './Footer'
import RenderCards from './RenderCards'
import { connect } from 'react-redux';
import { searchTitle } from '../redux/actions'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allFilms = this.props.movieData.BFI2012;
    const filmsSeen = allFilms.filter(film => this.props.seenStatus[film.imdbID]===true);
    const filmsSkipped = allFilms.filter(film => this.props.seenStatus[film.imdbID]===false);
    const filmsToSee = allFilms.filter(film => this.props.seenStatus[film.imdbID]===undefined);

    return (
      <div>
        <div className="fixed-top">
          <ProgressBar 
            seenTotal={filmsSeen.length}
            skippedTotal={filmsSkipped.length}
            totalFilms={allFilms.length}
          />
        </div>
        {
          this.props.showSet.showSet==='view-seen' ?
          <RenderCards BFI={filmsSeen} /> :
          this.props.showSet.showSet==='view-skipped' ?
          <RenderCards BFI={filmsSkipped} /> :
          this.props.showSet.showSet==='view-tosee' ?
          <RenderCards BFI={filmsToSee} /> :
          <RenderCards BFI={allFilms} />
        }
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, null)(App);
