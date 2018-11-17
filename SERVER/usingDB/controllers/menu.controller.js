import db from '../db/setup';

const menu = {
  /** Create A Menu */
  async create(req, res) {
    const createQuery = `INSERT INTO
      menu(name, price, details)
      VALUES($1, $2, $3)
      returning *`;
    const values = [
      req.body.name,
      req.body.price,
      req.body.details
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
    const findAllQuery = 'SELECT * FROM menu';
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  /** Get A Menu */
  async getOne(req, res) {
    const findOneQuery = 'SELECT * FROM menu WHERE id = $1';
    try {
      const { rows } = await db.query(findOneQuery, [req.params.id]);
      if (!rows[0]) {
        return res.status(400).send({ message: 'menu not found' });
      }
      return res.status(200).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  /** Update A menu */
  async update(req, res) {
    const findOneQuery = 'SELECT * FROM menu WHERE id=$1';
    const updateOneQuery = `UPDATE menu
      SET name = $1, price = $2, details = $3,
      WHERE id = $4 returning *`;
    try {
      const { rows } = await db.query(findOneQuery, req.params.id);
      if (!rows[0]) {
        return res.status(404).send({ message: 'menu not found' });
      }
      const values = [
        req.body.name || rows[0].name,
        req.body.price || rows[0].price,
        req.body.details || rows[0].details
      ];
      const response = await db.query(updateOneQuery, values);
      return res.status(200).send(response.rows[0]);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  /** Delete A Menu */
  async delete(req, res) {
    const deleteQuery = 'DELETE FROM menu WHERE id = $1 returning *';
    try {
      const { rows } = await db.query(deleteQuery, [req.params.id]);
      if (!rows[0]) {
        return res.status(404).send({ message: 'menu not found' });
      }
      return res.status(200).send({ message: 'deleted' });
    } catch (error) {
      return res.status(400).send(error);
    }
  }

};

export default menu;
