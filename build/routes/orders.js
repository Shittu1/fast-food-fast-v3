'use strict';

var _express = require('express');

var _orders = require('../controllers/orders.controller');

var _orders2 = _interopRequireDefault(_orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.post('/orders', _orders2.default.create);
router.get('/orders', _orders2.default.getAll);
router.get('/orders/:id', _orders2.default.getOne);
router.put('/orders/:id', _orders2.default.update);
router.delete('/orders/:id', _orders2.default.delete);

module.exports = router;