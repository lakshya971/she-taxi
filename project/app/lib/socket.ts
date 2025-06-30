import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export const connectSocket = () => {
  if (!socket) {
    socket = io('http://localhost:5000'); // Update with your backend URL if needed
  }
  return socket;
};

export const getSocket = () => {
  if (!socket) {
    throw new Error('Socket not connected! Call connectSocket() first.');
  }
  return socket;
};
