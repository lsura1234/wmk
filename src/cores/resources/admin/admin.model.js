import Sequelize from "sequelize";
import connect from "../../config/database";
let adminModel = connect.define(
  "admin",
  {
    adminId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
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
    tableName: "admin",
    freezeTableName: true,
    paranoid: true
  }
);

export default adminModel;
