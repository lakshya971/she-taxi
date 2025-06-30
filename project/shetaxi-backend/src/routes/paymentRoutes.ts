import { Router, Request, Response } from 'express';
import paymentController from '../controllers/paymentController';
import { authenticate, AuthenticatedRequest } from '../middlewares/authentication';
import { validatePayment } from '../middlewares/validation';

const router = Router();

router.post('/process', authenticate, validatePayment, (req: AuthenticatedRequest, res: Response) => paymentController.processPayment(req, res));
router.get('/history', authenticate, (req: AuthenticatedRequest, res: Response) => paymentController.getPaymentHistory(req, res));

export default router;