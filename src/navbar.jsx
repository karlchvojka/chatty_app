import React, {Component} from 'react';

class NavBar extends Component {
  render () {
    console.log('props', this.props);
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <p>User Count: {this.props.userCount}</p>
      </nav>
    );
  }
}

export default NavBar;
