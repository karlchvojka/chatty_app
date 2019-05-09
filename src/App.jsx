import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './navbar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: ""},
      messages: [],
      onlineUsers: 0,
    };
    this.addMessageItem = this.addMessageItem.bind(this);
    this.changeCurrentUser = this.changeUsername.bind(this);
    this.socket = new WebSocket('ws://localhost:3001');

  }
  componentDidMount() {
    this.socket.onopen = event => {
      console.log('Connected to Server.');
    };

    this.socket.onmessage = (event) => {
      let msg = JSON.parse(event.data);
      console.log('incoming', msg);
      switch(msg.type) {
        case 'userCount':
        this.setState({ onlineUsers: msg.count});
        break;
        case "incomingMessage":
          // handle incoming message
          console.log('message', msg);
          const newMessage = {
            type: 'incomingMessage',
            id: msg.id,
            username: msg.username,
            content: msg.content
          }
          const newMessages = this.state.messages.concat(msg);
          this.setState({messages: newMessages });
          break;
        case "incomingNotification":
          // handle incoming notification.
          const newNotification = {
            type: 'incomingNotification',
            username: msg.username,
            id: msg.id,
            content: msg.content
          }
          const newNotifications = this.state.messages.concat(newNotification);
          this.setState({messages: newNotifications})
          break;
        default:
          // show error if type is unknown
          throw new Error("Unknown event type " + msg);
      }
    }
  }

  // Handle message input
  addMessageItem(input) {
    let currentUser = '';
    if (this.state.currentUser.name) {
      currentUser = this.state.currentUser.name;
    } else {
      currentUser = "Anonymous";
    }
      let msg = {
        type: 'incomingMessage',
        username: currentUser,
        content: input
      }
      this.socket.send(JSON.stringify(msg));
    }

  // Handle username input.
  changeUsername(input) {
    let currentUser = '';

    if (this.state.currentUser.name) {
      currentUser = this.state.currentUser.name;
    } else {
      currentUser = "Anonymous";
    }
    let msg = {
      type: 'incomingNotification',
      username: 'System Admin',
      content: `${currentUser} has changed their name to ${input}`
    }
    this.socket.send(JSON.stringify(msg));
    this.setState({currentUser: {name: input }});
  }

  render() {
    return (
      <div>
        <NavBar userCount={this.state.onlineUsers} />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} addMessage={this.addMessageItem} changeUsername={this.changeCurrentUser} />
      </div>
    );
  }
}

export default App;
