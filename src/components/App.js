import React from 'react'
import './App.css'
import ProgressBar from './ProgressBar'
import Footer from './Footer'
import RenderCards from './RenderCards'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BFI2012: [
    {
      title: "Vertigo",
      director: "Alfred Hitchcock",
      year: "1958",
      bfiRank: "1",
      imdbID: "tt0052357",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "Citizen Kane",
      director: "Orson Welles",
      year: "1941",
      bfiRank: "2",
      imdbID: "tt0033467",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Tokyo Story",
      director: "Ozu Yasujiro",
      year: "1953",
      bfiRank: "3",
      imdbID: "tt0046438",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BYWQ4ZTRiODktNjAzZC00Nzg1LTk1YWQtNDFmNDI0NmZiNGIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "The Rules of the Game",
      director: "Jean Renoir",
      year: "1939",
      bfiRank: "4",
      imdbID: "tt0031885",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BYTE4NjYxMGEtZmQxZi00YWVmLWJjZTctYTJmNDFmZGEwNDVhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Sunrise",
      director: "F. W. Murnau",
      year: "1927",
      bfiRank: "5",
      imdbID: "tt0018455",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BNDVkYmYwM2ItNzRiMy00NWQ4LTlhMjMtNDI1ZDYyOGVmMzJjXkEyXkFqcGdeQXVyNTgzMzU5MDI@._V1_SX300.jpg"
    },
    {
      title: "2001: A Space Odyssey",
      director: "Stanley Kubrick",
      year: "1968",
      bfiRank: "6",
      imdbID: "tt0062622",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "The Searchers",
      director: "John Ford",
      year: "1956",
      bfiRank: "7",
      imdbID: "tt0049730",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BYWQ3YWJiMDEtMDBhNS00YjY1LTkzNmEtY2U4Njg4MjQ3YWE3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Man with a Movie Camera",
      director: "Dziga Vertov",
      year: "1929",
      bfiRank: "8",
      imdbID: "tt0019760",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BYTc3NGVlN2QtYWJlZi00YjhjLThiZjctZDA1MmE1NGI4ZmE4XkEyXkFqcGdeQXVyODQyNDU4OTk@._V1_SX300.jpg"
    },
    {
      title: "The Passion of Joan of Arc",
      director: "Carl Theodor Dreyer",
      year: "1928",
      bfiRank: "9",
      imdbID: "tt0019254",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BNjBjNDJiYTUtOWY0OS00OGVmLTg2YzctMTE0NzVhODM1ZWJmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      title: "8 1/2",
      director: "Federico Fellini",
      year: "1963",
      bfiRank: "10",
      imdbID: "tt0056801",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BMTQ4MTA0NjEzMF5BMl5BanBnXkFtZTgwMDg4NDYxMzE@._V1_SX300.jpg"
    },
    {
      title: "Battleship Potemkin",
      director: "Sergei M. Eisenstein",
      year: "1925",
      bfiRank: "11",
      imdbID: "tt0015648",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BMTEyMTQzMjQ0MTJeQTJeQWpwZ15BbWU4MDcyMjg4OTEx._V1_SX300.jpg"
    },
    {
      title: "L’Atalante",
      director: "Jean Vigo",
      year: "1934",
      bfiRank: "12",
      imdbID: "tt0024844",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMGRkOTA2NjYtMDEyOC00MWUxLTkzMjctZmU0MjVjZTQ1MjZlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
    },
    {
      title: "Breathless",
      director: "Jean-Luc Godard",
      year: "1960",
      bfiRank: "13",
      imdbID: "tt0053472",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BNzk5MDk2MjktY2I3NS00ODZkLTk3OTktY2Q3ZDE2MmQ2M2ZmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "Apocalypse Now",
      director: "Francis Ford Coppola",
      year: "1979",
      bfiRank: "14",
      imdbID: "tt0078788",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZDEyNDU4MmQyNzFkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Late Spring",
      director: "Ozu Yasujiro",
      year: "1949",
      bfiRank: "15",
      imdbID: "tt0041154",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BNzQyMzMzMDUtNWVhYi00MzVmLTg3NDYtNjE4ZWQxNmIzY2YxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      title: "Au Hasard Balthazar",
      director: "Robert Bresson",
      year: "1966",
      bfiRank: "16",
      imdbID: "tt0060138",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMmM4ZmE0NzktNzQ5MS00ZWU2LTlmMjMtNmJmNzM4MWVmYTA0XkEyXkFqcGdeQXVyMTA2ODMzMDU@._V1_SX300.jpg"
    },
    {
      title: "Seven Samurai",
      director: "Akira Kurosawa",
      year: "1954",
      bfiRank: "17",
      imdbID: "tt0047478",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      title: "Persona",
      director: "Ingmar Bergman",
      year: "1966",
      bfiRank: "17",
      imdbID: "tt0060827",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMTM0YzExY2EtMjUyZi00ZmIwLWFkYTktNjY5NmVkYTdkMjI5XkEyXkFqcGdeQXVyNzQxNDExNTU@._V1_SX300.jpg"
    },
    {
      title: "Mirror",
      director: "Andrei Tarkovsky",
      year: "1974",
      bfiRank: "19",
      imdbID: "tt0072443",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMTg1MDg3OTk3M15BMl5BanBnXkFtZTgwMDEzMzE5MTE@._V1_SX300.jpg"
    },
    {
      title: "Singin’ in the Rain",
      director: "Gene Kelly/Stanley Donen",
      year: "1951",
      bfiRank: "20",
      imdbID: "tt0045152",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
    },
    {
      title: "L’Avventura",
      director: "Michelangelo Antonioni",
      year: "1960",
      bfiRank: "21",
      imdbID: "tt0053619",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BNmJlYTVjZTYtZDg1Yy00NzFiLWJmYzYtYTJhMjliY2I2ZTlhXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg"
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: "1972",
      bfiRank: "21",
      imdbID: "tt0068646",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Contempt",
      director: "Jean-Luc Godard",
      year: "1963",
      bfiRank: "21",
      imdbID: "tt0057345",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BMGNhNjYxYmUtMGI5Zi00N2MxLTkzYTctYjEyNWQ1YTk4MTc0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg"
    },
    {
      title: "Rashomon",
      director: "Akira Kurosawa",
      year: "1950",
      bfiRank: "24",
      imdbID: "tt0042876",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BMjEzMzA4NDE2OF5BMl5BanBnXkFtZTcwNTc5MDI2NQ@@._V1_SX300.jpg"
    },
    {
      title: "Ordet",
      director: "Carl Theodor Dreyer",
      year: "1955",
      bfiRank: "24",
      imdbID: "tt0048452",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BYjFjYzQ4ZTgtZGQ3MS00NDE2LTlmOTktYTIwOWIwMWVkYjcxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTc2MDU0NDE@._V1_SX300.jpg"
    },
    {
      title: "In the Mood for Love",
      director: "Wong Kar Wai",
      year: "2000",
      bfiRank: "24",
      imdbID: "tt0118694",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BYjZjODRlMjQtMjJlYy00ZDBjLTkyYTQtZGQxZTk5NzJhYmNmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      title: "Andrei Rublev",
      director: "Andrei Tarkovsky",
      year: "1966",
      bfiRank: "27",
      imdbID: "tt0060107",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BNjM2MjMwNzUzN15BMl5BanBnXkFtZTgwMjEzMzE5MTE@._V1_SX300.jpg"
    },
    {
      title: "Mulholland Drive",
      director: "David Lynch",
      year: "2003",
      bfiRank: "28",
      imdbID: "tt0166924",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BYjBhZmViNTItMGExMy00MGNmLTkwZDItMDVlMTQ4ODVkYTMwXkEyXkFqcGdeQXVyNzM0MTUwNTY@._V1_SX300.jpg"
    },
    {
      title: "Stalker",
      director: "Andrei Tarkovsky",
      year: "1979",
      bfiRank: "29",
      imdbID: "tt0079944",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BMDgwODNmMGItMDcwYi00OWZjLTgyZjAtMGYwMmI4N2Q0NmJmXkEyXkFqcGdeQXVyNzY1MTU0Njk@._V1_SX300.jpg"
    },
    {
      title: "Shoah",
      director: "Claude Lanzmann",
      year: "1985",
      bfiRank: "29",
      imdbID: "tt0090015",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMTYyMTI3NzYxMl5BMl5BanBnXkFtZTcwMzM5ODQxNA@@._V1_SX300.jpg"
    },
    {
      title: "Taxi Driver",
      director: "Martin Scorsese",
      year: "1976",
      bfiRank: "31",
      imdbID: "tt0075314",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "The Godfather, Part II",
      director: "Francis Ford Coppola",
      year: "1974",
      bfiRank: "31",
      imdbID: "tt0071562",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Bicycle Thieves",
      director: "Vittorio de Sica",
      year: "1948",
      bfiRank: "33",
      imdbID: "tt0040522",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BNmI1ODdjODctMDlmMC00ZWViLWI5MzYtYzRhNDdjYmM3MzFjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
      title: "Psycho",
      director: "Alfred Hitchcock",
      year: "1960",
      bfiRank: "34",
      imdbID: "tt0054215",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "The General",
      director: "Buster Keaton",
      year: "1926",
      bfiRank: "34",
      imdbID: "tt0017925",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BYmRiMDFlYjYtOTMwYy00OGY2LWE0Y2QtYzQxOGNhZmUwNTIxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Sátántangó",
      director: "Bela Tarr",
      year: "1994",
      bfiRank: "36",
      imdbID: "tt0111341",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMjU1M2U2NzItYTEyZC00Mzc0LWI2ZjUtODlkZDc0OGIyMGU4XkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_SX300.jpg"
    },
    {
      title: "Metropolis",
      director: "Fritz Lang",
      year: "1927",
      bfiRank: "36",
      imdbID: "tt0017136",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BMTg5YWIyMWUtZDY5My00Zjc1LTljOTctYmI0MWRmY2M2NmRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
      title: "Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles",
      director: "Chantal Akerman",
      year: "1975",
      bfiRank: "36",
      imdbID: "tt0073198",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BMzdmYjM0YmUtNDc0Ny00ZjM5LWFjYzMtZWJmNDVkY2U4ZjA2XkEyXkFqcGdeQXVyODU1OTc0MzI@._V1_SX300.jpg"
    },
    {
      title: "La Dolce Vita",
      director: "Federico Fellini",
      year: "1960",
      bfiRank: "39",
      imdbID: "tt0053779",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BODQ0NzY5NGEtYTc5NC00Yjg4LTg4Y2QtZjE2MTkyYTNmNmU2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "The 400 Blows",
      director: "Francois Truffaut",
      year: "1959",
      bfiRank: "39",
      imdbID: "tt0053198",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BYTQ4MjA4NmYtYjRhNi00MTEwLTg0NjgtNjk3ODJlZGU4NjRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      title: "Pather Panchali",
      director: "Satyajit Ray",
      year: "1955",
      bfiRank: "41",
      imdbID: "tt0048473",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BNDE5YmMxYjEtZjNjNC00NjM2LWE2ZjctOTkyNGMxODRiMGNiXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"
    },
    {
      title: "Journey to Italy",
      director: "Roberto Rossellini",
      year: "1954",
      bfiRank: "41",
      imdbID: "tt0046511",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BNTRiM2E4MGUtOGVkOS00OTIwLTg4MzEtMDEzOThiNTQ2YjY4XkEyXkFqcGdeQXVyNjI5NTk0MzE@._V1_SX300.jpg"
    },
    {
      title: "Pierrot le Fou",
      director: "Jean-Luc Godard",
      year: "1965",
      bfiRank: "43",
      imdbID: "tt0059592",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BMTQ0OTc4MDcxMl5BMl5BanBnXkFtZTgwNjIzMjA0NzE@._V1_SX300.jpg"
    },
    {
      title: "Close-Up",
      director: "Abbas Kiarostami",
      year: "1989",
      bfiRank: "43",
      imdbID: "tt0100234",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMDczY2VmMWQtOTUxMi00YWM5LWE5OTUtNzcxZTQwMWI2MjIzXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Some Like It Hot",
      director: "Billy Wilder",
      year: "1959",
      bfiRank: "43",
      imdbID: "tt0053291",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      title: "Playtime",
      director: "Jacques Tati",
      year: "1967",
      bfiRank: "43",
      imdbID: "tt0062136",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BZGJiMjY4MjAtYzA3OS00MDE3LWJlMGQtOTgzMzRhYmQzZjliXkEyXkFqcGdeQXVyNzM0MTUwNTY@._V1_SX300.jpg"
    },
    {
      title: "Gertrud",
      director: "Carl Theodor Dreyer",
      year: "1964",
      bfiRank: "43",
      imdbID: "tt0058138",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMDYyMTIwYTMtOGRjNC00Njk4LWE1Y2EtYjhhMDJlNDY2MThkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg"
    },
    {
      title: "Histoire(s) du Cinema",
      director: "Jean-Luc Godard",
      year: "1989",
      bfiRank: "48",
      imdbID: "tt6677224",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BZDE2NWEzMmYtYTc1MS00NjRjLWIzOGYtNTUyYTE0ZWZhYTRkXkEyXkFqcGdeQXVyNTI2NTY2MDI@._V1_SX300.jpg"
    },
    {
      title: "The Battle of Algiers",
      director: "Gillo Pontecorvo",
      year: "1966",
      bfiRank: "48",
      imdbID: "tt0058946",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BZWEzMGY4OTQtYTdmMy00M2QwLTliYTQtYWUzYzc3OTA5YzIwXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "City Lights",
      director: "Charlie Chaplin",
      year: "1931",
      bfiRank: "50",
      imdbID: "tt0021749",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Ugetsu Monogatari",
      director: "Mizoguchi Kenji",
      year: "1953",
      bfiRank: "50",
      imdbID: "tt0046478",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BNWRhYTZjMzUtYWJkOC00YjNmLWFmMzctNjI1MjFjOWQ3MmU1XkEyXkFqcGdeQXVyMTIyNzY1NzM@._V1_SX300.jpg"
    },
    {
      title: "La Jetée",
      director: "Chris Marker",
      year: "1962",
      bfiRank: "50",
      imdbID: "tt0056119",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BNmEyNzJmMjEtYWM4ZS00MWE2LTg5NzktNGY2MzkzZmQxMTE4XkEyXkFqcGdeQXVyMjQxNDE0ODg@._V1_SX300.jpg"
    },
    {
      title: "North by Northwest",
      director: "Alfred Hitchcock",
      year: "1959",
      bfiRank: "53",
      imdbID: "tt0053125",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BZDA3NDExMTUtMDlhOC00MmQ5LWExZGUtYmI1NGVlZWI4OWNiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "Rear Window",
      director: "Alfred Hitchcock",
      year: "1954",
      bfiRank: "53",
      imdbID: "tt0047396",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      title: "Raging Bull",
      director: "Martin Scorsese",
      year: "1980",
      bfiRank: "53",
      imdbID: "tt0081398",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BYjRmODkzNDItMTNhNi00YjJlLTg0ZjAtODlhZTM0YzgzYThlXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg"
    },
    {
      title: "M",
      director: "Fritz Lang",
      year: "1931",
      bfiRank: "56",
      imdbID: "tt0022100",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_SX300.jpg"
    },
    {
      title: "The Leopard",
      director: "Luchino Visconti",
      year: "1963",
      bfiRank: "57",
      imdbID: "tt0057091",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BYTgxZjc4NjQtZWJlNS00MTNlLWE3NDQtMmEwZTEyZDMxMjVlXkEyXkFqcGdeQXVyNzMzNzY1OTQ@._V1_SX300.jpg"
    },
    {
      title: "Touch of Evil",
      director: "Orson Welles",
      year: "1958",
      bfiRank: "57",
      imdbID: "tt0052311",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BOTA1MjA3M2EtMmJjZS00OWViLTkwMTEtM2E5ZDk0NTAyNGJiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Sherlock, Jr.",
      director: "Buster Keaton",
      year: "1924",
      bfiRank: "59",
      imdbID: "tt0015324",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BZWFhOGU5NDctY2Q3YS00Y2VlLWI1NzEtZmIwY2ZiZjY4OTA2XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg"
    },
    {
      title: "Barry Lyndon",
      director: "Stanley Kubrick",
      year: "1975",
      bfiRank: "59",
      imdbID: "tt0072684",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BNmY0MWY2NDctZDdmMi00MjA1LTk0ZTQtZDMyZTQ1NTNlYzVjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
    },
    {
      title: "La Maman et la Putain",
      director: "Jean Eustache",
      year: "1973",
      bfiRank: "59",
      imdbID: "tt0070359",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BZjc4YzI0NjQtZjljZC00MzJhLWI4ZjQtMjRlOTFhMTkxM2I2XkEyXkFqcGdeQXVyNTc1NDM0NDU@._V1_SX300.jpg"
    },
    {
      title: "Sansho Dayu",
      director: "Mizoguchi Kenji",
      year: "1954",
      bfiRank: "59",
      imdbID: "tt0047445",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BZGU0YmFmMGEtYjVmZi00N2UxLTkxOWMtMzRjZDFhZDQyYzBhXkEyXkFqcGdeQXVyMTIyNzY1NzM@._V1_SX300.jpg"
    },
    {
      title: "Wild Strawberries",
      director: "Ingmar Bergman",
      year: "1957",
      bfiRank: "63",
      imdbID: "tt0050986",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BYzdkODZlOGItY2RjZC00Mzc5LWI5NzMtZDUyMmNhNjljOWE2XkEyXkFqcGdeQXVyOTk4MjA5NjQ@._V1_SX300.jpg"
    },
    {
      title: "Modern Times",
      director: "Charlie Chaplin",
      year: "1936",
      bfiRank: "63",
      imdbID: "tt0027977",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      title: "Sunset Blvd.",
      director: "Billy Wilder",
      year: "1950",
      bfiRank: "63",
      imdbID: "tt0043014",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_SX300.jpg"
    },
    {
      title: "The Night of the Hunter",
      director: "Charles Laughton",
      year: "1955",
      bfiRank: "63",
      imdbID: "tt0048424",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BYTNjN2M2MzYtZGEwMi00Mzc5LWEwYTMtODM1ZmRiZjFiNTU0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "Pickpocket",
      director: "Robert Bresson",
      year: "1959",
      bfiRank: "63",
      imdbID: "tt0053168",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BZWNlMTM4YTYtNWY4NS00MDQzLTkzOWQtYzU0MGUxOTM3NzI3XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "Rio Bravo",
      director: "Howard Hawks",
      year: "1958",
      bfiRank: "63",
      imdbID: "tt0053221",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BZDVhMTk1NjUtYjc0OS00OTE1LTk1NTYtYWMzMDI5OTlmYzU2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "Blade Runner",
      director: "Ridley Scott",
      year: "1982",
      bfiRank: "69",
      imdbID: "tt0083658",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      title: "Blue Velvet",
      director: "David Lynch",
      year: "1986",
      bfiRank: "69",
      imdbID: "tt0090756",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BM2YxOGQ0N2UtOTRjYy00NjJiLWFhZWEtMjU5ZjgwMjkwZjZlXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"
    },
    {
      title: "Sans Soleil",
      director: "Chris Marker",
      year: "1982",
      bfiRank: "69",
      imdbID: "tt0084628",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMjc4MzliNDQtYjc2Mi00Y2UxLTk2ZTctOGIzMmY3YjFmN2UyXkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_SX300.jpg"
    },
    {
      title: "A Man Escaped",
      director: "Robert Bresson",
      year: "1956",
      bfiRank: "69",
      imdbID: "tt0049902",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BYzMyYTFjYzAtOTczYS00NTU0LTg1Y2EtN2UwN2RkMDNjZDA1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg"
    },
    {
      title: "The Third Man",
      director: "Carol Reed",
      year: "1949",
      bfiRank: "73",
      imdbID: "tt0041959",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BYjE2OTdhMWUtOGJlMy00ZDViLWIzZjgtYjZkZGZmMDZjYmEyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "L’Eclisse",
      director: "Michelangelo Antonioni",
      year: "1962",
      bfiRank: "73",
      imdbID: "tt0056736",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BOTlmZjMxMzctMmE0MS00NmI1LTg5NTktNjc5ODY1ZDg3NmE4XkEyXkFqcGdeQXVyMTIyNzY1NzM@._V1_SX300.jpg"
    },
    {
      title: "Children of Paradise",
      director: "Marcel Carné",
      year: "1945",
      bfiRank: "73",
      imdbID: "tt0037674",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BZjVjYTAzYjctZTZkNi00NmNhLWJkY2UtNjEyOWQ5NTI0MmEzXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
    },
    {
      title: "La Grande Illusion",
      director: "Jean Renoir",
      year: "1937",
      bfiRank: "73",
      imdbID: "tt0028950",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMTg3MTI5NTk0N15BMl5BanBnXkFtZTgwMjU1MDM5MTE@._V1_SX300.jpg"
    },
    {
      title: "Nashville",
      director: "Robert Altman",
      year: "1975",
      bfiRank: "73",
      imdbID: "tt0073440",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BMDY0MzE3YWQtZTAzMS00ZmRlLWE3NzYtMjk0NDlkMmE4N2U2XkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg"
    },
    {
      title: "Chinatown",
      director: "Roman Polanski",
      year: "1974",
      bfiRank: "78",
      imdbID: "tt0071315",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BOGMwYmY5ZmEtMzY1Yi00OWJiLTk1Y2MtMzI2MjBhYmZkNTQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Beau Travail",
      director: "Claire Denis",
      year: "1998",
      bfiRank: "78",
      imdbID: "tt0209933",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BYjRkMGQwMWMtYzkxZC00MjZhLTkwNWYtZGI4NGY4OWI4ZmMyXkEyXkFqcGdeQXVyODU1OTc0MzI@._V1_SX300.jpg"
    },
    {
      title: "Once Upon a Time in the West",
      director: "Sergio Leone",
      year: "1968",
      bfiRank: "78",
      imdbID: "tt0064116",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BZGI5MjBmYzYtMzJhZi00NGI1LTk3MzItYjBjMzcxM2U3MDdiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "The Magnificent Ambersons",
      director: "Orson Welles",
      year: "1942",
      bfiRank: "81",
      imdbID: "tt0035015",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BOTQ4Y2I5MzYtNDJkZS00YTFmLWJkODctMmU3YzQ3ZDhkMWE5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "Lawrence of Arabia",
      director: "David Lean",
      year: "1962",
      bfiRank: "81",
      imdbID: "tt0056172",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
    },
    {
      title: "The Spirit of the Beehive",
      director: "Victor Erice",
      year: "1973",
      bfiRank: "81",
      imdbID: "tt0070040",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BYTNmNTZmYmQtZTA0Mi00OTRiLWI4MGEtMzIwMzQ0NjkzYzZjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
      title: "Fanny and Alexander",
      director: "Ingmar Bergman",
      year: "1984",
      bfiRank: "84",
      imdbID: "tt0083922",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BZmQzMDE5ZWQtOTU3ZS00ZjdhLWI0OTctZDNkODk4YThmOTRhL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "Casablanca",
      director: "Michael Curtiz",
      year: "1942",
      bfiRank: "84",
      imdbID: "tt0034583",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
    },
    {
      title: "The Colour of Pomegranates",
      director: "Sergei Parajanov",
      year: "1968",
      bfiRank: "84",
      imdbID: "tt0063555",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BZmIyMjhhYTktYWI5Yy00YTczLTgzYzktODdkMWMxODk5MGQ3XkEyXkFqcGdeQXVyNzQxNDExNTU@._V1_SX300.jpg"
    },
    {
      title: "Greed",
      director: "Erich von Stroheim",
      year: "1924",
      bfiRank: "84",
      imdbID: "tt0015881",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BNzFhZWQ1MjgtYTNmNy00ZjdhLWEwZDctMzJkYzE5YTQwNjIxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "A Brighter Summer Day",
      director: "Edward Yang",
      year: "1991",
      bfiRank: "84",
      imdbID: "tt0101985",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BOGUwNTg3ODUtMTU5Zi00MDdiLWE0ZmQtMzRhMmZkMWJkNjViXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg"
    },
    {
      title: "The Wild Bunch",
      director: "Sam Peckinpah",
      year: "1969",
      bfiRank: "84",
      imdbID: "tt0065214",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BNGUyYTZmOWItMDJhMi00N2IxLWIyNDMtNjUxM2ZiYmU5YWU1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "Partie de Campagne",
      director: "Jean Renoir",
      year: "1936",
      bfiRank: "90",
      imdbID: "tt0028445",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMTFmMzgwMWEtMDVlNy00MDdhLWJjODEtZjU3MTY3MzhhMjZmXkEyXkFqcGdeQXVyNjI5NTk0MzE@._V1_SX300.jpg"
    },
    {
      title: "Aguirre, Wrath of God",
      director: "Werner Herzog",
      year: "1972",
      bfiRank: "90",
      imdbID: "tt0068182",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BMjRkY2VhYzMtZWQyNS00OTY2LWE5NTAtYjlhNmQyYzE5MmUxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      title: "A Matter of Life and Death",
      director: "Michael Powell/Emeric Pressburger",
      year: "1946",
      bfiRank: "90",
      imdbID: "tt0038733",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BZmQzZjIyN2EtOWI5Ni00ZDgyLTk4NGQtZmQ3ZWRhODIyZTVlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "The Seventh Seal",
      director: "Ingmar Bergman",
      year: "1957",
      bfiRank: "93",
      imdbID: "tt0050976",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BM2I1ZWU4YjMtYzU0My00YmMzLWFmNTAtZDJhZGYwMmI3YWQ5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      title: "Un Chien Andalou",
      director: "Luis Buñuel",
      year: "1929",
      bfiRank: "93",
      imdbID: "tt0020530",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMWJmNGM2ZjMtNjY2OC00Nzk4LTk0MWQtZjkxMWU1M2IyYmI4XkEyXkFqcGdeQXVyMDY4MzkyNw@@._V1_SX300.jpg"
    },
    {
      title: "Intolerance",
      director: "D.W. Griffith",
      year: "1916",
      bfiRank: "93",
      imdbID: "tt0006864",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BZTc0YjA1ZjctOTFlZi00NWRiLWE2MTAtZDE1MWY1YTgzOTJjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "A Once and a Two",
      director: "Edward Yang",
      year: "1999",
      bfiRank: "93",
      imdbID: "tt0244316",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BZDNkMGUyYzUtNjM0ZC00NDM2LWE5ZjEtMjliNzIxMmMzZThhXkEyXkFqcGdeQXVyMzAxNjg3MjQ@._V1_SX300.jpg"
    },
    {
      title: "The Life and Death of Colonel Blimp",
      director: "Michael Powell/Emeric Pressburger",
      year: "1943",
      bfiRank: "93",
      imdbID: "tt0036112",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMzg2MzE5YTktNzc3NC00NTI0LTk3OGMtNzQ5OWE4NmJiZGRhXkEyXkFqcGdeQXVyMTk4MDgwNA@@._V1_SX300.jpg"
    },
    {
      title: "Touki Bouki",
      director: "Djibril Diop Mambety",
      year: "1973",
      bfiRank: "93",
      imdbID: "tt0070820",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BN2ExYmM2NjktODBkYy00NTdmLWI4OTEtMGNiYmE3NzY3ZjM0XkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_SX300.jpg"
    },
    {
      title: "Fear Eats the Soul",
      director: "Rainer Werner Fassbinder",
      year: "1974",
      bfiRank: "93",
      imdbID: "tt0071141",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BMTQ5YzM4MGMtYzIwZS00MjliLTg5NDUtZTUxYjJhNTI1NDU3XkEyXkFqcGdeQXVyNjUwMTQ4NjE@._V1_SX300.jpg"
    },
    {
      title: "Imitation of Life",
      director: "Douglas Sirk",
      year: "1959",
      bfiRank: "93",
      imdbID: "tt0052918",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BNjhiYzRiMzMtODMwZS00OWIwLTk3NTgtYjI1MDMxMDU5OWEzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "Madame de…",
      director: "Max Ophüls",
      year: "1953",
      bfiRank: "93",
      imdbID: "tt0046022",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BOTUzNGU0MzQtOTQ2ZC00MDViLTk0MzctNTFhOGU4ZTU4YjBkXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg"
    },
    {
      title: "Wavelength",
      director: "Michael Snow",
      year: "1967",
      bfiRank: "102",
      imdbID: "tt0127354",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BNzBhYjZjMTItNGQzZS00NTNiLWJlYzItODM4NDBkMmNiZThiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "The Conformist",
      director: "Bernardo Bertolucci",
      year: "1970",
      bfiRank: "102",
      imdbID: "tt0065571",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BODFlYzU4YTItN2EwYi00ODI3LTkwNTQtMDdkNjM3YjMyMTgyXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "The Travelling Players",
      director: "Theodorus Angelopoulos",
      year: "1975",
      bfiRank: "102",
      imdbID: "tt0073800",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BNmY3NmQzMWItMmI3Zi00MmE5LWE0ZTctYTBjY2FjYzBhYzRlXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg"
    },
    {
      title: "Meshes of the Afternoon",
      director: "Maya Deren/Alexander Hammid",
      year: "1943",
      bfiRank: "102",
      imdbID: "tt0036154",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BYzI0ODY4MTgtNjcxZC00Njk5LWI4MjQtZWRhMzU0ZjgwNDlmXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
    },
    {
      title: "Two or Three Things I Know About Her",
      director: "Jean-Luc Godard",
      year: "1967",
      bfiRank: "102",
      imdbID: "tt0060304",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BYmFkYjJmNTYtYWRiMS00YWRkLTgyNzgtMTlmMTljZDE4YzNiXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg"
    },
    {
      title: "The Tree of Life",
      director: "Terence Malick",
      year: "2010",
      bfiRank: "102",
      imdbID: "tt0478304",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMTMwNjQ0NjMzN15BMl5BanBnXkFtZTcwNjMxMTkyNA@@._V1_SX300.jpg"
    },
    {
      title: "Ivan the Terrible, Part I",
      director: "Sergei M. Eisenstein",
      year: "1945",
      bfiRank: "102",
      imdbID: "tt0037824",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BZjI1MWFmMTktOTE3Mi00NjE0LWFlMDctZGNiZThkODI3YTJjXkEyXkFqcGdeQXVyMTE5MjM5Njk3._V1_SX300.jpg"
    },
    {
      title: "Last Year at Marienbad",
      director: "Alain Resnais",
      year: "1961",
      bfiRank: "102",
      imdbID: "tt0054632",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BNTFmMzUzN2ItNmU3OS00ZmQxLTg1ODMtNjJjM2E4OWFkYWI5XkEyXkFqcGdeQXVyNTA1NjYyMDk@._V1_SX300.jpg"
    },
    {
      title: "The Lady Eve",
      director: "Preston Sturges",
      year: "1941",
      bfiRank: "110",
      imdbID: "tt0033804",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BOTQzNWM4Y2QtMWVhYS00MTNkLTgxMGMtNjM5Y2FmNjQ2MWFiXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg"
    },
    {
      title: "Los Olvidados",
      director: "Luis Buñuel",
      year: "1950",
      bfiRank: "110",
      imdbID: "tt0042804",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BODM4OTk1MjI5NV5BMl5BanBnXkFtZTgwNTg0NTQzMjE@._V1_SX300.jpg"
    },
    {
      title: "Bringing Up Baby",
      director: "Howard Hawks",
      year: "1938",
      bfiRank: "110",
      imdbID: "tt0029947",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BMmVkOTRiYmItZjE4NS00MWNjLWE0ZmMtYzg5YzFjMjMyY2RkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "Performance",
      director: "Donald Cammell/Nicolas Roeg",
      year: "1970",
      bfiRank: "110",
      imdbID: "tt0066214",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BODBlMGU1ZjItYTY1NS00MjY4LWJlYWUtNTkxOGE3ZWE5NDYxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "The Passenger",
      director: "Michelangelo Antonioni",
      year: "1974",
      bfiRank: "110",
      imdbID: "tt0073580",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BM2MyODc3OWEtYzRiYS00Yzc5LTliZjMtNTQ1NWFlMDRmZmVlL2ltYWdlXkEyXkFqcGdeQXVyNzM0MDQ1Mw@@._V1_SX300.jpg"
    },
    {
      title: "Viridiana",
      director: "Luis Buñuel",
      year: "1961",
      bfiRank: "110",
      imdbID: "tt0055601",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMDJkYzdmZmUtM2RmNC00ODliLThlNmMtNzFjNWIwOWMyNzkxXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg"
    },
    {
      title: "L’Age d’Or",
      director: "Luis Buñuel",
      year: "1930",
      bfiRank: "110",
      imdbID: "tt0021577",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMmY2NWYyN2MtNTkyNi00MmJkLTkwODAtNWU1ZDQ5OWFkNmY5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
    },
    {
      title: "A Canterbury Tale",
      director: "Michael Powell/Emeric Pressburger",
      year: "1944",
      bfiRank: "117",
      imdbID: "tt0036695",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BNDlhNDliOGQtN2EzYS00Njg4LWIzODgtNWIxNWJjMDU4NzcwXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "Mouchette",
      director: "Robert Bresson",
      year: "1966",
      bfiRank: "117",
      imdbID: "tt0061996",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BM2UwZDEzOWYtOTA5ZC00OTMwLTgyMDctZmIzYmRkODczZDI0XkEyXkFqcGdeQXVyNzQxNDExNTU@._V1_SX300.jpg"
    },
    {
      title: "Dr. Strangelove or How I Stopped Worrying and Learned to Love the Bomb",
      director: "Stanley Kubrick",
      year: "1963",
      bfiRank: "117",
      imdbID: "tt0057012",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Nosferatu",
      director: "F.W. Murnau",
      year: "1922",
      bfiRank: "117",
      imdbID: "tt0013442",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BMTAxYjEyMTctZTg3Ni00MGZmLWIxMmMtOGM2NTFiY2U3MmExXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "The Red Shoes",
      director: "Michael Powell/Emeric Pressburger",
      year: "1948",
      bfiRank: "117",
      imdbID: "tt0040725",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BMzY2MzIwMDQzN15BMl5BanBnXkFtZTcwNDUxMTM4NA@@._V1_SX300.jpg"
    },
    {
      title: "Trouble in Paradise",
      director: "Ernst Lubitsch",
      year: "1932",
      bfiRank: "117",
      imdbID: "tt0023622",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BY2E5ODgyYmQtY2Q0ZS00N2MyLWJhYzktYTliMWEyOWM2OGNiXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg"
    },
    {
      title: "A City of Sadness",
      director: "Hsiao-hsien Hou",
      year: "1989",
      bfiRank: "117",
      imdbID: "tt0096908",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BYzBkNzI3YWYtMWE4MC00Y2JlLWIwOGUtNjVjZDFkMTFhYzhmXkEyXkFqcGdeQXVyNDY5NjU5MDE@._V1_SX300.jpg"
    },
    {
      title: "Amarcord",
      director: "Federico Fellini",
      year: "1972",
      bfiRank: "117",
      imdbID: "tt0071129",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BZDI2OTg2NDQtMzc0MC00MjRiLWI1NzAtMjY2ZDMwMmUyNzBiXkEyXkFqcGdeQXVyNzM0MTUwNTY@._V1_SX300.jpg"
    },
    {
      title: "The Man Who Shot Liberty Valance",
      director: "John Ford",
      year: "1962",
      bfiRank: "117",
      imdbID: "tt0056217",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMGEyNzhkYzktMGMyZS00YzRiLWJlYjktZjJkOTU5ZDY0ZGI4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
    },
    {
      title: "Spring in a Small Town",
      director: "Fei Mu",
      year: "1948",
      bfiRank: "127",
      imdbID: "tt0189219",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMWY3YjZhNjEtZDM0OS00YTc5LTllODctMmY4NWQ3OTAzOGIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Do the Right Thing",
      director: "Spike Lee",
      year: "1989",
      bfiRank: "127",
      imdbID: "tt0097216",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BODA2MjU1NTI1MV5BMl5BanBnXkFtZTgwOTU4ODIwMjE@._V1_SX300.jpg"
    },
    {
      title: "Out 1",
      director: "Jacques Rivette",
      year: "1990",
      bfiRank: "127",
      imdbID: "tt0246135",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMDg4ZmUxY2EtZjA0My00ZjgyLWE3NmItODUwYTY2MGNkM2JhXkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_SX300.jpg"
    },
    {
      title: "Tropical Malady",
      director: "Apichatpong Weerasethakul",
      year: "2004",
      bfiRank: "127",
      imdbID: "tt0381668",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BZTdhZGE5YTktOWE0Ni00OWMyLWFjMjktOTEwOGM0YmQ2MDc4XkEyXkFqcGdeQXVyNDI0NzUxODU@._V1_SX300.jpg"
    },
    {
      title: "The River",
      director: "Jean Renoir",
      year: "1951",
      bfiRank: "127",
      imdbID: "tt0043972",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMzZiYzYwMTktMDkwMi00M2YyLTk1ODQtZjI3YzE2NjdkYTZlXkEyXkFqcGdeQXVyNTEwNDcxNDc@._V1_SX300.jpg"
    },
    {
      title: "Jules et Jim",
      director: "Francois Truffaut",
      year: "1962",
      bfiRank: "127",
      imdbID: "tt0055032",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BZTM1MTRiNDctMTFiMC00NGM1LTkyMWQtNTY1M2JjZDczOWQ3XkEyXkFqcGdeQXVyMDI3OTIzOA@@._V1_SX300.jpg"
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: "1994",
      bfiRank: "127",
      imdbID: "tt0110912",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Meet Me in St. Louis",
      director: "Vincente Minnelli",
      year: "1944",
      bfiRank: "127",
      imdbID: "tt0037059",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BZWVmZmRlNWQtYzYyMy00ZDljLWE5MjgtNDE5MGVmYTQ5NDk0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      title: "L’Argent",
      director: "Robert Bresson",
      year: "1983",
      bfiRank: "127",
      imdbID: "tt0085180",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BY2RlYTc2ZGUtMGFlNS00ZGUxLWEzODYtYjJhY2RmOWRkYzY4L2ltYWdlXkEyXkFqcGdeQXVyNDQzMDg4Nzk@._V1_SX300.jpg"
    },
    {
      title: "Ikiru",
      director: "Akira Kurosawa",
      year: "1952",
      bfiRank: "127",
      imdbID: "tt0044741",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BZmM0NGY3Y2MtMTA1YS00YmQzLTk2YTctYWFhMDkzMDRjZWQzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    },
    {
      title: "Three Colors: Blue",
      director: "Krysztof Kielowski",
      year: "1993",
      bfiRank: "127",
      imdbID: "tt0108394",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BZGJhNDdmMWMtNzZiYy00MmFiLThjNmUtYTE1ZjRkNjdjYmQ5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
      title: "Don’t Look Now",
      director: "Nicolas Roeg",
      year: "1973",
      bfiRank: "127",
      imdbID: "tt0069995",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BNDZmYzJmMDQtM2NkNi00NjU0LTlmZGItNDFjZjVkZjhmNDcyXkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_SX300.jpg"
    },
    {
      title: "Celine and Julie Go Boating",
      director: "Jacques Rivette",
      year: "1974",
      bfiRank: "127",
      imdbID: "tt0071381",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BYzg0NzljOWMtMGY5Mi00NmU2LWIzNzktZDE3YzNlZWMwZWFkXkEyXkFqcGdeQXVyNTc1NDM0NDU@._V1_SX300.jpg"
    },
    {
      title: "Annie Hall",
      director: "Woody Allen",
      year: "1977",
      bfiRank: "127",
      imdbID: "tt0075686",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BZDg1OGQ4YzgtM2Y2NS00NjA3LWFjYTctMDRlMDI3NWE1OTUyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
    },
    {
      title: "The Apartment",
      director: "Billy Wilder",
      year: "1960",
      bfiRank: "127",
      imdbID: "tt0053604",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BNzkwODFjNzItMmMwNi00MTU5LWE2MzktM2M4ZDczZGM1MmViXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg"
    },
    {
      title: "The Last Laugh",
      director: "F.W. Murnau",
      year: "1924",
      bfiRank: "127",
      imdbID: "tt0015064",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BOTBjM2M1Y2ItYTVmMi00NmY0LWIyYjEtNzVhM2UzMzNhMzVkXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_SX300.jpg"
    },
    {
      title: "Hiroshima Mon Amour",
      director: "Alain Resnais",
      year: "1959",
      bfiRank: "127",
      imdbID: "tt0052893",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMzY2NTA1MzUwN15BMl5BanBnXkFtZTgwOTc4NTU4MjE@._V1_SX300.jpg"
    },
    {
      title: "Blow Up",
      director: "Michelangelo Antonioni",
      year: "1966",
      bfiRank: "144",
      imdbID: "tt0060176",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BNWNkOGYzOGYtZGE4OC00NDVjLWExZTYtZWE2YTA3MjI4YThlXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg"
    },
    {
      title: "The Great Dictator",
      director: "Charlie Chaplin",
      year: "1940",
      bfiRank: "144",
      imdbID: "tt0032553",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      title: "Memories of Underdevelopment",
      director: "Tomas Gutierrez Alea",
      year: "1968",
      bfiRank: "144",
      imdbID: "tt0063291",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BZjZlYWU1YjQtNzE1OS00NDQ2LWJkYmEtMThkMGU4ZWFlYWFiXkEyXkFqcGdeQXVyNzQxNDExNTU@._V1_SX300.jpg"
    },
    {
      title: "Diary of a Country Priest",
      director: "Robert Bresson",
      year: "1951",
      bfiRank: "144",
      imdbID: "tt0042619",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BZWI1MDM5NjYtNDg3NC00MDIxLTlkYzItODYwYmU4MTQxM2FhXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg"
    },
    {
      title: "Chungking Express",
      director: "Wong Kar Wai",
      year: "1994",
      bfiRank: "144",
      imdbID: "tt0109424",
      viewStatus: null,
      poster: "https://m.media-amazon.com/images/M/MV5BMGQ5MzljNzYtMDM1My00NmI0LThlYzQtMTg0ZmQ0MTk1YjkxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      title: "To Be or Not To Be",
      director: "Ernst Lubitsch",
      year: "1942",
      bfiRank: "144",
      imdbID: "tt0035446",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BYTIwNDcyMjktMTczMy00NDM5LTlhNDEtMmE3NGVjOTM2YjQ3XkEyXkFqcGdeQXVyNjc0MzMzNjA@._V1_SX300.jpg"
    },
    {
      title: "A Woman Under the Influence",
      director: "John Cassavetes",
      year: "1974",
      bfiRank: "144",
      imdbID: "tt0072417",
      viewStatus: false,
      poster: "https://m.media-amazon.com/images/M/MV5BZDQwZmIzZjAtMmI1YS00NzEwLWFmYmEtMGFkYTk5NTllNDA0XkEyXkFqcGdeQXVyMTA2ODMzMDU@._V1_SX300.jpg"
    },
    {
      title: "Napoleon",
      director: "Abel Gance",
      year: "1927",
      bfiRank: "144",
      imdbID: "tt0018192",
      viewStatus: true,
      poster: "https://m.media-amazon.com/images/M/MV5BZjI4MDEzNTktMGU4ZC00YjFiLTg4OWEtNzNkMWVlY2YwOTdjXkEyXkFqcGdeQXVyNjEwMTA0NTc@._V1_SX300.jpg"
    }

    /*
    ,
    {
      title: "",
      director: "",
      year: "",
      bfiRank: "",
      imdbID: "",
      viewStatus: null,
      poster: ""
    }

*/
  // Below gives the option of adding a new dataset when the new list is released in 2022
  ],
  BFI2022: [

  ],

  // Below the options should be: 'allFilms', 'filmsSeen', 'filmsSkipped', 'filmsToSee'
  showSet: 'allFilms'

}


  }
  render() {
    const allFilms = this.state.BFI2012;
    const filmsSeen = this.state.BFI2012.filter(film => film.viewStatus===true);
    const filmsSkipped = this.state.BFI2012.filter(film => film.viewStatus===false);
    const filmsToSee = this.state.BFI2012.filter(film => film.viewStatus===null);
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
          this.state.showSet==='filmsSeen'
          ?
          <RenderCards BFI={filmsSeen} />
          :
          this.state.showSet==='filmsSkipped'
          ?
          <RenderCards BFI={filmsSkipped} />
          :
          this.state.showSet==='filmsToSee'
          ?
          <RenderCards BFI={filmsToSee} />
          :
          <RenderCards BFI={allFilms} />
        }
        <Footer />
      </div>
    )
  }
}

export default App;
