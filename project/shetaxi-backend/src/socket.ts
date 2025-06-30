import { Server as IOServer } from 'socket.io';
import { Server as HTTPServer } from 'http';

export function setupSocket(server: HTTPServer) {
  const io = new IOServer(server, {
    cors: {
      origin: '*', // Adjust this in production
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Example: Listen for ride status updates
    socket.on('rideStatusUpdate', (data) => {
      // Broadcast to all clients (or use rooms for specific users)
      io.emit('rideStatusUpdate', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

  return io;
}
