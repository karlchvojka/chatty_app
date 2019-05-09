import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './notification.jsx';

function mesTempSwitch (input) {
  console.log('input', input)
  if (input.type === 'incomingNotification') {
    return <Notification className="notification" key={input.id} username={input.username} content={input.content} />
  } else {
    return <Message className="message" key={input.id} username={input.username} content={input.content} />
  }
}

class MessageList extends Component {
  render () {
    console.log('total', this.props);
    const localMess = this.props.messages;

    const messages = localMess.map((message) => {
      return mesTempSwitch(message);
    });
    return (
      <main className="messages">
        {messages}
      </main>
    )
  }
}

export default MessageList;
