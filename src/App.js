import React from 'react'
import './Data.js'
import './App.css'
import MovieCard from './MovieCard.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BFI: [
    {
      title: "Vertigo",
      director: "Alfred Hitchcock",
      year: "1958",
      bfiRank: "1",
      imdbID: "tt0052357",
      poster: "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "Citizen Kane",
      director: "Orson Welles",
      year: "1941",
      bfiRank: "2",
      imdbID: "tt0033467",
      poster: "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Tokyo Story",
      director: "Ozu Yasujiro",
      year: "1953",
      bfiRank: "3",
      imdbID: "tt0046438",
      poster: "https://m.media-amazon.com/images/M/MV5BYWQ4ZTRiODktNjAzZC00Nzg1LTk1YWQtNDFmNDI0NmZiNGIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "The Rules of the Game",
      director: "Jean Renoir",
      year: "1939",
      bfiRank: "4",
      imdbID: "tt0031885",
      poster: "https://m.media-amazon.com/images/M/MV5BYTE4NjYxMGEtZmQxZi00YWVmLWJjZTctYTJmNDFmZGEwNDVhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Sunrise",
      director: "F. W. Murnau",
      year: "1927",
      bfiRank: "5",
      imdbID: "tt0018455",
      poster: "https://m.media-amazon.com/images/M/MV5BNDVkYmYwM2ItNzRiMy00NWQ4LTlhMjMtNDI1ZDYyOGVmMzJjXkEyXkFqcGdeQXVyNTgzMzU5MDI@._V1_SX300.jpg"
    },
    {
      title: "2001: A Space Odyssey",
      director: "Stanley Kubrick",
      year: "1968",
      bfiRank: "6",
      imdbID: "tt0062622",
      poster: "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "The Searchers",
      director: "John Ford",
      year: "1956",
      bfiRank: "7",
      imdbID: "tt0049730",
      poster: "https://m.media-amazon.com/images/M/MV5BYWQ3YWJiMDEtMDBhNS00YjY1LTkzNmEtY2U4Njg4MjQ3YWE3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Man with a Movie Camera",
      director: "Dziga Vertov",
      year: "1929",
      bfiRank: "8",
      imdbID: "tt0019760",
      poster: "https://m.media-amazon.com/images/M/MV5BYTc3NGVlN2QtYWJlZi00YjhjLThiZjctZDA1MmE1NGI4ZmE4XkEyXkFqcGdeQXVyODQyNDU4OTk@._V1_SX300.jpg"
    },
    {
      title: "The Passion of Joan of Arc",
      director: "Carl Theodor Dreyer",
      year: "1928",
      bfiRank: "9",
      imdbID: "tt0019254",
      poster: "https://m.media-amazon.com/images/M/MV5BNjBjNDJiYTUtOWY0OS00OGVmLTg2YzctMTE0NzVhODM1ZWJmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      title: "8 1/2",
      director: "Federico Fellini",
      year: "1963",
      bfiRank: "10",
      imdbID: "tt0056801",
      poster: "https://m.media-amazon.com/images/M/MV5BMTQ4MTA0NjEzMF5BMl5BanBnXkFtZTgwMDg4NDYxMzE@._V1_SX300.jpg"
    }

  ]}
  }
  render() {
    console.log(this.state.BFI[1].title);
    return (
      <div className="films-container">
        {this.state.BFI.map((film) => (
          <MovieCard
            key={film.imdbID}
            title={film.title}
            director={film.director}
            year={film.year}
            bfiRank={film.bfiRank}
            poster={film.poster}
            imdbID={film.imdbID}
          />
        ))}
      </div>
    )
  }
}



export default App;
