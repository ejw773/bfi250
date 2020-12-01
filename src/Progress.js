import React from 'react';
import './Progress.css'

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.click250 = this.click250.bind(this);
        this.clickSeen = this.clickSeen.bind(this);
        this.clickUnseen = this.clickUnseen.bind(this);
        this.clickSkipped = this.clickSkipped.bind(this);
        this.state = {
            totalFilms: 250,
            totalSeen: 73,
            totalSkipped: 16
        }
    }
    click250() {
        console.log("You clicked the '250' part of the progress bar.")
    }
    clickSeen() {
        console.log("You clicked the 'Seen' part of the progress bar.")
    }
    clickUnseen() {
        console.log("You clicked the 'Unseen' part of the progress bar.")
    }
    clickSkipped() {
        console.log("You clicked the 'Skipped' part of the progress bar.")
    }
    render() {
        let totalUnseen = (this.state.totalFilms - (this.state.totalSeen + this.state.totalSkipped))

        let seenPercent = Math.ceil(this.state.totalSeen / this.state.totalFilms * 100);
        console.log(seenPercent)
        let unseenPercent = Math.ceil(totalUnseen / this.state.totalFilms * 100);
        console.log(unseenPercent)
        let skippedPercent = (100 - (seenPercent + unseenPercent));
        console.log(skippedPercent)

        let seenPercentText = seenPercent + '%';
        let unseenPercentText = unseenPercent + '%';
        let skippedPercentText = skippedPercent + '%';

        let seenPercentStyle = {
            width: seenPercentText
        }
        let unseenPercentStyle = {
            width: unseenPercentText
        }
        let skippedPercentStyle = {
            width: skippedPercentText
        }
        return (
            <div>
                <div className="progress progress-all">
                    <div className="progress-bar bg-primary" onClick={this.click250} role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">BFI 250 Progress Bar</div>
                </div>
                <div className="progress progress-sections">
                    <div className="progress-bar bg-success" onClick={this.clickSeen} role="progressbar" style={seenPercentStyle} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{this.state.totalSeen}</div>
                    <div className="progress-bar bg-warning" onClick={this.clickUnseen} role="progressbar" style={unseenPercentStyle} aria-valuenow='100' aria-valuemin="0" aria-valuemax="100">{totalUnseen}</div>
                    <div className="progress-bar bg-danger" onClick={this.clickSkipped} role="progressbar" style={skippedPercentStyle} aria-valuenow='100' aria-valuemin="0" aria-valuemax="100">{this.state.totalSkipped}</div>
                </div>
            </div>
        )
    }
}


export default ProgressBar;