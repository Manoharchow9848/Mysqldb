import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user:'root',
  password: 'Manuraja@767',
  database: 'bus_booking_system', 
 port: 3306
};

export async function db() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to the database successfully');
    
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}