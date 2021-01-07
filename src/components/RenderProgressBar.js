import React from 'react';
import './ProgressBar.css'
import { connect } from 'react-redux';
import { changeShowSet } from '../redux/actions';

class RenderProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.changeView = this.changeView.bind(this);

    }

    changeView(event) {
        let viewSet = event.target.id;
        this.props.changeShowSet(viewSet);
    }

    render() {
        return (
            <div>
                <div className="progress progress-all">
                    <div className="progress-all progress-bar bg-primary" id="view-all" onClick={this.changeView} role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">BFI 250 Progress Bar</div>
                </div>
                <div className="progress progress-sections">
                    <div className="progress-seen progress-bar bg-success" id="view-seen" onClick={this.changeView} role="progressbar" style={this.props.seenPercentStyle} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{this.props.totalSeen}</div>
                    <div className="progress-tosee progress-bar bg-warning" id="view-tosee" onClick={this.changeView} role="progressbar" style={this.props.unseenPercentStyle} aria-valuenow='100' aria-valuemin="0" aria-valuemax="100">{this.props.totalUnseen}</div>
                    <div className="progress-skipped progress-bar bg-danger" id="view-skipped" onClick={this.changeView} role="progressbar" style={this.props.skippedPercentStyle} aria-valuenow='100' aria-valuemin="0" aria-valuemax="100">{this.props.totalSkipped}</div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    changeShowSet: (newSet) => dispatch(changeShowSet(newSet))
  })
  
  const mapStateToProps = state => {
    return state
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(RenderProgressBar);