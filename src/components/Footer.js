// I think this one's done

import React from 'react';
import { connect } from 'react-redux';
import { searchTitle } from '../redux/actions';

const Footer = (props) => {
    const handleChange = (event) => {
        let searchInput = event.target.value;
        props.searchTitle(searchInput);
    }
    return (
        <div>
        <nav className="navbar fixed-bottom navbar-dark bg-dark">
            {/* <a className="navbar-brand" href="https://fanwithamovieyammer.wordpress.com/the-sight-sound-top-250-list/" target="_blank">Sight & Sound "Greatest Films of All Time" | 2012 Edition</a> */}
            <form className="form-inline my-2 my-lg-0">
                <input value={props.title} onChange={handleChange} className="form-control mr-sm-2" type="search" placeholder="Filter by Title" aria-label="Search" />
            </form>
        </nav>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        title: state.searchTitle.title
    }
}

const mapDispatchToProps = dispatch => ({
    searchTitle: (searchInput) => dispatch(searchTitle(searchInput))
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(Footer);