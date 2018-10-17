'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

app.get('/', function (req, res) {
  res.send('Welcome to fast food fast');
});

var PORT = 3000 || process.env.PORT;

app.listen(PORT, function () {
  console.log('app is running on port ' + PORT);
});

exports.default = app;