import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'your_secret_key';

export interface AuthenticatedRequest extends Request {
  user?: any; // Consider defining a more specific type for 'user'
}

export const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: 'No token provided' });
        return; // Explicitly return to satisfy void
    }

    jwt.verify(token, secretKey, (err: any, decoded: any) => {
        if (err) {
            res.status(401).json({ message: 'Unauthorized' });
            return; // Explicitly return
        }
        req.user = decoded;
        next();
    });
};