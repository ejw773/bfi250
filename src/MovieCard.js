import React from 'react';
import './MovieCard.css'
import Badge from './Badge'

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleSeenButton = this.handleSeenButton.bind(this);
        this.handleUnseenButton = this.handleUnseenButton.bind(this);
        this.handleSkipButton = this.handleSkipButton.bind(this);
        this.handleUnskipButton = this.handleUnskipButton.bind(this);
    }
        handleSeenButton(event) {
            console.log("You clicked the 'Seen' button.")
            console.log(event)
        }
        handleUnseenButton() {
            console.log("You clicked the 'Unseen' button.")
        }
        handleSkipButton() {
            console.log("You clicked the 'Skip' button.")
        }
        handleUnskipButton() {
            console.log("You clicked the 'Unskip' button.")
        }
    render () {
        let imdbLink = "https://www.imdb.com/title/" + this.props.imdbID + "/";
        return (
            <div className="card card-group" style={{width: "18rem"}}>
                <div className="poster">
                    <a href={imdbLink} target="_blank" rel="noreferrer"><img src={this.props.poster} class="card-img-top" alt={this.props.title} /></a>
                </div>
                <div className="card-body">
                    <div className="status-container">
                        <Badge viewStatus={this.props.viewStatus}/>
                    </div>
                    <h5 className="card-title">{this.props.bfiRank}. {this.props.title} ({this.props.year})</h5>
                    <p className="card-text">Director: {this.props.director}</p>
                    <div className="button-container">
                    
                        {this.props.viewStatus==='see'
                        ?
                            <div className="status-buttons">
                                <button onClick={this.handleSeenButton} className="btn btn-success">Seen</button>
                                <button onClick={this.handleSkipButton} className="btn btn-danger">Skip</button>
                            </div>
                        :
                            <div className="empty-div" />
                        }

                        {this.props.viewStatus==='seen'
                        ? 
                            <div className="status-buttons">
                                <button onClick={this.handleUnseenButton} className="btn btn-warning">Unseen</button>
                            </div>  
                        :
                            <div className="empty-div" />
                        }
                    
                        {this.props.viewStatus==='skip'
                        ?
                            <div className="status-buttons">
                                <button onClick={this.handleUnskipButton} className="btn btn-secondary">Unskip</button> 
                            </div>
                        :
                            <div className="empty-div" />
                        }


                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;