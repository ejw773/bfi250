import React from 'react';

class CardButtons extends React.Component {
    constructor(props) {
        super(props);
        this.handleSeenButton = this.handleSeenButton.bind(this);
        this.handleUnseenButton = this.handleUnseenButton.bind(this);
        this.handleSkipButton = this.handleSkipButton.bind(this);
        this.handleUnskipButton = this.handleUnskipButton.bind(this);
    }

    handleSeenButton(event) {
        console.log("You clicked the 'Seen' button.")
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


    render() {
    return (
        this.props.viewStatus===true
        ?
        <div className="status-buttons">
            <button onClick={this.props.setToUnseen} className="btn btn-warning" id={this.props.id}>Unseen</button>
        </div>
        :
        this.props.viewStatus===false
        ?
        <div className="status-buttons">
            <button onClick={this.props.setToUnskip} className="btn btn-secondary" id={this.props.id}>Unskip</button> 
        </div>
        :
        <div className="status-buttons">
            <button onClick={this.props.setToSeen} className="btn btn-success" id={this.props.id}>Seen</button>
            <button onClick={this.props.setToSkip} className="btn btn-danger" id={this.props.id}>Skip</button>
        </div>
    )
    }
}
export default CardButtons;