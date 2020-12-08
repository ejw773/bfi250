import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.searchInput)
    }

    render() {
        return (
            <div>
            <nav className="navbar fixed-bottom navbar-dark bg-dark">
                {/* <a className="navbar-brand" href="https://fanwithamovieyammer.wordpress.com/the-sight-sound-top-250-list/" target="_blank">Sight & Sound "Greatest Films of All Time" | 2012 Edition</a> */}
                <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit.bind(this)}>
                    <input value={this.state.input} onChange={this.handleChange.bind(this)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>



        )
    }
}


export default Footer;