import { db,sequelize } from "./connectdb/db.js";
import express from 'express';
import cors from 'cors'
import User from "./model/user.js";
import  userRoutes from './routes/user.route.js'
const app =express();
app.use(express.json())
app.use(cors())

app.use('/api',userRoutes);


sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log('app running on port 3000');
        
    })
}) 