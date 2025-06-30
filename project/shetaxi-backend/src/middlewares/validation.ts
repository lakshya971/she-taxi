import { Request, Response, NextFunction } from 'express';
import { body as evBody, validationResult as evValidationResult } from 'express-validator';

export const validateRegistration = [
    evBody('email').isEmail().withMessage('Valid email is required'),
    evBody('password').isString().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = evValidationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export const validateLogin = [
    evBody('email').isEmail().withMessage('Valid email is required'),
    evBody('password').isString().notEmpty().withMessage('Password is required'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = evValidationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export const validateUser = [
    evBody('email').optional().isEmail().withMessage('Valid email is required'),
    evBody('username').optional().isString().notEmpty().withMessage('Username is required'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = evValidationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export const validatePayment = [
    evBody('amount').isNumeric().withMessage('Amount is required'),
    evBody('paymentMethod').isString().notEmpty().withMessage('Payment method is required'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = evValidationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export const validateRideRequest = [
    evBody('pickupLocation').isString().notEmpty().withMessage('Pickup location is required'),
    evBody('dropoffLocation').isString().notEmpty().withMessage('Dropoff location is required'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = evValidationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];