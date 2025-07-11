import { DataTypes } from "sequelize";
import { sequelize } from "../connectdb/db.js";


const identitycard = sequelize.define('identitycard',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    cardNo:{
        type:DataTypes.INTEGER,
        unique:true,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
            
    }
})

export default identitycard;