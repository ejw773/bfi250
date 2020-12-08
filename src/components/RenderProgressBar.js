import React from 'react';
import './ProgressBar.css'

class RenderProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="progress progress-all">
                    <div className="progress-all progress-bar bg-primary" id="view-all" onClick={this.props.changeView} role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">BFI 250 Progress Bar</div>
                </div>
                <div className="progress progress-sections">
                    <div className="progress-seen progress-bar bg-success" id="view-seen" onClick={this.props.changeView} role="progressbar" style={this.props.seenPercentStyle} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{this.props.totalSeen}</div>
                    <div className="progress-tosee progress-bar bg-warning" id="view-tosee" onClick={this.props.changeView} role="progressbar" style={this.props.unseenPercentStyle} aria-valuenow='100' aria-valuemin="0" aria-valuemax="100">{this.props.totalUnseen}</div>
                    <div className="progress-skipped progress-bar bg-danger" id="view-skipped" onClick={this.props.changeView} role="progressbar" style={this.props.skippedPercentStyle} aria-valuenow='100' aria-valuemin="0" aria-valuemax="100">{this.props.totalSkipped}</div>
                </div>
            </div>
        )
    }
}


export default RenderProgressBar;