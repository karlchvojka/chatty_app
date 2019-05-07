import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render () {
    console.log('total', this.props);
    const localMess = this.props.messages;
    const messages = localMess.map((message) =>
      <Message key={message.id} username={message.username} content={message.content} />
    );
    return (
      <main className="messages">
        {messages}
      </main>
    )
  }
}

export default MessageList;
