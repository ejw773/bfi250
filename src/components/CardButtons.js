import React from 'react';
import { connect } from 'react-redux';
import { toggleSeenStatus } from '../redux/actions'

const CardButtons = (props) => {
    const toNull = (event) => {
        props.toggleSeenStatus(event.target.id, null)
    }
    const toTrue = (event) => {
        props.toggleSeenStatus(event.target.id, true);
    }
    const toFalse = (event) => {
        props.toggleSeenStatus(event.target.id, false);
    }

    return (
        props.viewStatus===true
        ?
        <div className="status-buttons">
            <button onClick={toNull} className="btn btn-warning view-status-button unseen-button float-left" id={props.id} name='toNull'>Unseen</button>
        </div>
        :
        props.viewStatus===false
        ?
        <div className="status-buttons">
            <button onClick={toNull} className="btn btn-secondary view-status-button unskip-button float-right" id={props.id} name='toNull'>Unskip</button> 
        </div>
        :
        <div className="status-buttons">
            <button onClick={toTrue} className="btn btn-success view-status-button seen-button float-left" id={props.id} name='toTrue'>Seen</button>
            <button onClick={toFalse} className="btn btn-danger view-status-button skip-button float-right" id={props.id} name='toFalse'>Skip</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleSeenStatus: (bfiID, toggleAction) => dispatch(toggleSeenStatus(bfiID, toggleAction))
})  

export default connect(null, mapDispatchToProps)(CardButtons);