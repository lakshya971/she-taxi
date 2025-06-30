export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Driver {
    id: string;
    name: string;
    vehicle: string;
    licensePlate: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Ride {
    id: string;
    userId: string;
    driverId: string;
    pickupLocation: string;
    dropoffLocation: string;
    status: 'pending' | 'in-progress' | 'completed' | 'canceled';
    createdAt: Date;
    updatedAt: Date;
}

export interface Payment {
    id: string;
    rideId: string;
    amount: number;
    method: 'credit' | 'debit' | 'cash';
    status: 'pending' | 'completed' | 'failed';
    createdAt: Date;
    updatedAt: Date;
}