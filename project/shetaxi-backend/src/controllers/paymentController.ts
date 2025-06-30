import { Request, Response } from 'express';
import { PaymentService } from '../services/paymentService';

const paymentService = new PaymentService();

class PaymentController {
    async processPayment(req: Request, res: Response) {
        try {
            const { paymentId } = req.body;
            const paymentResult = await paymentService.processPayment(paymentId);
            res.status(200).json(paymentResult);
        } catch (error) {
            res.status(500).json({ message: 'Payment processing failed', error: error instanceof Error ? error.message : String(error) });
        }
    }

    async getPaymentHistory(req: Request, res: Response) {
        try {
            const userId = req.params.userId;
            const paymentHistory = await paymentService.getPaymentHistory(userId);
            res.status(200).json(paymentHistory);
        } catch (error) {
            res.status(500).json({ message: 'Failed to retrieve payment history', error: error instanceof Error ? error.message : String(error) });
        }
    }
}

export default new PaymentController();