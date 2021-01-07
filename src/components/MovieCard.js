// Maybe this is done?

import React from 'react';
import './MovieCard.css';
import Badge from './Badge';
import CardButtons from './CardButtons';
import { connect } from 'react-redux';

const MovieCard = (props) => {
    let imdbLink = "https://www.imdb.com/title/" + props.imdbID + "/";
    return (
        <div className="card card-group" style={{width: "18rem"}}>
            <div className="poster">
                <Badge viewStatus={props.viewStatus}/>
                <a href={imdbLink} target="_blank" rel="noreferrer"><img src={props.poster} style={{height: '400px'}} className="card-img-top" alt={props.title} /></a>
            </div>
            <div className="card-body">
                <div className="status-container">
                </div>
                <h5 className="card-title">{props.bfiRank}. {props.title} ({props.year})</h5>
                <p className="card-text">Director: {props.director}</p>
                <div className="button-container view-status-buttons align-self-end">
                    <CardButtons viewStatus={props.viewStatus[props.imdbID]} id={props.imdbID}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        viewStatus: state.seenStatus
    }
}

export default connect(mapStateToProps, null)(MovieCard);