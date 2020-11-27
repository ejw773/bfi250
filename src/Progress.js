import React from 'react';

const ProgressBar = (props) => {
    return (
        <div className="progress" style={{height: '2.5em'}}>
            <div className="progress-bar bg-danger" role="progressbar" style={{width: '30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">Skipped</div>
            <div className="progress-bar bg-success" role="progressbar" style={{width: '20%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">Seen</div>
        </div>
    )
}

export default ProgressBar;