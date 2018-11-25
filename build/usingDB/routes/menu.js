'use strict';

var _express = require('express');

var _menu = require('../controllers/menu.controller');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.post('/', _menu2.default.create);
router.get('/', _menu2.default.getAll);
router.get('/:id', _menu2.default.getOne);
router.put('/:id', _menu2.default.update);
router.delete('/:id', _menu2.default.delete);

module.exports = router;