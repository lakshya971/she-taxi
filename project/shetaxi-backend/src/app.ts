import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; // Import cors
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import rideRoutes from './routes/rideRoutes';
import paymentRoutes from './routes/paymentRoutes';
import errorHandler from './middlewares/errorHandler';
import { environment } from './config/environment';
import { connectToDatabase } from './config/database';
import http from 'http';
import { setupSocket } from './socket';

const app = express();
const PORT = environment.PORT || 3000;

// Enable CORS for all routes and origins
app.use(cors()); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectToDatabase();

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/rides', rideRoutes);
app.use('/api/payments', paymentRoutes);

app.use(errorHandler);

const server = http.createServer(app);
setupSocket(server);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});