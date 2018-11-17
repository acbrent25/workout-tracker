'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn('Users', 'test', {
        type: Sequelize.STRING,
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Users', 'test');

  }
};