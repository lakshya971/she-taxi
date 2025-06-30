import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

interface AuthenticatedRequest extends Request {
  user?: any;
}

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public async register(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.authService.register(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error instanceof Error ? error.message : String(error) });
        }
    }

    public async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            const token = await this.authService.login(email, password);
            if (!token) {
                res.status(401).json({ message: 'Invalid credentials' });
                return;
            }
            res.status(200).json({ token });
        } catch (error) {
            res.status(401).json({ message: error instanceof Error ? error.message : String(error) });
        }
    }

    public async generateToken(req: AuthenticatedRequest, res: Response): Promise<void> {
        try {
            // generateToken is private, so use login or expose a public method if needed
            if (!req.user) {
                res.status(400).json({ message: 'No user in request' });
                return;
            }
            // If you want to generate a token, you should add a public method in AuthService
            // For now, just return the user info
            res.status(200).json({ user: req.user });
        } catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : String(error) });
        }
    }

    public logout(req: Request, res: Response): void {
        // For stateless JWT, logout is handled on the client by deleting the token.
        // Optionally, you can implement token blacklisting here.
        res.status(200).json({ message: 'Logged out successfully' });
    }
}