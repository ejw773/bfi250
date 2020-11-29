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
            totalSeen: 14,
            totalUnseen: 230,
            totalSkipped: 6
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
        return (
            <div>
            <div className="progress">
        <div className="progress-bar bg-primary" onClick={this.click250} role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">BFI 250 Progress Bar</div>
            </div>
            <div className="progress">
        <div className="progress-bar bg-success" onClick={this.clickSeen} role="progressbar" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Seen: {this.state.totalSeen}</div>
        <div className="progress-bar bg-warning" onClick={this.clickUnseen} role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Unseen: {this.state.totalUnseen}</div>
        <div className="progress-bar bg-danger" onClick={this.clickSkipped} role="progressbar" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Skipped: {this.state.totalSkipped}</div>
            </div>
        </div>


        )
    }
}


export default ProgressBar;