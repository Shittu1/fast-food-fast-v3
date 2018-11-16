import { Router } from 'express';
import userController from '../controllers/auth.controller';
import auth from '../middleware/auth';

const router = Router();

router.post('/signup', userController.create);
router.post('/login', userController.login);
router.delete('/me', auth.verifyToken, userController.delete);

export default router;
