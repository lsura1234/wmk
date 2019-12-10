import Sequelize from "sequelize";
import connect from "../../config/database";
let sexModel = connect.define(
  "sex",
  {
    sexId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE
    },
    deletedAt: {
      type: Sequelize.DATE
    }
  },
  {
    tableName: "sex",
    freezeTableName: true,
    paranoid: true
  }
);

export default sexModel;
