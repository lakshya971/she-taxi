import { Request, Response } from 'express';
import UserService from '../services/userService';

export interface AuthenticatedRequest extends Request {
  user?: any;
}

class UserController {
    async getUserProfile(req: AuthenticatedRequest, res: Response): Promise<void> {
        try {
            const userId = req.user?.id || req.params.id;
            const userProfile = await UserService.getUserById(userId);
            if (!userProfile) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.status(200).json(userProfile);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving user profile', error: error instanceof Error ? error.message : String(error) });
        }
    }

    async updateUserProfile(req: AuthenticatedRequest, res: Response): Promise<void> {
        try {
            const userId = req.user?.id || req.params.id;
            const updatedData = req.body;
            const updatedUser = await UserService.updateUser(userId, updatedData);
            if (!updatedUser) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: 'Error updating user profile', error: error instanceof Error ? error.message : String(error) });
        }
    }
}

export default new UserController();