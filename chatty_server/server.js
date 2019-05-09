/*******************/
/* GLOBAL REQUIRES */
/*******************/
const express = require('express');
const SocketServer = require('ws').Server;
const uuidv1 = require('uuid/v1');

// Set port
const PORT = 3001;

/*****************/
/* Create Server */
/*****************/
const server = express()
  // make the express server serve static access (html, js, css) from the public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT}`));

// Create websockets Server
const wss = new SocketServer({ server });

/**********************/
/* Handle Connections */
/**********************/
wss.on('connection', (client) => {
  // Broadcast messages to all clients.
  wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        client.send(JSON.stringify(data));
    });
  };

  // Set number of clients for user count
  if(client) {
    console.log('New Client Connected');
    const userCount = {
      count: wss.clients.size,
      type: 'userCount'
    }
    wss.broadcast(userCount);
  }
  console.log('Client connected');

  // Handle an incoming message.
  client.on('message', (incomingData) => {
    const data = JSON.parse(incomingData);

    // Handle server reaction based on message type.
    switch(data.type) {
      // Handle a normal text message
      case 'incomingMessage':
        dataNew = {id: uuidv1(), type: data.type, username: data.username, content: data.content };
        wss.broadcast(dataNew)
        break;
      // Handle a notification (Username Change)
      case 'incomingNotification':
        data.type = 'incomingNotification';
        wss.broadcast(data);
        break;
      // Default/errors.
      default:
        throw new Error(`Unknown Event Type: ${data.type}`);
    }

  });

  // Handle Client closing.
  client.on('close', () => {
    console.log('Client Disconnected');
    // Change usercount on client close.
    const userCount = {
      count:wss.clients.size,
      type:'userCount'
    };
    wss.broadcast(userCount);
  });
});
