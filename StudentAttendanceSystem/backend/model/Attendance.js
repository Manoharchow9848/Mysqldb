import { DataTypes } from "sequelize";
import { sequelize } from "../connectdb/db.js";


const Attendance = sequelize.define('Attendance', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('present', 'absent'),
    allowNull: false
  }
});

export default Attendance;