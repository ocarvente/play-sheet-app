require('dotenv').config();
const {Pool} = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  // host:'localhost',
  // user:'oscarcarvente',
  // max: 20,
  // idleTimeoutMillis: 30000,
  // connectionTimeoutMillis: 2000

})

module.exports = pool;