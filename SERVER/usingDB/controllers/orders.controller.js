import db from '../db/setup';

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
const newDate = new Date().toLocaleDateString('en-US', options);

const order = {
  /** Create An Order */
  async create(req, res) {
    const createQuery = `INSERT INTO
        orders(productName, unitPrice, quantity, owner_id createdDate, modifiedDate)
        VALUES($1, $2, $3, $4, $5, $6)
        returning *`;
    const values = [
      req.body.productname,
      req.body.unitprice,
      req.body.quantity,
      req.user.id,
      newDate,
      newDate
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
    const findAllQuery = 'SELECT * FROM orders WHERE owners_id = $1';
    try {
      const { rows, rowCount } = await db.query(findAllQuery, [req.user.id]);
      console.log('rows&rowCount>>>', rows);
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  /** Get an Order */
  async getOne(req, res) {
    const text = 'SELECT * FROM orders WHERE id = $1 AND owner_id = $2';
    try {
      const { rows } = await db.query(text, [req.params.id, req.user.id]);
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
    const findOneQuery = 'SELECT * FROM orders WHERE id=$1 AND owner_id = $2';
    const updateOneQuery = `UPDATE orders
      SET productName = $1, unitPrice = $2, quantity = $3, modifiedDate = $4
      WHERE id=$5 AND owner_id = $6 returning *`;
    try {
      const { rows } = await db.query(findOneQuery, [req.params.id, req.user.id]);
      if (!rows[0]) {
        return res.status(404).send({ message: 'order not find' });
      }
      const values = [
        req.body.productName || rows[0].productName,
        req.body.unitPrice || rows[0].unitPrice,
        req.body.quantity || rows[0].quantity,
        newDate,
        req.params.id,
        req.user.id
      ];
      const response = await db.query(updateOneQuery, values);
      return res.status(200).send(response.rows[0]);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  /** Delete An Order */
  async delete(req, res) {
    const deleteQuery = 'DELETE FROM orders WHERE id=$1 AND owner_id = $2 returning *';
    try {
      const { rows } = await db.query(deleteQuery, [req.params.id, req.user.id]);
      if (!rows[0]) {
        return res.status(404).send({ message: 'order not found' });
      }
      return res.status(204).send({ message: 'deleted ' });
    } catch (error) {
      return res.status(400).send(error);
    }
  }

};

export { newDate };
export default order;
