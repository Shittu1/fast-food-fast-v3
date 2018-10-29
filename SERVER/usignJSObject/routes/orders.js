import { Router } from 'express';
const router = Router();

import ordersController from '../controllers/orders.controller';

router.post('/', ordersController.create);
router.get('/', ordersController.getAll);
router.get('/:id', ordersController.getOne);
router.put('/:id', ordersController.update);
router.delete('/:id', ordersController.delete);

module.exports = router;
