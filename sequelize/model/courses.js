import { DataTypes } from "sequelize";
import { sequelize } from "../connectdb/db.js";


const courses = sequelize.define('courses',{
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
})
export default courses;