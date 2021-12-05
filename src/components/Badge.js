import React from 'react';

const Badge = (props) => {
    const seenStatus = props.seenStatus;
    return (
    seenStatus===false
    ? <span className="badge badge-pill badge-danger">Skipped</span>
    : seenStatus===true
    ? <span className="badge badge-pill badge-success">Seen</span>
    : <span className="badge badge-pill badge-warning">To See</span>
    )
}

export default Badge;