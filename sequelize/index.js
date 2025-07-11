import express from 'express';
import { db,sequelize } from './connectdb/db.js';
import studentRoutes from './routes/student.route.js';
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/students', studentRoutes);


sequelize.sync().then(() => {
   
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});
 