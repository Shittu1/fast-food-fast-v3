'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _orders = require('../models/orders');

var _orders2 = _interopRequireDefault(_orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ordersModel = new _orders2.default();
var Orders = {
  create: function create(req, res) {
    if (!req.body.productName && !req.body.unitPrice && !req.body.quantity) {
      return res.status(400).send({ message: 'All fields are required' });
    }
    var order = ordersModel.create(req.body);
    return res.status(201).send(order);
  },
  getAll: function getAll(req, res) {
    var orders = ordersModel.findAll();
    return res.status(200).send(orders);
  },
  getOne: function getOne(req, res) {
    var id = parseInt(req.params.id, 10);
    var order = ordersModel.findOne(id);
    if (!order) {
      return res.status(404).send({ message: 'order not found' });
    }
    return res.status(200).send(order);
  },
  update: function update(req, res) {
    var id = parseInt(req.params.id, 10);
    var order = ordersModel.findOne(id);
    if (!order) {
      return res.status(404).send({ message: 'order not found' });
    }
    var updatedOrder = ordersModel.update(id, req.body);
    return res.status(200).send(order);
  },
  delete: function _delete(req, res) {
    var id = parseInt(req.params.id, 10);
    var order = ordersModel.findOne(id);
    if (!order) {
      return res.status(404).send({ message: 'order not found' });
    }
    var ref = ordersModel.delete(id);
    return res.status(204).send(ref);
  }
};

exports.default = Orders;