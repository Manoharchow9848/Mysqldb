import express from 'express';
import { db,sequelize } from './connectdb/db.js';
import students from './model/student.js';
const app = express();
const PORT = 3000;


sequelize.sync().then(() => {
   
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});
 