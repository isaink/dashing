const pgp = require('pg-promise')({});
const db = pgp(process.env.HOST);


module.exports = db;
