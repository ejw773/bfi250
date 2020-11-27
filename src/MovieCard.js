import React from 'react';
import './MovieCard.css'

class MovieCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div className="card" style={{width: "18rem"}}>
            <img src={this.props.poster} class="card-img-top" alt="vertigo" />
            <div className="card-body">
                <div className="status-container">
                    <span className="badge badge-pill badge-success">Seen</span>
                    <span className="badge badge-pill badge-warning">Unseen</span>
                    <span className="badge badge-pill badge-danger">Skipped</span>
                </div>
                <h5 className="card-title">{this.props.bfiRank}. {this.props.title} ({this.props.year})</h5>
                <p className="card-text">Director: {this.props.director}</p>
                <p className="card-text">imdbID: {this.props.imdbID}</p>
                <div className="button-container">
                    <a href="#" className="btn btn-success">Mark Seen</a>
                    <a href="#" className="btn btn-warning">Mark Unseen</a>
                    <a href="#" className="btn btn-danger">Skip</a>
                </div>
            </div>
        </div>
        )
    }
}

export default MovieCard;