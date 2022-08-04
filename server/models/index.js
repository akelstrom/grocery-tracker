const User = require("./User");
const Item = require("./Item");

Item.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Item,
};
