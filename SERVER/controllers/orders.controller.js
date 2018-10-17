import ordersModel from '../models/orders';

const Orders = {
  
  create(req, res) {
    if(!req.body.productName && !req.body.unitPrice && !req.body.quantity) {
        return res.status(400).send({message: 'All fields are required'});
      }
      const order = ordersModel.create(req.body);
      return res.status(201).send(order);
  },

  getAll(req, res) {
    const orders = ordersModel.findAll();
    return res.status(200).send(orders);
  },

  getOne(req, res) {
      const order = ordersModel.findOne(req.params.id);
      if(!order) {
        return res.status(404).send({message: 'order not found'});
      }
      return res.status(200).send(order);
  },

  update(req, res) {
    const order = ordersModel.findOne(req.params.id);
    if(!order) {
      return res.status(404).send({message: 'order not found'});
    }
    const updatedOrder = ordersModel.update(req.params.id, req.body);
    return res.status(200).send(order);
  },

  delete(req, res) {
    const order = ordersModel.findOne(req.params.id);
    if(!order) {
      return res.status(404).send({message: 'order not found'});
    }
    const ref = ordersModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default Orders;