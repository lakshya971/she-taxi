import { Router, Request, Response } from 'express';
import userController from '../controllers/userController';
import { authenticate, AuthenticatedRequest } from '../middlewares/authentication';
import { validateUser } from '../middlewares/validation';

const router = Router();

router.get('/profile', authenticate, (req: AuthenticatedRequest, res: Response) => userController.getUserProfile(req, res));
router.put('/profile', authenticate, validateUser, (req: AuthenticatedRequest, res: Response) => userController.updateUserProfile(req, res));

export default router;