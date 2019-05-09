/******************/
/* GLOBAL IMPORTS */
/******************/
import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './notification.jsx';

// Helper function to return a Message component or Notification component depending on Message type.
function mesTempSwitch (input) {
  if (input.type === 'incomingNotification') {
    return <Notification className="notification" key={input.id} username={input.username} content={input.content} />
  } else {
    return <Message className="message" key={input.id} username={input.username} content={input.content} />
  }
}

/**************************/
/* Message List Component */
/**************************/
class MessageList extends Component {
  render () {
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
