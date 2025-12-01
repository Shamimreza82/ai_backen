import { io } from "../server";






io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Listen for messages from client
  socket.on('message', (data) => {
    console.log(`Message from ${socket.id}: ${data}`);
    // Broadcast to all other clients
    socket.broadcast.emit('message', data);
  });

  // Disconnect
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});


