import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard'

const RenderCards = (props) => {
    return (
    <div className="films-container">
      {props.BFI.map((film) => (
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


const mapStateToProps = state => {
  return {
    seenStatus: state.seenStatus
  }
}

export default connect(mapStateToProps, null)(RenderCards);