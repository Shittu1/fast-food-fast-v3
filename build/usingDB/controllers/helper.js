'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Helper = {
  /** Hash Password */
  hashPassword: function hashPassword(password) {
    return _bcrypt2.default.hashSync(password, _bcrypt2.default.genSaltSync(8));
  },

  /** Compare Passwords */
  comparePassword: function comparePassword(hashPassword, password) {
    return _bcrypt2.default.compareSync(password, hashPassword);
  },

  /** Valid Email Checker */
  isValidEmail: function isValidEmail(email) {
    return (/\S+@\S+\.\S+/.test(email)
    );
  },

  /** Generate Token */
  generateToken: function generateToken(id) {
    var token = _jsonwebtoken2.default.sign({
      userId: id
    }, process.env.SECRET, { expiresIn: '7d' });
    return token;
  }
};

// eslint-disable-next-line linebreak-style
exports.default = Helper;