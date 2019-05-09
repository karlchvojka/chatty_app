/******************/
/* GLOBAL IMPORTS */
/******************/
import React, {Component} from 'react';

/**********************/
/*  Chatbar Component */
/**********************/
class ChatBar extends Component {
  // Get the value of message field on enter press.
  handleKeyPress = (event) => {
    if(event.keyCode == 13) {
      this.props.addMessage(event.target.value);
      event.target.value = '';
    }
  }

  // Get the value of the username field on enter press.
  handleUser = (event) => {
    this.props.changeUsername(event.target.value);
  }

  render () {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={this.props.currentUser.name ? this.props.currentUser.name : 'Your Name (optional)'} defaultValue={this.props.currentUser.name ? this.props.currentUser.Name : ""} onBlur={this.handleUser} />
        <input className="chatbar-message" name="messageInput" placeholder="Type a message and hit ENTER" onKeyDown={this.handleKeyPress}/>
      </footer>
    )
  }
}

export default ChatBar;
