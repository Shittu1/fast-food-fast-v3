'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _orders = require('./routes/orders');

var _orders2 = _interopRequireDefault(_orders);

var _orders3 = require('./models/orders');

var _orders4 = _interopRequireDefault(_orders3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var PORT = process.env.PORT || 3000;

app.use(_bodyParser2.default.urlencoded({
  extended: true
}));
app.use(_bodyParser2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ Message: 'Welcome to Fast food fast home page' });
});

app.use('/api/v1', _orders2.default);

app.listen(PORT, function () {
  console.log('app is running on port ' + PORT);
});

exports.default = app;