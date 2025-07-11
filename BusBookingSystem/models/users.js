import { Sequelize,DataTypes } from "sequelize";
const sequelize = new Sequelize('sqlite::memory:');

const user = sequelize.define(
    'User',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            
        }
    }
)