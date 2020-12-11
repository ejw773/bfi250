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
    this.setToSeen = this.setToSeen.bind(this);
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

  setToSeen(event) {
    let selectedImdbID = event.target.id;
    let changeMeArray = this.state.BFI2012.filter(thisFilm => thisFilm.imdbID===selectedImdbID);
    let changeMe = changeMeArray[0];
    console.log(changeMe.title)
    console.log(changeMe.viewStatus);
    this.setState(prevState => ({
      BFI2012: {
        ...prevState.BFI2012,
          
      }
    }))

    // this.setState((prevState) => {
    //   return {
    //     ...prevState,
    //     viewStatus: true
    //   }
    // })
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
          <RenderCards BFI={filmsSeen} /> :
          this.state.showSet==='filmsSkipped' ?
          <RenderCards setToSeen={this.setToSeen} BFI={filmsSkipped} /> :
          this.state.showSet==='filmsToSee' ?
          <RenderCards setToSeen={this.setToSeen} BFI={filmsToSee} /> :
          <RenderCards setToSeen={this.setToSeen} BFI={allFilms} />
        }
        <Footer />
      </div>
    )
  }
}

export default App;
