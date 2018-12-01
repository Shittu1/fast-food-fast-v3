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
    id serial PRIMARY KEY,
    name varchar(250) NOT NULL,
    price integer,
    quantity integer,
    date TIMESTAMP DEFAULT now()
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
        firstname varchar(20) NOT NULL,
        lastname varchar(20) NOT NULL,
        email varchar(30) NOT NULL,
        password varchar(150) NOT NULL
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
        name varchar(250) NOT NULL,
        price integer,
        details text,
        date TIMESTAMP DEFAULT now()
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
