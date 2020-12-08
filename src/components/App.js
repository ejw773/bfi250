import React from 'react'
import './App.css'
import ProgressBar from './ProgressBar'
import Footer from './Footer'
import RenderCards from './RenderCards'
import bfiData from './Data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = bfiData;

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
          />
        </div>
        {
          this.state.showSet==='filmsSeen' ?
          <RenderCards BFI={filmsSeen} /> :
          this.state.showSet==='filmsSkipped' ?
          <RenderCards BFI={filmsSkipped} /> :
          this.state.showSet==='filmsToSee' ?
          <RenderCards BFI={filmsToSee} /> :
          <RenderCards BFI={allFilms} />
        }
        <Footer />
      </div>
    )
  }
}

export default App;
