import React from 'react';
import './MovieCard.css'
import Badge from './Badge'
import CardButtons from './CardButtons'

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        let imdbLink = "https://www.imdb.com/title/" + this.props.imdbID + "/";
        return (
            <div className="card card-group" style={{width: "18rem"}}>
                <div className="poster">
                    <Badge viewStatus={this.props.viewStatus}/>
                    <a href={imdbLink} target="_blank" rel="noreferrer"><img src={this.props.poster} style={{height: '400px'}} className="card-img-top" alt={this.props.title} /></a>
                </div>
                <div className="card-body">
                    <div className="status-container">
                    </div>
                    <h5 className="card-title">{this.props.bfiRank}. {this.props.title} ({this.props.year})</h5>
                    <p className="card-text">Director: {this.props.director}</p>
                    <div className="button-container view-status-buttons align-self-end">
                        <CardButtons viewStatus={this.props.viewStatus} toggleSeen={this.props.toggleSeen} toggleSkip={this.props.toggleSkip} id={this.props.imdbID}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;