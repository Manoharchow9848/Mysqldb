import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from "../connectdb/db.js";



const  Payments = sequelize.define('payments',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    amountPaid:{
        type:DataTypes.STRING,
        allowNull:false
    },
    paymentStatus:{
        type:DataTypes.STRING,
        allowNull:false
    },
    bookingId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'bookings',
            key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
})

export default Payments;