import React from 'react';
import { connect } from 'react-redux';

const CardButtons = (props) => {
    const toNull = () => {
        console.log('goes to null')
    }
    const toTrue = () => {
        console.log('goes to true')
    }
    const toFalse = () => {
        console.log('goes to false')
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
    // changeShowSet: (newSet) => dispatch(changeShowSet(newSet))
  })  

export default CardButtons;