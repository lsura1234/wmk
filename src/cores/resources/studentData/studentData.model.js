import Sequelize from "sequelize";
import connect from "../../config/database";
let studentDataModel = connect.define(
  "studentData",
  {
    studentDataId: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    yearId: {
      type: Sequelize.INTEGER,
      references: {
        model: "year",
        key: "yearId"
      },
      allowNull: false
    },
    brandId: {
      type: Sequelize.INTEGER,
      references: {
        model: "brand",
        key: "brandId"
      },
      allowNull: false
    },
    sexId: {
      type: Sequelize.INTEGER,
      references: {
        model: "sex",
        key: "sexId"
      },
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
    tableName: "studentData",
    freezeTableName: true,
    paranoid: true
  }
);

export default studentDataModel;
