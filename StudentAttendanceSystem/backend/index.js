import express from 'express';
import cors from 'cors'
import { sequelize,db } from './connectdb/db.js';
import './model/index.js'
import attendanceRoutes from './routes/attendance.route.js'
const app = express();
app.use(express.json())
app.use(cors());

app.use('/api/attendance',attendanceRoutes);
sequelize.sync().then(()=>{
    db();
    app.listen(3000,()=>{
        console.log('app running on port 3000');
        
    })
}) 