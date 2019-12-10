import Sequelize from "sequelize";
import connect from "../../config/database";
let yearModel = connect.define(
    'year',
    {
      yearId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.INTEGER,
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
    tableName: "year",
    freezeTableName: true,
    paranoid: true
  }
);

export default yearModel;
