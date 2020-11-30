import React from 'react';

// const Badge = (props) => {
//     if (props.viewStatus==='seen') {
//         return (
//             <span className="badge badge-pill badge-success">Seen</span>
//         )} else if (props.viewStatus==='see') {
//             return (
//                 <span className="badge badge-pill badge-warning">To See</span>
//             )} else {
//                 return (
//                     <span className="badge badge-pill badge-danger">Skipped</span>
//                 )
//             }
//         }
    
const Badge = (props) => {
    if (props.viewStatus==='skip') {
        return (
            <span className="badge badge-pill badge-danger">Skipped</span>
        )} else if (props.viewStatus==='seen') {
            return (
            <span className="badge badge-pill badge-success">Seen</span>
            )} else {
                return (
                   <span className="badge badge-pill badge-warning">To See</span>
                )
            }
        }
    


export default Badge;
