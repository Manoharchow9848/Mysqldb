import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from "../connectdb/db.js";


const User = sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

export default User;