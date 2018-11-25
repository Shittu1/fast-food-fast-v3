'use strict';

var _pg = require('pg');

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var pool = new _pg.Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', function () {
  console.log('connected to the db');
});

/** Create Order Table */

var createOrderTable = function createOrderTable() {
  var queryText = 'CREATE TABLE IF NOT EXISTS\n  orders(\n    id serial PRIMARY KEY,\n    name varchar(250) NOT NULL,\n    price integer,\n    quantity integer,\n    date TIMESTAMP DEFAULT now()\n  )';

  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  }).catch(function (err) {
    console.log(err);
    pool.end();
  });
};

/** Create User Table */
var createUserTable = function createUserTable() {
  var queryText = 'CREATE TABLE IF NOT EXISTS\n      users(\n        id SERIAL PRIMARY KEY,\n        firstname varchar(20) NOT NULL,\n        lastname varchar(20) NOT NULL,\n        email varchar(30) NOT NULL,\n        password varchar(150) NOT NULL\n      )';

  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  }).catch(function (err) {
    console.log(err);
    pool.end();
  });
};

/** Create Menu Table */
var createMenuTable = function createMenuTable() {
  var queryText = 'CREATE TABLE IF NOT EXISTS\n      menu(\n        id SERIAL PRIMARY KEY,\n        name varchar(250) NOT NULL,\n        price integer,\n        details text,\n        date TIMESTAMP DEFAULT now()\n      )';

  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  }).catch(function (err) {
    console.log(err);
    pool.end();
  });
};

/** Drop Order Tables */
var dropOrderTable = function dropOrderTable() {
  var queryText = 'DROP TABLE IF EXISTS orders returning *';
  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  }).catch(function (err) {
    console.log(err);
    pool.end();
  });
};

/** Drop User Tables */
var dropUserTable = function dropUserTable() {
  var queryText = 'DROP TABLE IF EXISTS users returning *';
  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  }).catch(function (err) {
    console.log(err);
    pool.end();
  });
};

/** Drop User Tables */
var dropMenuTable = function dropMenuTable() {
  var queryText = 'DROP TABLE IF EXISTS menu returning *';
  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  }).catch(function (err) {
    console.log(err);
    pool.end();
  });
};

/** Create all Tables */
var createAllTables = function createAllTables() {
  createUserTable();
  createOrderTable();
  createMenuTable();
};

/** Drop all Tables */
var dropAllTables = function dropAllTables() {
  dropUserTable();
  dropOrderTable();
  dropMenuTable();
};

pool.on('remove', function () {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createOrderTable: createOrderTable,
  createUserTable: createUserTable,
  createMenuTable: createMenuTable,
  createAllTables: createAllTables,
  dropUserTable: dropUserTable,
  dropOrderTable: dropOrderTable,
  dropMenuTable: dropMenuTable,
  dropAllTables: dropAllTables
};