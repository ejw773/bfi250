import React from 'react';
import './MovieCard.css'
import Badge from './Badge'
import StatusButton from './StatusButton'

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.statusButton = this.statusButton.bind(this);
    }
        statusButton() {
            console.log("You clicked the Seen-Unseen button.")
            // this.setState(state => ({
            //     hasSeen: !state.hasSeen
            // }))
        }

        skipButton() {
            console.log("You clicked the Skip-Unskip button.")
        }
    
    render () {
        let viewStatus = "View Status Not Set";
        let seenStatus = this.props.hasSeen;
        let skippedStatus = this.props.willSkip;
        if (seenStatus===true) {
            viewStatus = "Seen";
            } else if (seenStatus===false && skippedStatus===false) {
                viewStatus = "Unseen";
            } else {
                viewStatus = "Skipped";
            }
        // The following three lines put it into an infinite loop
        // this.setState({
        //     viewStatus: viewStatus
        // })
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src={this.props.poster} class="card-img-top" alt={this.props.title} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.bfiRank}. {this.props.title} ({this.props.year})</h5>
                    <p className="card-text">Director: {this.props.director}</p>
                    <div className="status-container">
                        <Badge hasSeen={this.props.hasSeen} willSkip={this.props.willSkip}/>
                    </div>
                    <div className="button-container">
                    
                        {/* Show "Seen" button if hasSeen is true */}
                        {viewStatus==='Seen' ? 
                            <a onClick={this.statusButton} className="btn btn-warning">Unseen</a> : 
                            <a onClick={this.statusButton} className="btn btn-success">Seen</a>
                        }
                    
                        {/* Show "Unskip" button if willSkip is true */}
                        {viewStatus==='Skipped' ?
                            <a onClick={this.skipButton} className="btn btn-info">Unskip</a> :
                            <a onClick={this.skipButton} className="btn btn-danger">Skip</a>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;