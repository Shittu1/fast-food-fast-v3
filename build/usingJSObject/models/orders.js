'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Orders = function () {
  function Orders() {
    _classCallCheck(this, Orders);

    this.orders = [{
      id: 1,
      productName: 'Egg-Roll',
      unitPrice: 5,
      quantity: 1
    }, {
      id: 2,
      productName: 'Sausage-Roll',
      unitPrice: 10,
      quantity: 2
    }];
  }

  _createClass(Orders, [{
    key: 'create',
    value: function create(data) {
      var newOrder = {
        id: _uuid2.default.v4(),
        productName: data.productName || '',
        unitPrice: data.unitPrice || '',
        quantity: data.quantity || '',
        createdDate: (0, _moment2.default)().format('MM/DD/YYYY'),
        modifiedDate: (0, _moment2.default)().format('MM/DD/YYYY')
      };
      this.orders.push(newOrder);
      return newOrder;
    }
  }, {
    key: 'findOne',
    value: function findOne(id) {
      return this.orders.find(function (order) {
        return order.id === id;
      });
    }
  }, {
    key: 'findAll',
    value: function findAll() {
      return this.orders;
    }
  }, {
    key: 'update',
    value: function update(id, data) {
      var order = this.findOne(id);
      var index = this.orders.indexOf(order);
      this.orders[index].productName = data.productName || order.productName;
      this.orders[index].unitPrice = data.unitPrice || order.unitPrice;
      this.orders[index].quantity = data.quantity || order.quantity;
      this.orders[index].modifiedDate = (0, _moment2.default)().format('MM/DD/YYYY');
      return this.orders[index];
    }
  }, {
    key: 'delete',
    value: function _delete(id) {
      var order = this.findOne(id);
      var index = this.orders.indexOf(order);
      this.orders.splice(index, 1);
      return {};
    }
  }]);

  return Orders;
}();

// export default new Orders();


module.exports = Orders;