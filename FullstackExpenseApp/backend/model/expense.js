import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from "../connectdb/db.js";

const expenses = sequelize.define('expenses',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    productName:{
        type:DataTypes.STRING,
        allowNull:false
    },price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
   category: {
    type: DataTypes.ENUM('food', 'skincare', 'electronics'),
    allowNull: false
  }
})


export default expenses;