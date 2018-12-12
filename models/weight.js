'use strict';
module.exports = (sequelize, DataTypes) => {
  const Weight = sequelize.define('Weight', {
    weight: DataTypes.INTEGER,
  });
  Weight.associate = function(models) {
    // associations can be defined here
    Weight.belongsTo(models.User, {
      foreignKey: {
        foreignKey: "UserId",
        allowNull: false
      }
    });
  };
  return Weight;
};