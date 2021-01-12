# BFI 250 Progress Bar

Discover the greatest films of all time. Skip a few. Track your progress.

## Live Website

[www.bfi250.com](https://www.bfi250.com/)

## About This Project

Each decade since 1952, the British Film Institute's [Sight & Sound Magazine](https://en.wikipedia.org/wiki/Sight_%26_Sound) has been putting out a carefully compiled list of the greatest films of all time. The published lists are usually 10 titles long, but in 2012 they put out a whopping [250 titles](https://fanwithamovieyammer.wordpress.com/the-sight-sound-top-250-list/).

I created the BFI 250 Progress Bar as a way to track my progress through this list. Two important features for me:
- A button to "Skip" films I don't intend to see
- A visually simple progress bar
- Mobile-friendly

## :hammer_and_wrench: Technologies Used

- HTML
- CSS
- Javascript
- Bootstrap
- React
- Redux
- react-router-dom

## Status

As of January 2021, the front end is fairly mature, but it saves all data to local storage. I am now working on backend integration in order to allow authentication to preserve viewing status across devices.

## 🖥 Screenshots

## Demo Video

[![BFI 250 Progress Bar Video Demo](http://img.youtube.com/vi/07n1iiyvbys/0.jpg)](http://www.youtube.com/watch?v=07n1iiyvbys "Video Demo")

## Code Snippet (Card Buttons Component)

```
import React from 'react';
import { connect } from 'react-redux';
import { toggleSeenStatus } from '../redux/actions';

// Call reducer for each different button press
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
            <button onClick={toNull} className="btn btn-warning view-status-button unseen-button align-self-end float-left" id={props.id} name='toNull'>Unseen</button>
        </div>
        :
        props.viewStatus===false
        ?
        <div className="status-buttons">
            <button onClick={toNull} className="btn btn-secondary view-status-button unskip-button align-self-end float-right" id={props.id} name='toNull'>Unskip</button> 
        </div>
        :
        <div className="status-buttons">
            <button onClick={toTrue} className="btn btn-success view-status-button seen-button align-self-end float-left" id={props.id} name='toTrue'>Seen</button>
            <button onClick={toFalse} className="btn btn-danger view-status-button skip-button align-self-end float-right" id={props.id} name='toFalse'>Skip</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleSeenStatus: (bfiID, toggleAction) => dispatch(toggleSeenStatus(bfiID, toggleAction)),
})  

export default connect(null, mapDispatchToProps)(CardButtons);

```

MIT © Elijah Wilcott
