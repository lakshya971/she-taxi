import Payment from '../models/Payment';
import User from '../models/User';
import Driver from '../models/Driver';

export class PaymentService {
    async createPayment(userId: string, driverId: string, amount: number) {
        const payment = new Payment({
            userId,
            driverId,
            amount,
            status: 'pending',
        });
        await payment.save();
        return payment;
    }

    async getPaymentHistory(userId: string) {
        const payments = await Payment.find({ userId }).populate('driverId');
        return payments;
    }

    async processPayment(paymentId: string) {
        const payment = await Payment.findById(paymentId);
        if (!payment) {
            throw new Error('Payment not found');
        }

        // Simulate payment processing logic
        payment.status = 'completed';
        await payment.save();
        return payment;
    }

    async refundPayment(paymentId: string) {
        const payment = await Payment.findById(paymentId);
        if (!payment) {
            throw new Error('Payment not found');
        }

        payment.status = 'refunded';
        await payment.save();
        return payment;
    }
}