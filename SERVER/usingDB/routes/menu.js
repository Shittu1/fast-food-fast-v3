import { Router } from 'express';
import menuController from '../controllers/menu.controller';

const router = Router();

router.post('/', menuController.create);
router.get('/', menuController.getAll);
router.get('/:id', menuController.getOne);
router.put('/:id', menuController.update);
router.delete('/:id', menuController.delete);

module.exports = router;
