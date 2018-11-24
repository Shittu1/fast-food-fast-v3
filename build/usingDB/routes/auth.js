'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _auth = require('../controllers/auth.controller');

var _auth2 = _interopRequireDefault(_auth);

var _auth3 = require('../middleware/auth');

var _auth4 = _interopRequireDefault(_auth3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.post('/signup', _auth2.default.create);
router.post('/login', _auth2.default.login);
router.delete('/me', _auth4.default.verifyToken, _auth2.default.delete);

exports.default = router;