import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from "../connectdb/db.js";
import User from "./user.js";
import Buses from "./bus.js";


const  Bookings = sequelize.define('bookings',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    seatNumber:{
        type:DataTypes.STRING,
        allowNull:false
    }
    
})

User.hasMany(Bookings);  
Bookings.belongsTo(User);

Buses.belongsTo(Bookings);         
Bookings.belongsTo(Buses);

export default Bookings;