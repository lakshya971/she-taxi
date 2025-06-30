import Location from '../models/Location';
import { Request, Response } from 'express';

export class LocationService {
    async getLocationById(locationId: string) {
        return await Location.findById(locationId);
    }

    async createLocation(locationData: any) {
        const location = new Location(locationData);
        return await location.save();
    }

    async updateLocation(locationId: string, locationData: any) {
        return await Location.findByIdAndUpdate(locationId, locationData, { new: true });
    }

    async deleteLocation(locationId: string) {
        return await Location.findByIdAndDelete(locationId);
    }

    async getAllLocations() {
        return await Location.find();
    }
}