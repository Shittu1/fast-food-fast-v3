import { Router } from 'express';
import userController from '../controllers/user.controller';
import auth from '../middleware/auth';

const router = Router();

router.post('/', userController.create);
router.post('/login', userController.login);
router.delete('/me', auth.verifyToken, userController.delete);

export default router;
