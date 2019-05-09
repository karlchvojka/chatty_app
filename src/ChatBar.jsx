import React, {Component} from 'react';


class ChatBar extends Component {
  // Get the input field
  handleKeyPress = (event) => {
    if(event.keyCode == 13) {
      let message = event.target.value;
      this.props.addMessage(event.target.value);
      event.target.value = '';
    }
  }

  handleUser = (event) => {
    this.props.changeUsername(document.getElementById('username').value);
  }
  render () {
    console.log(this.props)


    return (
      <footer className="chatbar">
        <input id='username' className="chatbar-username" defaultValue={this.props.currentUser.name} onChange={this.handleUser} />
        <input className="chatbar-message" name="messageInput" placeholder="Type a message and hit ENTER" onKeyDown={this.handleKeyPress}/>
      </footer>
    )
  }
}

export default ChatBar;
