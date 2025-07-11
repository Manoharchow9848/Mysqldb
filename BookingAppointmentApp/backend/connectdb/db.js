import { Sequelize } from "sequelize";
export const sequelize = new Sequelize('booking _appointment_app', 'root', 'Manuraja@767', {
  host: 'localhost',
  dialect:'mysql'
});

export const db = async()=>{
    try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}
