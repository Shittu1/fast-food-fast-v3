import db from '../db/setup';

const user = {
  /** Get All Orders Of A Particular User */
  async getUserOrders(req, res) {
    const text = 'SELECT * FROM orders WHERE owner_id = $1';
    try {
      const { rows } = await db.query(text, [req.params.id]);
      if (!rows) {
        return res.status(400).send({ message: 'order not found' });
      }
      return res.status(200).send(rows);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  /** Get All Orders Of A Particular User */
  async getAllUsers(req, res) {
    const text = 'SELECT * FROM users';
    try {
      const { rows, rowCount } = await db.query(text);
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
};

export default user;
