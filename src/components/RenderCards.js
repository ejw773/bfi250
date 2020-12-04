import React from 'react';
import MovieCard from './MovieCard'

class RenderCards extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div className="films-container">
          {this.props.BFI.map((film) => (
            <MovieCard
              key={film.imdbID}
              title={film.title}
              director={film.director}
              year={film.year}
              bfiRank={film.bfiRank}
              poster={film.poster}
              imdbID={film.imdbID}
              viewStatus={film.viewStatus}
            />
          ))}
        </div>
        )
    }
}

export default RenderCards;