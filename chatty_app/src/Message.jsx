/******************/
/* GLOBAL IMPORTS */
/******************/
import React, {Component} from 'react';

/*********************/
/* Message Component */
/*********************/
class Message extends Component {
  render () {
    return (
      <div>
        <div className="message">
          <span className="message-username">{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
      </div>
    )
  }
}

export default Message;
