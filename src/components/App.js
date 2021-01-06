import React from 'react'
import './App.css'
import ProgressBar from './ProgressBar'
import Footer from './Footer'
import RenderCards from './RenderCards'
import { connect } from 'react-redux';
import { toggleSeenStatus, searchTitle, changeShowSet } from '../redux/actions'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeView = this.changeView.bind(this);
    this.toggleSeen = this.toggleSeen.bind(this);
    this.toggleSkip = this.toggleSkip.bind(this);
  }

  changeView(event) {
    let viewSet = event.target.id;
    this.props.changeShowSet(viewSet);
  }

  toggleSeen(event) {
    let currentID = event.target.id;
    let changeMeArray = this.props.movieData.BFI2012.filter(thisFilm => thisFilm.imdbID===currentID);
    let changeMe = changeMeArray[0];
    changeMe.viewStatus===true ? changeMe.viewStatus = null : changeMe.viewStatus = true;
    this.setState({changeMe})
  }

  toggleSkip(event) {
    let currentID = event.target.id;
    let changeMeArray = this.props.movieData.BFI2012.filter(thisFilm => thisFilm.imdbID===currentID);
    let changeMe = changeMeArray[0];
    changeMe.viewStatus===false ? changeMe.viewStatus = null : changeMe.viewStatus = false;
    this.setState({changeMe})
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
            changeView={this.changeView}
          />
        </div>
        {
          this.props.showSet.showSet==='view-seen' ?
          <RenderCards toggleSeen={this.toggleSeen} toggleSkip={this.toggleSkip} BFI={filmsSeen} /> :
          this.props.showSet.showSet==='view-skipped' ?
          <RenderCards toggleSeen={this.toggleSeen} toggleSkip={this.toggleSkip} BFI={filmsSkipped} /> :
          this.props.showSet.showSet==='view-tosee' ?
          <RenderCards toggleSeen={this.toggleSeen} toggleSkip={this.toggleSkip} BFI={filmsToSee} /> :
          <RenderCards toggleSeen={this.toggleSeen} toggleSkip={this.toggleSkip} BFI={allFilms} />
        }
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  changeShowSet: (newSet) => dispatch(changeShowSet(newSet))
})

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
