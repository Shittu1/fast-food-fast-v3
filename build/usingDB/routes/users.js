'use strict';

var _express = require('express');

var _users = require('../controllers/users.controller');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', _users2.default.getAllUsers);
router.get('/:id/orders', _users2.default.getUserOrders);

module.exports = router;