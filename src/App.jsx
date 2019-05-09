import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './navbar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: ""},
      messages: []
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
      const newMessages = this.state.messages.concat(msg);
      this.setState({messages: newMessages });
    }
  }

  // Handle message input
  addMessageItem(input) {
      let msg = {
        username: this.state.currentUser.name,
        content: input
      }
      this.socket.send(JSON.stringify(msg));
    }

  // Handle username input.
  changeUsername(input) {
    this.setState({currentUser: {name: input }});
  }

  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} addMessage={this.addMessageItem} changeUsername={this.changeCurrentUser} />
      </div>
    );
  }
}

export default App;
