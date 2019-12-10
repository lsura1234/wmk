'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'studentData',
      {
        studentDataId: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        yearId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'year',
            key: 'yearId',
          },
          allowNull: false,
        },
        brandId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'brand',
            key: 'brandId',
          },
          allowNull: false,
        },
        sexId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'sex',
            key: 'sexId',
          },
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
        deletedAt: {
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('studentData')
  },
}
