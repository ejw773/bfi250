import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ProgressBar.css';
import { changeShowSet } from '../redux/actions/local_actions';

const ProgressBar = (props) => {
  const dispatch = useDispatch();
  const showSet = useSelector((state) => state.showSet.showSet);

  const { totalFilms, totalSeen, totalSkipped, totalUnseen } = props;

  // Find out screen size
  const screenSize = window.innerWidth;

  // Set a minimum percentage for the progress bar sections
  // Based on screen size: 414, 768, 992
  let minPercent = 2;
  if (screenSize < 414) {
    minPercent = 10;
  } else if (screenSize < 768) {
    minPercent = 6;
  } else if (screenSize < 992) {
    minPercent = 4;
  }
  let leftoverPercent = 100 - minPercent * 3;

  // Calculate percentages, also accounting for minimum percentage
  let seenPercent = (totalSeen / totalFilms) * leftoverPercent + minPercent;
  if (seenPercent < minPercent) {
    seenPercent = minPercent;
  }

  let skippedPercent =
    (totalSkipped / totalFilms) * leftoverPercent + minPercent;
  if (skippedPercent < minPercent) {
    skippedPercent = minPercent;
  }
  let unseenPercent = (totalUnseen / totalFilms) * leftoverPercent + minPercent;

  // Add '%' onto the percentages
  let seenPercentText = seenPercent + '%';
  let unseenPercentText = unseenPercent + '%';
  let skippedPercentText = skippedPercent + '%';

  // Set up variables to control the appearnace of selected portion of progress bar
  const selectedBorderWhite = 'solid white 4px';
  const selectedborderBlack = 'solid black 4px';
  const unselectedBorder = '';
  let viewSeenBorder = unselectedBorder;
  let viewSkippedBorder = unselectedBorder;
  let viewToSeeBorder = unselectedBorder;
  let viewAllBorder = unselectedBorder;

  // Put border on selected portion of progress bar
  showSet === 'view-seen'
    ? (viewSeenBorder = selectedBorderWhite)
    : showSet === 'view-skipped'
    ? (viewSkippedBorder = selectedBorderWhite)
    : showSet === 'view-tosee'
    ? (viewToSeeBorder = selectedborderBlack)
    : (viewAllBorder = selectedBorderWhite);

  // Creates object variables for styling of each portion of progress bar
  let viewAllStyle = {
    width: '100%',
    border: viewAllBorder,
  };
  let viewSeenStyle = {
    width: seenPercentText,
    border: viewSeenBorder,
  };
  let viewToSeeStyle = {
    width: unseenPercentText,
    border: viewToSeeBorder,
  };
  let viewSkippedStyle = {
    width: skippedPercentText,
    border: viewSkippedBorder,
  };

  // Call the reducer to update which collection of films to show
  const changeView = (event) => {
    let viewSet = event.target.id;
    dispatch(changeShowSet(viewSet));
  };

  return (
    <div>
      <div className='progress progress-all'>
        <div
          className='progress-all progress-bar bg-primary'
          id='view-all'
          onClick={changeView}
          role='progressbar'
          style={viewAllStyle}
          aria-valuenow='100'
          aria-valuemin='0'
          aria-valuemax='100'
        >
          All Films
        </div>
      </div>
      <div className='progress progress-sections'>
        <div
          className='progress-skipped progress-bar progress-bar-striped bg-danger'
          id='view-skipped'
          onClick={changeView}
          role='progressbar'
          style={viewSkippedStyle}
          aria-valuenow='100'
          aria-valuemin='0'
          aria-valuemax='100'
        >
          {totalSkipped}
        </div>
        <div
          className='progress-seen progress-bar progress-bar-striped bg-success'
          id='view-seen'
          onClick={changeView}
          role='progressbar'
          style={viewSeenStyle}
          aria-valuenow='100'
          aria-valuemin='0'
          aria-valuemax='100'
        >
          {totalSeen}
        </div>
        <div
          className='progress-tosee progress-bar bg-warning'
          id='view-tosee'
          onClick={changeView}
          role='progressbar'
          style={viewToSeeStyle}
          aria-valuenow='100'
          aria-valuemin='0'
          aria-valuemax='100'
        >
          {totalUnseen}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
