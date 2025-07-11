/*const queries = [
  `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
  );`,
  
  `CREATE TABLE IF NOT EXISTS buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(50) NOT NULL,
    totalSeats INT NOT NULL,
    availableSeats INT NOT NULL
  );`,
  
  `CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT NOT NULL,
    userId INT,
    busId INT,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (busId) REFERENCES buses(id)
  );`,
  
  `CREATE TABLE IF NOT EXISTS payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid DECIMAL(10,2) NOT NULL,
    paymentStatus VARCHAR(50) NOT NULL,
    bookingId INT,
    FOREIGN KEY (bookingId) REFERENCES bookings(id)
  );`
];*/


import {db} from '../db/connectdb.js';

export const getAllUsers = async(req,res)=>{
    try {
        const connection = await db();
        const [rows] = await connection.execute('SELECT * FROM users');

        await connection.end(); // Close the connection after use
        if (rows.length === 0) {
            return res.status(404).json({message: 'No users found'});
        }
         //console.log('Users fetched successfully:', rows);

        
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({message: 'Internal server error'});
        
    }
}

export const registerUser = async (req, res) => {
    try {
        const {name,email} = req.body;
        if (!name || !email) {
            return res.status(400).json({message: 'Name and email are required'});
        }
        const connection = await db();
        const [insertResult] = await connection.execute(`
            insert into users (name,email) values (?,?)
        `, [name, email]);
        const newUserId = insertResult.insertId;
        await connection.end();
        res.status(201).json({message: 'User registered successfully', userId: newUserId});
    } catch (error) {
        
    }
}