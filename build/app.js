'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

require('babel-polyfill');

var _orders = require('./usingJSObject/routes/orders');

var _orders2 = _interopRequireDefault(_orders);

var _orders3 = require('./usingDB/routes/orders');

var _orders4 = _interopRequireDefault(_orders3);

var _users = require('./usingDB/routes/users');

var _users2 = _interopRequireDefault(_users);

var _auth = require('./usingDB/routes/auth');

var _auth2 = _interopRequireDefault(_auth);

var _menu = require('./usingDB/routes/menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var Order = process.env.Type === 'db' ? _orders4.default : _orders2.default;

var app = (0, _express2.default)();

var PORT = process.env.PORT || 3000;

app.use(_bodyParser2.default.urlencoded({
  extended: true
}));
app.use(_bodyParser2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ Message: 'Welcome to Fast food fast home page' });
});

app.use('/api/v1/orders', Order);
app.use('/users', _users2.default);
app.use('/auth', _auth2.default);
app.use('/menu', _menu2.default);

app.listen(PORT, function () {
  console.log('app is running on port ' + PORT);
});

exports.default = app;