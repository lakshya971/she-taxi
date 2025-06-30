import User from '../models/User';
import { sign, verify } from 'jsonwebtoken';
import { Request, Response } from 'express';
import { environment } from '../config/environment';

export class AuthService {
    private userModel: typeof User;

    constructor() {
        this.userModel = User;
    }

    async register(userData: any): Promise<any> {
        const user = new this.userModel(userData);
        return await user.save();
    }

    async login(email: string, password: string): Promise<string | null> {
        const user = await this.userModel.findOne({ email });
        if (user && user.password === password) { // Replace with hashed password check in production
            return this.generateToken(user);
        }
        return null;
    }

    private generateToken(user: any): string {
        const payload = { id: user._id, email: user.email };
        return sign(payload, environment.JWT_SECRET, { expiresIn: '1h' });
    }

    async verifyToken(token: string): Promise<any> {
        try {
            return verify(token, environment.JWT_SECRET);
        } catch (error) {
            return null;
        }
    }
}