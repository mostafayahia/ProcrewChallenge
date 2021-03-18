const config = require('./config');

const mysql = require('mysql');

module.exports = mysql.createConnection(config.DATABASE_URL);
