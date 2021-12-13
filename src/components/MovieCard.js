import React from 'react';
import { useSelector } from 'react-redux';
import './MovieCard.css';
import Badge from './Badge';
import CardButtons from './CardButtons';

const MovieCard = (props) => {
  let seenStatus = {};
  const pulledSeenStatus = useSelector((state) => state.seenStatus.seenStatus);
  if (pulledSeenStatus) {
    seenStatus = pulledSeenStatus;
  }
  let imdbLink = 'https://www.imdb.com/title/' + props.imdbID + '/';
  return (
    <div className='card card-group' style={{ width: '18rem' }}>
      <div className='poster'>
        <Badge seenStatus={seenStatus[props.imdbID]} />
        <a href={imdbLink} target='_blank' rel='noreferrer'>
          <img
            src={props.poster}
            style={{ height: '400px' }}
            className='card-img-top'
            alt={props.title}
          />
        </a>
        <div className='card-body align-self-end'>
          <div className='button-container view-status-buttons align-self-end'>
            <CardButtons
              seenStatus={seenStatus[props.imdbID]}
              id={props.imdbID}
            />
          </div>
        </div>
      </div>
      <div className='card-body'>
        <h5 className='card-title'>
          {props.bfiRank}. {props.title} ({props.year})
        </h5>
        <p className='card-text'>Director: {props.director}</p>
      </div>
    </div>
  );
};

export default MovieCard;
