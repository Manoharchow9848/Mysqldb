import express from 'express';
import mysql from 'mysql2';

const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Manuraja@767',
    database: 'testdb'
});
db.connect((err) => {
    if (err) {  
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

const createTableQuery = `
create table if not exists users (
    id int auto_increment primary key,name varchar(255) not null,
    email varchar(255) not null unique,
    password varchar(255) not null,
    created_at timestamp default current_timestamp
);
`
db.query(createTableQuery,(err,results)=>{
    if (err) {
        console.error('Error creating table:', err);
    } else {
        console.log('Table created or already exists.');
    }
})


    app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    });