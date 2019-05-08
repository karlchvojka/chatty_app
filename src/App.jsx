import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './navbar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: 0,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 1,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
    this.addMessageItem = this.addMessageItem.bind(this);
    this.socket = new WebSocket('ws://localhost:3001');
  }
  componentDidMount() {
    this.socket.onopen = event => {
      console.log('Connected to Server.');
    };
    // console.log("componentDidMount <App />");
    // setTimeout(() => {
    //   console.log("Simulating incoming message");
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    //   const messages = this.state.messages.concat(newMessage)
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({messages: messages})
    // }, 3000);
  }
  randomGenId() {
    let min = 2
    let max = 40000
    let random = Math.floor(Math.random() * (max - min)) + min
    return random
  };
  addMessageItem(input) {
    const newMessage = {id: this.randomGenId(), username: this.state.currentUser.name, content: input}
    const newDats = this.state.messages.concat(newMessage);
    this.setState({ messages: newDats});
  }
  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} addMessage={this.addMessageItem} />
      </div>
    );
  }
}

export default App;
