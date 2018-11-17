import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const router = Router();

router.post('/', ordersController.create);
router.get('/', ordersController.getAll);
router.get('/:id', ordersController.getOne);
router.put('/:id', ordersController.update);
router.delete('/:id', ordersController.delete);

module.exports = router;
