import React from 'react';

const Badge = (props) => {
    const { viewStatus } = props;
    return (
    viewStatus===false
    ? <span className="badge badge-pill badge-danger">Skipped</span>
    : viewStatus===true
    ? <span className="badge badge-pill badge-success">Seen</span>
    : <span className="badge badge-pill badge-warning">To See</span>
    )
}

export default Badge;