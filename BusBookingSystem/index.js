import express from 'express';
import mysql from 'mysql2';


const app = express();
const port = 3000;

// Create a MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'Manuraja@767', 
    database: 'bus_booking_system'
});
db.connect((err)=>{
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    } 
    console.log('Connected to the database');
})

const queries = [
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
];



// Execute the queries to create tables
queries.forEach((query)=>{
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error creating table:', err);
        } else {
            console.log('Table created successfully:', results);
        }
    });
})




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});