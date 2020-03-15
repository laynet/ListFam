"use strict";
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define(
    "Item",
    {
      description: {
        type: DataTypes.STRING
      },
      purchased: {
        type: DataTypes.BOOLEAN
      },
      listId: {
        type: DataTypes.INTEGER
      }
    },
    {}
  );
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.List, {
      foreignKey: "listId",
      onDelete: "CASCADE"
    });
  };
  return Item;
};
