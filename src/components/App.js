import React from 'react'
import './App.css'
import ProgressBar from './ProgressBar'
import Footer from './Footer'
import RenderCards from './RenderCards'
import bfiData from './Data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeView = this.changeView.bind(this);
    this.toggleSeen = this.toggleSeen.bind(this);
    this.toggleSkip = this.toggleSkip.bind(this);
    this.state = bfiData;
  }

  changeView(event) {
    let buttonID = event.target.id;
    let theAction = (
      buttonID==='view-seen' ? 'filmsSeen' :
      buttonID==='view-tosee' ? 'filmsToSee' :
      buttonID==='view-skipped' ? 'filmsSkipped' :
      'allFilms'
    );
    this.setState(state => {
      return {
        ...state,
        showSet: theAction
      }
    })
  }

  toggleSeen(event) {
    let currentID = event.target.id;
    let changeMeArray = this.state.BFI2012.filter(thisFilm => thisFilm.imdbID===currentID);
    let changeMe = changeMeArray[0];
    changeMe.viewStatus===true ? changeMe.viewStatus = null : changeMe.viewStatus = true;
    this.setState({changeMe})
  }

  toggleSkip(event) {
    let currentID = event.target.id;
    let changeMeArray = this.state.BFI2012.filter(thisFilm => thisFilm.imdbID===currentID);
    let changeMe = changeMeArray[0];
    changeMe.viewStatus===false ? changeMe.viewStatus = null : changeMe.viewStatus = false;
    this.setState({changeMe})
  }

  render() {
    const allFilms = this.state.BFI2012;
    const filmsSeen = allFilms.filter(film => film.viewStatus===true);
    const filmsSkipped = allFilms.filter(film => film.viewStatus===false);
    const filmsToSee = allFilms.filter(film => film.viewStatus===null);
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
          this.state.showSet==='filmsSeen' ?
          <RenderCards toggleSeen={this.toggleSeen} toggleSkip={this.toggleSkip} BFI={filmsSeen} /> :
          this.state.showSet==='filmsSkipped' ?
          <RenderCards toggleSeen={this.toggleSeen} toggleSkip={this.toggleSkip} BFI={filmsSkipped} /> :
          this.state.showSet==='filmsToSee' ?
          <RenderCards toggleSeen={this.toggleSeen} toggleSkip={this.toggleSkip} BFI={filmsToSee} /> :
          <RenderCards toggleSeen={this.toggleSeen} toggleSkip={this.toggleSkip} BFI={allFilms} />
        }
        <Footer />
      </div>
    )
  }
}

export default App;
