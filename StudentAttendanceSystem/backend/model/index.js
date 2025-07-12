import studnet from "./student.js";
import Attendance from "./Attendance.js";
import { sequelize } from "../connectdb/db.js";

studnet.hasMany(Attendance, { foreignKey: 'sid', onDelete: 'CASCADE' });
Attendance.belongsTo(studnet, { foreignKey: 'sid' });

export { sequelize, studnet, Attendance };
