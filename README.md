# Real-Time Chat Application Server

This README provides instructions for setting up and running the server-side of the real-time chat application.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Navigate to the server directory:

   ```
   cd server
   ```

2. Install the required dependencies:

   ```
   npm install
   ```

## Running the Server

To start the WebSocket server, run the following command:

```
node src/index.js
```

The server will start listening for WebSocket connections on the specified port (default is 3000).

## WebSocket API

- The server accepts WebSocket connections from clients.
- It broadcasts incoming messages to all connected clients.
- Message history is maintained and can be accessed by clients upon connection.

## Message History

The server maintains a history of messages sent in the chat. Clients can retrieve this history upon connecting to the WebSocket server.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.