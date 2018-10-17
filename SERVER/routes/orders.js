import { Router } from 'express';
const router = Router();

import ordersController from '../controllers/orders.controller';

router.post('/orders', ordersControllers.create);
router.get('/orders', ordersControllers.getAll);
router.get('/orders/:id', ordersController.getOne);
router.put('/orders/:id', ordersController.update);
router.delete('/orders/:id', ordersController.delete);

module.exports = router;
