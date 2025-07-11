import express from 'express';
import mysql from 'mysql2/promise';


const app = express();
const port = 3000;

const db = {
    host: 'localhost',
    user: 'root',
    password: 'Manuraja@767',
    database: 'dataindb'
};

(async () => {
    try {
        let connection = await mysql.createConnection(db);
        console.log('✅ Database connected successfully');

        //Creation table
        const [createQuery] = await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE
        );`)
        console.log('✅ Users table created successfully');
        const [insertResult] = await connection.execute(
            `INSERT INTO users (name, email) VALUES (?, ?)`,
            ['Virat Kohli', 'virat.kohli@example.com']
        );
        const userId = insertResult.insertId;
        console.log(`🟢 Inserted User: ID = ${insertResult.insertId}`);
        const [updateQuery] = await connection.execute(`
        update users set name=?, email=? where id=?`, ['King Kohli', 'king.kohli@example.com', userId]);
          if (updateQuery.affectedRows === 0) {
      console.log(`🔴 No user found to update with ID = ${userId}`);
    } else {
      console.log(`🟡 Updated User ID ${userId}`);
    }

    const [deleteQuery] = await connection.execute(`
        DELETE FROM users WHERE id = ?`, [userId]);
        if (deleteQuery.affectedRows === 0) {
      console.log(`🔴 No user found to delete with ID = ${userId}`);
    } else {
      console.log(`🔵 Deleted User ID ${userId}`);
    }


    } catch (error) {
        console.error('❌ Error:', error.message);
    }
})();













app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});