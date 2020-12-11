import React from 'react';

class CardButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
        this.props.viewStatus===true
        ?
        <div className="status-buttons">
            <button onClick={this.props.toggleSeen} className="btn btn-warning" id={this.props.id}>Unseen</button>
        </div>
        :
        this.props.viewStatus===false
        ?
        <div className="status-buttons">
            <button onClick={this.props.toggleSkip} className="btn btn-secondary" id={this.props.id}>Unskip</button> 
        </div>
        :
        <div className="status-buttons">
            <button onClick={this.props.toggleSeen} className="btn btn-success" id={this.props.id}>Seen</button>
            <button onClick={this.props.toggleSkip} className="btn btn-danger" id={this.props.id}>Skip</button>
        </div>
    )
    }
}
export default CardButtons;