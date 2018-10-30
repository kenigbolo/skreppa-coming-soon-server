'use strict';

var _require = require('pg'),
    Pool = _require.Pool;

var dotenv = require('dotenv');

dotenv.config();

var pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', function () {
  console.log('connected to the db');
});

pool.on('remove', function () {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createTables: createTables,
  dropTables: dropTables
};

require('make-runnable');