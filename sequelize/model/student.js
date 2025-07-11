import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from "../connectdb/db.js";

const students = sequelize.define('student', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,     
    }
}) 

export  default students;