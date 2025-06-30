import { Request, Response } from 'express';
import Ride from '../models/Ride';

export class RideController {
    public async createRide(req: Request, res: Response): Promise<void> {
        try {
            const rideData = req.body;
            const newRide = await Ride.create(rideData);
            res.status(201).json(newRide);
        } catch (error) {
            res.status(500).json({ message: 'Error creating ride', error: error instanceof Error ? error.message : String(error) });
        }
    }

    public async updateRide(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const rideData = req.body;
            const updatedRide = await Ride.findByIdAndUpdate(id, rideData, { new: true });
            if (!updatedRide) {
                res.status(404).json({ message: 'Ride not found' });
                return;
            }
            res.status(200).json(updatedRide);
        } catch (error) {
            res.status(500).json({ message: 'Error updating ride', error: error instanceof Error ? error.message : String(error) });
        }
    }

    public async getRide(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const ride = await Ride.findById(id);
            if (!ride) {
                res.status(404).json({ message: 'Ride not found' });
                return;
            }
            res.status(200).json(ride);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving ride', error: error instanceof Error ? error.message : String(error) });
        }
    }

    public async getAllRides(req: Request, res: Response): Promise<void> {
        try {
            const rides = await Ride.find();
            res.status(200).json(rides);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving rides', error: error instanceof Error ? error.message : String(error) });
        }
    }
}