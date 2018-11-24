import { Router } from 'express';
import usersController from '../controllers/users.controller';

const router = Router();

router.get('/', usersController.getAllUsers);
router.get('/:id/orders', usersController.getUserOrders);

module.exports = router;
