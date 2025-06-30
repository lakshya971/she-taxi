import { Schema, model } from 'mongoose';

const rideSchema = new Schema({
    passengerId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    driverId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Driver'
    },
    pickupLocation: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    dropoffLocation: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed', 'canceled'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

rideSchema.index({ pickupLocation: '2dsphere' });
rideSchema.index({ dropoffLocation: '2dsphere' });

const Ride = model('Ride', rideSchema);

export default Ride;