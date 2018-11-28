'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Weight', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
         type: Sequelize.INTEGER,
         allowNull: false,
         references: {
           model: 'Users',
           key: 'id',
         },
       }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Weights');
  }
};