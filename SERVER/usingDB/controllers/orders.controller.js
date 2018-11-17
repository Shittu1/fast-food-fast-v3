import db from '../db/setup';

const order = {
  /** Create An Order */
  async create(req, res) {
    const createQuery = `INSERT INTO
        orders(name, price, quantity)
        VALUES($1, $2, $3)
        returning *`;
    const values = [
      req.body.name,
      req.body.price,
      req.body.quantity,
    ];

    try {
      const { rows } = await db.query(createQuery, values);
      return res.status(201).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  /** Get All Orders */
  async getAll(req, res) {
    const findAllQuery = 'SELECT * FROM orders';
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  /** Get an Order */
  async getOne(req, res) {
    const text = 'SELECT * FROM orders WHERE id = $1';
    try {
      const { rows } = await db.query(text, [req.params.id]);
      if (!rows[0]) {
        return res.status(400).send({ message: 'order not found' });
      }
      return res.status(200).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  /** Update An Order */
  async update(req, res) {
    const findOneQuery = 'SELECT * FROM orders WHERE id=$1';
    const updateOneQuery = `UPDATE orders
      SET name = $1, price = $2, quantity = $3
      WHERE id=$4 returning *`;
    try {
      const { rows } = await db.query(findOneQuery, [req.params.id]);
      if (!rows[0]) {
        return res.status(404).send({ message: 'order not find' });
      }
      const values = [
        req.body.name || rows[0].name,
        req.body.price || rows[0].price,
        req.body.quantity || rows[0].quantity,
        req.params.id
      ];
      const response = await db.query(updateOneQuery, values);
      return res.status(200).send(response.rows[0]);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  /** Delete An Order */
  async delete(req, res) {
    const deleteQuery = 'DELETE FROM orders WHERE id=($1)';
    try {
      const { rows } = await db.query(deleteQuery, [req.params.id]);
      if (!rows) {
        return res.status(404).send({ message: 'order not found' });
      }
      return res.status(204).send({ message: 'deleted ' });
    } catch (error) {
      return res.status(400).send(error);
    }
  }

};

export default order;
