const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Cart = sequelize.define("cart", {
  id: {
    type: Sequelize.INTEGER,
    autoIcrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Cart;
