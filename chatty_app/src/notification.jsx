/******************/
/* GLOBAL IMPORTS */
/******************/
import React, {Component} from 'react';

/**************************/
/* Notification Component */
/**************************/
class Notification extends Component {
  render () {
    return (
        <div className="notification message">
          <span className="message-username">{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
    )
  }
}

export default Notification;
