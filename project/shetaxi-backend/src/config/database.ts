import mongoose from 'mongoose';
import { environment } from './environment';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(environment.DATABASE_URL);
    console.log('MongoDB connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to MongoDB:', error);
    process.exit(1);
  }
};

export { connectToDatabase };