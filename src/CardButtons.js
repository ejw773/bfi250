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


    render() {
        
    return (
        this.props.viewStatus===true
        ?
        <div className="status-buttons">
            <button onClick={this.handleUnseenButton} className="btn btn-warning">Unseen</button>
        </div>
        :
        this.props.viewStatus==false
        ?
        <div className="status-buttons">
            <button onClick={this.handleUnskipButton} className="btn btn-secondary">Unskip</button> 
        </div>
        :
        <div className="status-buttons">
            <button onClick={this.handleSeenButton} className="btn btn-success">Seen</button>
            <button onClick={this.handleSkipButton} className="btn btn-danger">Skip</button>
        </div>
    )
    }
}
export default CardButtons;