import { Router } from 'express';
const router = Router();

import ordersController from '../controllers/orders.controller';

router.post('/orders', ordersController.create);
router.get('/orders', ordersController.getAll);
router.get('/orders/:id', ordersController.getOne);
router.put('/orders/:id', ordersController.update);
router.delete('/orders/:id', ordersController.delete);

module.exports = router;
