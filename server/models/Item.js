const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Item extends Model {}

Item.init(
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    expiration: Date,
  },
  {
    sequelize,
  }
);

module.exports = Item;
