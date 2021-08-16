import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <i className="className navbar-logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="class navber-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;