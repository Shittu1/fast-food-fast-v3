import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('connected to the db');
});

/** Create Tables */

const createTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
  orders(
    id SERIAL PRIMARY KEY,
    productName varchar(250) NOT NULL,
    unitPrice integer,
    quantity integer,
    createdDate date,
    modifiedDate date now()
  )`;

  pool.query(queryText)
    .then(res => {
      console.log(res);
      pool.end();
    })

}

