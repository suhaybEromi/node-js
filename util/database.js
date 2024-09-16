const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "{#[R0mi>suhayb]$}", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
