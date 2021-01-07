// This is done

import React from 'react';
import './ProgressBar.css'
import { connect } from 'react-redux';
import { changeShowSet } from '../redux/actions';


const ProgressBar = (props) => {
    // Assigns props to variables
    const totalFilms = props.movieData.BFI2012.length;
    const seenStatusData = props.seenStatus;
    
    // Calculate quantities of seen, unseen, and skipped
    let totalSeen = (Object.values(seenStatusData).reduce((a, item) => a + (item === true ? 1 : 0), 0));
    let totalSkipped = (Object.values(seenStatusData).reduce((a, item) => a + (item === false ? 1 : 0), 0));
    let totalUnseen = totalFilms - totalSeen - totalSkipped;

    // Set a minimum percentage for the progress bars
    let minPercent = 2;

    // Calculate percentages, also accounting for minimum percentage
    let seenPercent = Math.ceil(totalSeen / totalFilms * 100);
    if (seenPercent < minPercent) {seenPercent = minPercent};

    let skippedPercent = Math.ceil(totalSkipped / totalFilms * 100);
    if (skippedPercent < minPercent) {skippedPercent = minPercent};

    let unseenPercent = (100 - (seenPercent + skippedPercent));

    // Add '%' onto the percentages
    let seenPercentText = seenPercent + '%';
    let unseenPercentText = unseenPercent + '%';
    let skippedPercentText = skippedPercent + '%';

    // Turn percentages into objects, to be used as style in JSX
    let seenPercentWidth = {
        width: seenPercentText
    }
    let unseenPercentWidth = {
        width: unseenPercentText
    }
    let skippedPercentWidth = {
        width: skippedPercentText
    }

    // Call the reducer to update which collection of films to show
    const changeView = (event) => {
        let viewSet = event.target.id;
        props.changeShowSet(viewSet);
    }

    return (
        <div>
            <div className="progress progress-all">
                <div className="progress-all progress-bar bg-primary" id="view-all" onClick={changeView} role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">BFI 250 Progress Bar</div>
            </div>
            <div className="progress progress-sections">
                <div className="progress-seen progress-bar bg-success" id="view-seen" onClick={changeView} role="progressbar" style={seenPercentWidth} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{totalSeen}</div>
                <div className="progress-tosee progress-bar bg-warning" id="view-tosee" onClick={changeView} role="progressbar" style={unseenPercentWidth} aria-valuenow='100' aria-valuemin="0" aria-valuemax="100">{totalUnseen}</div>
                <div className="progress-skipped progress-bar bg-danger" id="view-skipped" onClick={changeView} role="progressbar" style={skippedPercentWidth} aria-valuenow='100' aria-valuemin="0" aria-valuemax="100">{totalSkipped}</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        seenStatus: state.seenStatus,
        movieData: state.movieData
    }
}

const mapDispatchToProps = dispatch => ({
    changeShowSet: (newSet) => dispatch(changeShowSet(newSet))
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);