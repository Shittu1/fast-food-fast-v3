import OrderList from '../models/orders';

const ordersModel = new OrderList();
const Orders = {

  create(req, res) {
    if (!req.body.productName && !req.body.unitPrice && !req.body.quantity) {
      return res.status(400).send({ message: 'All fields are required' });
    }
    const order = ordersModel.create(req.body);
    return res.status(201).send(order);
  },

  getAll(req, res) {
    const orders = ordersModel.findAll();
    return res.status(200).send(orders);
  },

  getOne(req, res) {
    const id = parseInt(req.params.id, 10);
    const order = ordersModel.findOne(id);
    if (!order) {
      return res.status(404).send({ message: 'order not found' });
    }
    return res.status(200).send(order);
  },

  update(req, res) {
    const id = parseInt(req.params.id, 10);
    const order = ordersModel.findOne(id);
    if (!order) {
      return res.status(404).send({ message: 'order not found' });
    }
    const updatedOrder = ordersModel.update(id, req.body);
    return res.status(200).send(updatedOrder);
  },

  delete(req, res) {
    const id = parseInt(req.params.id, 10);
    const order = ordersModel.findOne(id);
    if (!order) {
      return res.status(404).send({ message: 'order not found' });
    }
    const ref = ordersModel.delete(id);
    return res.status(204).send(ref);
  }
};

// eslint-disable-next-line linebreak-style
// eslint-disable-next-line linebreak-style
export default Orders;
