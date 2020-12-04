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
                    <a href={imdbLink} target="_blank" rel="noreferrer"><img src={this.props.poster} className="card-img-top" alt={this.props.title} /></a>
                </div>
                <div className="card-body">
                    <div className="status-container">
                        <Badge viewStatus={this.props.viewStatus}/>
                    </div>
                    <h5 className="card-title">{this.props.bfiRank}. {this.props.title} ({this.props.year})</h5>
                    <p className="card-text">Director: {this.props.director}</p>
                    <div className="button-container">
                        <CardButtons viewStatus={this.props.viewStatus}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;