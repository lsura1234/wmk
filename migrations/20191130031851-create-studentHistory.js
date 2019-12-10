'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'studentHistory',
      {
        studentHistoryId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        GPABefore: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        servicePerMonth: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        startUseSP: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        useSPPerDay: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        timeToPlaySPInDay: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        placeUseSP: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        searchInClass: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        searchOutClass: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        takePhotoPowerPoint: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        contactAboutClass: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        timeSneakingInClass: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        mainToUseSP: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        momentWhereUseSp: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        useSPPresentOrAssignment: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        contactTeacher: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        GPA: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        studentDataId: {
          type: Sequelize.STRING,
          references: {
            model: 'studentData',
            key: 'studentDataId',
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
    return queryInterface.dropTable('studentHistory')
  },
}
