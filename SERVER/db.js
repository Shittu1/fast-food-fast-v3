import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('connected to the db');
});

/** Create Order Table */

const createOrderTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
  orders(
    id SERIAL PRIMARY KEY,
    productName varchar(250) NOT NULL,
    unitPrice integer,
    quantity integer,
    owner_id serial NOT NULL,
    createdDate date,
    modifiedDate date
    FOREIGN KEY (owner_id) REFERENCES users (id) ON DELETE CASCADE
  )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/** Create User Table */
const createUserTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
      users(
        id SERIAL PRIMARY KEY,
        email VARCHAR(128) UNIQUE NOT NULL,
        password VARCHAR(128) NOT NULL,
        created_date date,
        modified_date date
      )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/** Create Menu Table */
const createMenuTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
      menu(
        id SERIAL PRIMARY KEY,
        name varchar(120) NOT NULL,
        price integer,
        details text(250),
        date date
      )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/** Drop Order Tables */
const dropOrderTable = () => {
  const queryText = 'DROP TABLE IF EXISTS orders returning *';
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/** Drop User Tables */
const dropUserTable = () => {
  const queryText = 'DROP TABLE IF EXISTS users returning *';
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/** Drop User Tables */
const dropMenuTable = () => {
  const queryText = 'DROP TABLE IF EXISTS menu returning *';
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};


/** Create all Tables */
const createAllTables = () => {
  createUserTable();
  createOrderTable();
  createMenuTable();
};

/** Drop all Tables */
const dropAllTables = () => {
  dropUserTable();
  dropOrderTable();
  dropMenuTable();
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createOrderTable,
  createUserTable,
  createMenuTable,
  createAllTables,
  dropUserTable,
  dropOrderTable,
  dropMenuTable,
  dropAllTables
};

require('make-runnable');
