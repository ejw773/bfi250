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
            <button onClick={this.props.toggleSeen} className="btn btn-warning view-status-button unseen-button float-left" id={this.props.id}>Unseen</button>
        </div>
        :
        this.props.viewStatus===false
        ?
        <div className="status-buttons">
            <button onClick={this.props.toggleSkip} className="btn btn-secondary view-status-button unskip-button float-right" id={this.props.id}>Unskip</button> 
        </div>
        :
        <div className="status-buttons">
            <button onClick={this.props.toggleSeen} className="btn btn-success view-status-button seen-button float-left" id={this.props.id}>Seen</button>
            <button onClick={this.props.toggleSkip} className="btn btn-danger view-status-button skip-button float-right" id={this.props.id}>Skip</button>
        </div>
    )
    }
}
export default CardButtons;