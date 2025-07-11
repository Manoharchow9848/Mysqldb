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