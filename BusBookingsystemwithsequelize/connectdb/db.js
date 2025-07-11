import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('bus_booking_system2', 'root', 'Manuraja@767', {
  host: 'localhost',
  dialect: 'mysql'
});

export const db = async()=>{
    try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}