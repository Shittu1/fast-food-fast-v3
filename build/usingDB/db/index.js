

Object.defineProperty(exports, '__esModule', {
  value: true
});

const _pg = require('pg');

const _dotenv = require('dotenv');

const _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

const pool = new _pg.Pool({
  connectionString: process.env.DATABASE_URL || process.env.HEROKU_POSTGRESQL_RED_URL
});

exports.default = {
  query: function query(text, params) {
    return new Promise(((resolve, reject) => {
      pool.query(text, params).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    }));
  }
};
