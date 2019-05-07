import React, {Component} from 'react';


class ChatBar extends Component {
  // Get the input field
  handleKeyPress = (event) => {
    if(event.keyCode == 13) {
      this.props.addMessage(event.target.value);
      event.target.value = '';
    }
  }
  render () {
    console.log(this.props)


    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={this.props.currentUser.name} />
        <input className="chatbar-message" name="messageInput" placeholder="Type a message and hit ENTER" onKeyDown={this.handleKeyPress}/>
      </footer>
    )
  }
}

export default ChatBar;
