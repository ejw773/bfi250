import React from 'react';

const MovieCard = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" class="card-img-top" alt="vertigo" />
            <div className="card-body">
                <h5 className="card-title">Vertigo (1958)</h5>
                <p className="card-text">Director: Alfred Hitchcock</p>
                <a href="#" className="btn btn-success">Seen It!</a>
                <a href="#" className="btn btn-success">Skip It!</a>
            </div>
        </div>
    )
};

export default MovieCard;