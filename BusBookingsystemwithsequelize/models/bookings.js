import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from "../connectdb/db.js";



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
    },
    busId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'buses',
            key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'

    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'users',
            key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
})

export default Bookings;