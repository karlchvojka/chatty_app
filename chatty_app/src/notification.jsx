import React, {Component} from 'react';

class Notification extends Component {
  render () {
    return (
      <div>
        <div className="notification">
          <span className="message-username">{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
      </div>
    )
  }
}

export default Notification;
