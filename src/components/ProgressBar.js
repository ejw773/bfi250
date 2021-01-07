// This is done

import React from 'react';
import './ProgressBar.css'
import { connect } from 'react-redux';
import { changeShowSet } from '../redux/actions';


const ProgressBar = (props) => {

    // Assigns props to variables
    const totalFilms = props.movieData.BFI2012.length;
    const seenStatusData = props.seenStatus;
    const showSet = props.showSet;
    
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

    // Set up variables to control the appearnace of selected portion of progress bar
    const selectedBorder = 'solid black 4px'
    const unselectedBorder = ''
    let viewSeenBorder = unselectedBorder;
    let viewSkippedBorder = unselectedBorder;
    let viewToSeeBorder = unselectedBorder;
    let viewAllBorder = unselectedBorder;

    // Put border on selected portion of progress bar
    showSet==='view-seen' ?
    viewSeenBorder=selectedBorder :
    showSet==='view-skipped' ?
    viewSkippedBorder=selectedBorder :
    showSet==='view-tosee' ?
    viewToSeeBorder=selectedBorder :
    viewAllBorder=selectedBorder

    // Creates object variables for styling of each portion of progress bar
    let viewAllStyle = {
        width: '100%',
        border: viewAllBorder
    };
    let viewSeenStyle = {
        width: seenPercentText,
        border: viewSeenBorder
    };
    let viewToSeeStyle = {
        width: unseenPercentText,
        border: viewToSeeBorder
    };
    let viewSkippedStyle = {
        width: skippedPercentText,
        border: viewSkippedBorder
    };

    // Call the reducer to update which collection of films to show
    const changeView = (event) => {
        let viewSet = event.target.id;
        props.changeShowSet(viewSet);
    }

    return (
        <div>
            <div className="progress progress-all">
                <div className="progress-all progress-bar bg-primary" id="view-all" onClick={changeView} role="progressbar" style={viewAllStyle} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">BFI 250 Progress Bar</div>
            </div>
            <div className="progress progress-sections">
                <div className="progress-skipped progress-bar progress-bar-striped bg-danger" id="view-skipped" onClick={changeView} role="progressbar" style={viewSkippedStyle} aria-valuenow='100' aria-valuemin="0" aria-valuemax="100">{totalSkipped}</div>
                <div className="progress-seen progress-bar progress-bar-striped bg-success" id="view-seen" onClick={changeView} role="progressbar" style={viewSeenStyle} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{totalSeen}</div>
                <div className="progress-tosee progress-bar bg-warning" id="view-tosee" onClick={changeView} role="progressbar" style={viewToSeeStyle} aria-valuenow='100' aria-valuemin="0" aria-valuemax="100">{totalUnseen}</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        seenStatus: state.seenStatus,
        movieData: state.movieData,
        showSet: state.showSet.showSet
    }
}

const mapDispatchToProps = dispatch => ({
    changeShowSet: (newSet) => dispatch(changeShowSet(newSet))
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);