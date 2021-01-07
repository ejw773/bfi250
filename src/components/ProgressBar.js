import React from 'react';
import './ProgressBar.css'
import RenderProgressBar from './RenderProgressBar'

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // Might need some kind of media query to increase minPercent for smaller devices
        let minPercent = 2;
        let totalUnseen = (this.props.totalFilms - (this.props.seenTotal + this.props.skippedTotal))

        let seenPercent = Math.ceil(this.props.seenTotal / this.props.totalFilms * 100);
        if (seenPercent < minPercent) {seenPercent = minPercent};

        let skippedPercent = Math.ceil(this.props.skippedTotal / this.props.totalFilms * 100);
        if (skippedPercent < minPercent) {skippedPercent = minPercent};

        let unseenPercent = (100 - (seenPercent + skippedPercent));

        let seenPercentText = seenPercent + '%';
        let unseenPercentText = unseenPercent + '%';
        let skippedPercentText = skippedPercent + '%';

        let seenPercentWidth = {
            width: seenPercentText
        }
        let unseenPercentWidth = {
            width: unseenPercentText
        }
        let skippedPercentWidth = {
            width: skippedPercentText
        }
        return (
            <RenderProgressBar 
                seenPercentStyle={seenPercentWidth} 
                unseenPercentStyle={unseenPercentWidth}
                skippedPercentStyle={skippedPercentWidth}
                totalUnseen={totalUnseen}
                totalSeen={this.props.seenTotal}
                totalSkipped={this.props.skippedTotal}
            />
        )
    }
}


export default ProgressBar;