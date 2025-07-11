import { DataTypes } from "sequelize";
import { sequelize } from "../connectdb/db.js";

const studentcourses = sequelize.define('studentcourses',{
id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
})

export default studentcourses;