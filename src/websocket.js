const WebSocket = require('ws');
const messageHistory = require('./messageHistory');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('New client connected');

    // Send message history to the newly connected client
    ws.send(JSON.stringify(messageHistory.getMessages()));

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        messageHistory.addMessage(message);
        broadcast(message);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

function broadcast(message) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
}

module.exports = { wss };