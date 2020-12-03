import React from 'react';

const Badge = (props) => {
    return (
    props.viewStatus===false
    ? <span className="badge badge-pill badge-danger">Skipped</span>
    : props.viewStatus===true
    ? <span className="badge badge-pill badge-success">Seen</span>
    : <span className="badge badge-pill badge-warning">To See</span>
    )
}

export default Badge;