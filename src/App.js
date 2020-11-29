import React from 'react'
import './Data.js'
import './App.css'
import MovieCard from './MovieCard.js'
import Header from './Header'
import Footer from './Footer'


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
      hasSeen: true,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "Citizen Kane",
      director: "Orson Welles",
      year: "1941",
      bfiRank: "2",
      imdbID: "tt0033467",
      hasSeen: true,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Tokyo Story",
      director: "Ozu Yasujiro",
      year: "1953",
      bfiRank: "3",
      imdbID: "tt0046438",
      hasSeen: false,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BYWQ4ZTRiODktNjAzZC00Nzg1LTk1YWQtNDFmNDI0NmZiNGIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "The Rules of the Game",
      director: "Jean Renoir",
      year: "1939",
      bfiRank: "4",
      imdbID: "tt0031885",
      hasSeen: false,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BYTE4NjYxMGEtZmQxZi00YWVmLWJjZTctYTJmNDFmZGEwNDVhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Sunrise",
      director: "F. W. Murnau",
      year: "1927",
      bfiRank: "5",
      imdbID: "tt0018455",
      hasSeen: true,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BNDVkYmYwM2ItNzRiMy00NWQ4LTlhMjMtNDI1ZDYyOGVmMzJjXkEyXkFqcGdeQXVyNTgzMzU5MDI@._V1_SX300.jpg"
    },
    {
      title: "2001: A Space Odyssey",
      director: "Stanley Kubrick",
      year: "1968",
      bfiRank: "6",
      imdbID: "tt0062622",
      hasSeen: true,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "The Searchers",
      director: "John Ford",
      year: "1956",
      bfiRank: "7",
      imdbID: "tt0049730",
      hasSeen: true,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BYWQ3YWJiMDEtMDBhNS00YjY1LTkzNmEtY2U4Njg4MjQ3YWE3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Man with a Movie Camera",
      director: "Dziga Vertov",
      year: "1929",
      bfiRank: "8",
      imdbID: "tt0019760",
      hasSeen: true,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BYTc3NGVlN2QtYWJlZi00YjhjLThiZjctZDA1MmE1NGI4ZmE4XkEyXkFqcGdeQXVyODQyNDU4OTk@._V1_SX300.jpg"
    },
    {
      title: "The Passion of Joan of Arc",
      director: "Carl Theodor Dreyer",
      year: "1928",
      bfiRank: "9",
      imdbID: "tt0019254",
      hasSeen: true,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BNjBjNDJiYTUtOWY0OS00OGVmLTg2YzctMTE0NzVhODM1ZWJmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      title: "8 1/2",
      director: "Federico Fellini",
      year: "1963",
      bfiRank: "10",
      imdbID: "tt0056801",
      hasSeen: false,
      willSkip: true,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BMTQ4MTA0NjEzMF5BMl5BanBnXkFtZTgwMDg4NDYxMzE@._V1_SX300.jpg"
    },
    {
      title: "Battleship Potemkin",
      director: "Sergei M. Eisenstein",
      year: "1925",
      bfiRank: "11",
      imdbID: "tt0015648",
      hasSeen: true,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BMTEyMTQzMjQ0MTJeQTJeQWpwZ15BbWU4MDcyMjg4OTEx._V1_SX300.jpg"
    },
    {
      title: "L’Atalante",
      director: "Jean Vigo",
      year: "1934",
      bfiRank: "12",
      imdbID: "tt0024844",
      hasSeen: false,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BMGRkOTA2NjYtMDEyOC00MWUxLTkzMjctZmU0MjVjZTQ1MjZlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
    },
    {
      title: "Breathless",
      director: "Jean-Luc Godard",
      year: "1960",
      bfiRank: "13",
      imdbID: "tt0053472",
      hasSeen: false,
      willSkip: true,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BNzk5MDk2MjktY2I3NS00ODZkLTk3OTktY2Q3ZDE2MmQ2M2ZmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "Apocalypse Now",
      director: "Francis Ford Coppola",
      year: "1979",
      bfiRank: "14",
      imdbID: "tt0078788",
      hasSeen: false,
      willSkip: true,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZDEyNDU4MmQyNzFkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Late Spring",
      director: "Ozu Yasujiro",
      year: "1949",
      bfiRank: "15",
      imdbID: "tt0041154",
      hasSeen: false,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BNzQyMzMzMDUtNWVhYi00MzVmLTg3NDYtNjE4ZWQxNmIzY2YxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      title: "Au Hasard Balthazar",
      director: "Robert Bresson",
      year: "1966",
      bfiRank: "16",
      imdbID: "tt0060138",
      hasSeen: false,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BMmM4ZmE0NzktNzQ5MS00ZWU2LTlmMjMtNmJmNzM4MWVmYTA0XkEyXkFqcGdeQXVyMTA2ODMzMDU@._V1_SX300.jpg"
    },
    {
      title: "Seven Samurai",
      director: "Akira Kurosawa",
      year: "1954",
      bfiRank: "17",
      imdbID: "tt0047478",
      hasSeen: true,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      title: "Persona",
      director: "Ingmar Bergman",
      year: "1966",
      bfiRank: "17",
      imdbID: "tt0060827",
      hasSeen: false,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BMTM0YzExY2EtMjUyZi00ZmIwLWFkYTktNjY5NmVkYTdkMjI5XkEyXkFqcGdeQXVyNzQxNDExNTU@._V1_SX300.jpg"
    },
    {
      title: "Mirror",
      director: "Andrei Tarkovsky",
      year: "1974",
      bfiRank: "19",
      imdbID: "tt0072443",
      hasSeen: false,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BMTg1MDg3OTk3M15BMl5BanBnXkFtZTgwMDEzMzE5MTE@._V1_SX300.jpg"
    },
    {
      title: "Singin’ in the Rain",
      director: "Gene Kelly/Stanley Donen",
      year: "1951",
      bfiRank: "20",
      imdbID: "tt0045152",
      hasSeen: true,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
    },
    {
      title: "L’Avventura",
      director: "Michelangelo Antonioni",
      year: "1960",
      bfiRank: "21",
      imdbID: "tt0053619",
      hasSeen: false,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BNmJlYTVjZTYtZDg1Yy00NzFiLWJmYzYtYTJhMjliY2I2ZTlhXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg"
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: "1972",
      bfiRank: "21",
      imdbID: "tt0068646",
      hasSeen: false,
      willSkip: true,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Contempt",
      director: "Jean-Luc Godard",
      year: "1963",
      bfiRank: "21",
      imdbID: "tt0057345",
      hasSeen: true,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BMGNhNjYxYmUtMGI5Zi00N2MxLTkzYTctYjEyNWQ1YTk4MTc0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg"
    },
    {
      title: "Rashomon",
      director: "Akira Kurosawa",
      year: "1950",
      bfiRank: "24",
      imdbID: "tt0042876",
      hasSeen: true,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BMjEzMzA4NDE2OF5BMl5BanBnXkFtZTcwNTc5MDI2NQ@@._V1_SX300.jpg"
    },
    {
      title: "Ordet",
      director: "Carl Theodor Dreyer",
      year: "1955",
      bfiRank: "24",
      imdbID: "tt0048452",
      hasSeen: false,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BYjFjYzQ4ZTgtZGQ3MS00NDE2LTlmOTktYTIwOWIwMWVkYjcxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTc2MDU0NDE@._V1_SX300.jpg"
    },
    {
      title: "In the Mood for Love",
      director: "Wong Kar Wai",
      year: "2000",
      bfiRank: "24",
      imdbID: "tt0118694",
      hasSeen: false,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BYjZjODRlMjQtMjJlYy00ZDBjLTkyYTQtZGQxZTk5NzJhYmNmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      title: "Andrei Rublev",
      director: "Andrei Tarkovsky",
      year: "1966",
      bfiRank: "27",
      imdbID: "tt0060107",
      hasSeen: true,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BNjM2MjMwNzUzN15BMl5BanBnXkFtZTgwMjEzMzE5MTE@._V1_SX300.jpg"
    },
    {
      title: "Mulholland Drive",
      director: "David Lynch",
      year: "2003",
      bfiRank: "28",
      imdbID: "tt0166924",
      hasSeen: false,
      willSkip: true,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BYjBhZmViNTItMGExMy00MGNmLTkwZDItMDVlMTQ4ODVkYTMwXkEyXkFqcGdeQXVyNzM0MTUwNTY@._V1_SX300.jpg"
    },
    {
      title: "Stalker",
      director: "Andrei Tarkovsky",
      year: "1979",
      bfiRank: "29",
      imdbID: "tt0079944",
      hasSeen: true,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BMDgwODNmMGItMDcwYi00OWZjLTgyZjAtMGYwMmI4N2Q0NmJmXkEyXkFqcGdeQXVyNzY1MTU0Njk@._V1_SX300.jpg"
    },
    {
      title: "Shoah",
      director: "Claude Lanzmann",
      year: "1985",
      bfiRank: "29",
      imdbID: "tt0090015",
      hasSeen: false,
      willSkip: false,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BMTYyMTI3NzYxMl5BMl5BanBnXkFtZTcwMzM5ODQxNA@@._V1_SX300.jpg"
    },
    {
      title: "Taxi Driver",
      director: "Martin Scorsese",
      year: "1976",
      bfiRank: "31",
      imdbID: "tt0075314",
      hasSeen: false,
      willSkip: true,
      viewStatus: "",
      poster: "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    }


  ]}

  }
  render() {
    let numberSeen = 14;
    let numberUnseen = 11;
    let numberSkipped = 6;

    return (
      <div>
        <Header numberSeen={numberSeen} numberUnseen={numberUnseen} numbrerSkipped={numberSkipped}/>
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
              hasSeen={film.hasSeen}
              willSkip={film.willSkip}
            />
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}



export default App;
