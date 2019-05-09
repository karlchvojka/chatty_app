const express = require('express');
const SocketServer = require('ws').Server;
const uuidv1 = require('uuid/v1');

// Set port
const PORT = 3001;

// Create a new express Server
const server = express()
  // make the express server serve static access (html, js, css) from the public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT}`));

// Create websockets Server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the Server
// When a client connects they are assigned a socket, represented by
// the client paramater in the callback.
wss.on('connection', (client) => {
  // Broadcast to all.
  console.log(wss.clients.size);
  wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        client.send(JSON.stringify(data));
    });
  };
  if(client) {
    console.log('New Client Connected');
    const userCount = {
      count: wss.clients.size,
      type: 'userCount'
    }
    wss.broadcast(userCount);
  }
  console.log('Client connected');



  client.on('message', (incomingData) => {
    console.log(incomingData);
    const data = JSON.parse(incomingData);
    console.log('data parsed', data)
    switch(data.type) {
      case 'incomingMessage':
        dataNew = {id: uuidv1(), type: data.type, username: data.username, content: data.content };
        wss.broadcast(dataNew)
        break;
      case 'incomingNotification':
        data.type = 'incomingNotification';
        wss.broadcast(data);
        break;
      default:
        throw new Error(`Unknown Event Type: ${data.type}`);
    }

  });
  // Set up a callback for when a client closes a socket. This is usually means they closed their browser.
  client.on('close', () => {
    console.log('Client Disconnected');
    const userCount = {
      count:wss.clients.size,
      type:'userCount'
    };
    wss.broadcast(userCount);
  });
});
