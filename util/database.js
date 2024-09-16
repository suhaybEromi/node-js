const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "{#[R0mi>suhayb]$}",
});

module.exports = pool.promise();
