'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
          return queryInterface.createTable(
            'Users', {
                userId: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                firstname: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                lastname: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                email: {
                    type: Sequelize.STRING,
                    unique: true,
                    allowNull: false
                }
            }
        )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
