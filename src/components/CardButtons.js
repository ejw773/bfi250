import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSeenStatus } from '../redux/actions/seen_status_actions';
import { deleteSeenStatus } from '../redux/actions/seen_status_actions';

const CardButtons = (props) => {
  const dispatch = useDispatch();
  const toNull = (event) => {
    dispatch(deleteSeenStatus(event.target.id, null));
  };
  const toTrue = (event) => {
    dispatch(toggleSeenStatus(event.target.id, true));
  };
  const toFalse = (event) => {
    dispatch(toggleSeenStatus(event.target.id, false));
  };

  return props.seenStatus === true ? (
    <div className='status-buttons'>
      <button
        onClick={toNull}
        className='btn btn-warning view-status-button unseen-button align-self-end float-left'
        id={props.id}
        name='toNull'
      >
        Unseen
      </button>
    </div>
  ) : props.seenStatus === false ? (
    <div className='status-buttons'>
      <button
        onClick={toNull}
        className='btn btn-secondary view-status-button unskip-button align-self-end float-right'
        id={props.id}
        name='toNull'
      >
        Unskip
      </button>
    </div>
  ) : (
    <div className='status-buttons'>
      <button
        onClick={toTrue}
        className='btn btn-success view-status-button seen-button align-self-end float-left'
        id={props.id}
        name='toTrue'
      >
        Seen
      </button>
      <button
        onClick={toFalse}
        className='btn btn-danger view-status-button skip-button align-self-end float-right'
        id={props.id}
        name='toFalse'
      >
        Skip
      </button>
    </div>
  );
};

export default CardButtons;
