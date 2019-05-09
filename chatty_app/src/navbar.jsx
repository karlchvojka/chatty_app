/******************/
/* GLOBAL IMPORTS */
/******************/
import React, {Component} from 'react';

/********************/
/* Navbar Component */
/********************/
class NavBar extends Component {
  render () {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <p>User Count: {this.props.userCount}</p>
      </nav>
    );
  }
}

export default NavBar;
