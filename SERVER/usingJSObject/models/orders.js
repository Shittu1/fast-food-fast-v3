import moment from 'moment';
import uuid from 'uuid';

class Orders {
  constructor() {
    this.orders = [
      {
        id: 1,
        productName: 'Egg-Roll',
        unitPrice: 5,
        quantity: 1
      },
      {
        id: 2,
        productName: 'Sausage-Roll',
        unitPrice: 10,
        quantity: 2
      }
    ];
  }

  create(data) {
    const newOrder = {
      id: uuid.v4(),
      productName: data.productName || '',
      unitPrice: data.unitPrice || '',
      quantity: data.quantity || '',
      createdDate: moment().format('MM/DD/YYYY'),
      modifiedDate: moment().format('MM/DD/YYYY')
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  findOne(id) {
    return this.orders.find(order => order.id === id);
  }

  findAll() {
    return this.orders;
  }

  update(id, data) {
    const order = this.findOne(id);
    const index = this.orders.indexOf(order);
    this.orders[index].productName = data.productName || order.productName;
    this.orders[index].unitPrice = data.unitPrice || order.unitPrice;
    this.orders[index].quantity = data.quantity || order.quantity;
    this.orders[index].modifiedDate = moment().format('MM/DD/YYYY');
    return this.orders[index];
  }

  delete(id) {
    const order = this.findOne(id);
    const index = this.orders.indexOf(order);
    this.orders.splice(index, 1);
    return {};
  }
}

// export default new Orders();
module.exports = Orders;
