import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from "../connectdb/db.js";



const  Buses = sequelize.define('buses',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    busNumber:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    totalSeats:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    availableSeats:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

export default Buses;