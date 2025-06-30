import { Router, Request, Response } from 'express';
import { RideController } from '../controllers/rideController';
import { authenticate, AuthenticatedRequest } from '../middlewares/authentication';
import { validateRideRequest } from '../middlewares/validation';

const router = Router();
const rideController = new RideController();

router.post('/rides', authenticate, validateRideRequest, (req: AuthenticatedRequest, res: Response) => rideController.createRide(req, res));
router.get('/rides/:id', authenticate, (req: AuthenticatedRequest, res: Response) => rideController.getRide(req, res));
router.put('/rides/:id', authenticate, validateRideRequest, (req: AuthenticatedRequest, res: Response) => rideController.updateRide(req, res));
router.get('/rides', authenticate, (req: AuthenticatedRequest, res: Response) => rideController.getAllRides(req, res));

export default router;