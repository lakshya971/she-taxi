import { useEffect } from 'react';
import { connectSocket, getSocket } from '../lib/socket';

export function useRideStatusSocket(onStatusUpdate: (data: any) => void) {
  useEffect(() => {
    const socket = connectSocket();
    socket.on('rideStatusUpdate', onStatusUpdate);
    return () => {
      socket.off('rideStatusUpdate', onStatusUpdate);
    };
  }, [onStatusUpdate]);
}
