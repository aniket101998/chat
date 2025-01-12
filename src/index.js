const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { getMessageHistory, addMessage } = require('./messageHistory');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

wss.on('connection', (ws) => {
    console.log('New client connected');

    // Send message history to the newly connected client
    ws.send(JSON.stringify(getMessageHistory()));

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        addMessage(message);

        // Broadcast the message to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});