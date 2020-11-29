import React from 'react';

const Badge = (props) => {
    if (props.hasSeen===true) {
        return (
            <span className="badge badge-pill badge-success">Seen</span>
        )} else if (props.hasSeen===false && props.willSkip===false) {
            return (
                <span className="badge badge-pill badge-warning">To See</span>
            )} else {
                return (
                    <span className="badge badge-pill badge-danger">Skipped</span>
                )
            }
        }
    


export default Badge;
