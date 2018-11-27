'use strict';
module.exports = (sequelize, DataTypes) => {
  const Weight = sequelize.define('Weight', {
    weight: DataTypes.STRING
  }, {});
  Weight.associate = function(models) {
    // associations can be defined here
    Weight.belongsTo(models.User, {
      onDelete: "CASCADE",
    });
  };
  return Weight;
};

