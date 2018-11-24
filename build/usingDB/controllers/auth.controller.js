'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _setup = require('../db/setup');

var _setup2 = _interopRequireDefault(_setup);

var _helper = require('./helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var User = {
  /** Create A User */
  create: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var hashPassword, createQuery, values, _ref2, rows, token;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ message: 'Some values are missing' }));

            case 2:
              if (_helper2.default.isValidEmail(req.body.email)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ message: 'Please enter a valid email address' }));

            case 4:
              hashPassword = _helper2.default.hashPassword(req.body.password);
              createQuery = 'INSERT INTO\n        users(firstname, lastname, email, password)\n        VALUES($1, $2, $3, $4)\n        returning *';
              values = [req.body.firstname, req.body.lastname, req.body.email, hashPassword];
              _context.prev = 7;
              _context.next = 10;
              return _setup2.default.query(createQuery, values);

            case 10:
              _ref2 = _context.sent;
              rows = _ref2.rows;
              token = _helper2.default.generateToken(rows[0].id);
              return _context.abrupt('return', res.status(201).send({ token: token }));

            case 16:
              _context.prev = 16;
              _context.t0 = _context['catch'](7);

              if (!(_context.t0.routine === '_bt_check_unique')) {
                _context.next = 20;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ message: 'User with that Email already exist' }));

            case 20:
              return _context.abrupt('return', res.status(400).send(_context.t0));

            case 21:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[7, 16]]);
    }));

    function create(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return create;
  }(),


  /** Login */
  login: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var text, _ref4, rows, token;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!req.body.email || !req.body.password)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({ message: 'Some values are missing' }));

            case 2:
              if (_helper2.default.isValidEmail(req.body.email)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({ message: 'Please enter a valid email address' }));

            case 4:
              text = 'SELECT * FROM users WHERE email = $1';
              _context2.prev = 5;
              _context2.next = 8;
              return _setup2.default.query(text, [req.body.email]);

            case 8:
              _ref4 = _context2.sent;
              rows = _ref4.rows;

              if (rows[0]) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({ message: 'The credentials you provided is incorrect' }));

            case 12:
              if (_helper2.default.comparePassword(rows[0].password, req.body.password)) {
                _context2.next = 14;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({ message: 'The credentials you provided is incorrect' }));

            case 14:
              token = _helper2.default.generateToken(rows[0].id);
              return _context2.abrupt('return', res.status(200).send({ token: token }));

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2['catch'](5);
              return _context2.abrupt('return', res.status(400).send(_context2.t0));

            case 21:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[5, 18]]);
    }));

    function login(_x3, _x4) {
      return _ref3.apply(this, arguments);
    }

    return login;
  }(),


  /** Delete A User */
  delete: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      var deleteQuery, _ref6, rows;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              deleteQuery = 'DELETE FROM users where id=$1 returning *';
              _context3.prev = 1;
              _context3.next = 4;
              return _setup2.default.query(deleteQuery, [req.params.id]);

            case 4:
              _ref6 = _context3.sent;
              rows = _ref6.rows;

              if (rows[0]) {
                _context3.next = 8;
                break;
              }

              return _context3.abrupt('return', res.status(404).send({ message: 'user not found' }));

            case 8:
              return _context3.abrupt('return', res.status(204).send({ message: 'deleted' }));

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3['catch'](1);
              return _context3.abrupt('return', res.status(400).send(_context3.t0));

            case 14:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[1, 11]]);
    }));

    function _delete(_x5, _x6) {
      return _ref5.apply(this, arguments);
    }

    return _delete;
  }()
};

exports.default = User;