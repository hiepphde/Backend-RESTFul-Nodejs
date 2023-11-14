const mysql = require('mysql2');
const config = require('../configs/config');

const connection = mysql.createConnection({
    host: config.db_host,
    port: config.db_port,
    user: config.db_user,
    password: config.db_password,
    database: config.db_name
});

module.exports = connection;