import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { validateRegistration, validateLogin } from '../middlewares/validation';

const router = Router();
const authController = new AuthController();

router.post('/register', validateRegistration, authController.register);
router.post('/login', validateLogin, authController.login);
router.get('/logout', authController.logout);

export default router;