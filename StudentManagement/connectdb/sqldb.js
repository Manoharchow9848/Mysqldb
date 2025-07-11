import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password :'Manuraja@767',
    database: 'studentmanagement'
};
export const db =async()=>{
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to the MySQL database successfully!');
    const [createTable] = await connection.query(`
      CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        age INT NOT NULL
      );
    `);
    console.log('Table "students" checked/created successfully:', createTable);
    return connection;
  } catch (error) {
    console.error('Error connecting to the MySQL database:', error);
    throw error;
  }
}