import { DataTypes } from "sequelize";
import { sequelize } from "../connectdb/db.js";

const studnet =sequelize.define('students',{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  totalPresent: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  totalAbsent: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

export default studnet;