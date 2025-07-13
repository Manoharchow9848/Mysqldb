import express from 'express';
import { db,sequelize } from './connectdb/db.js';
import cors from 'cors'
const app = express();
import User from './model/user.js';
import userRoutes from './routes/user.route.js'
app.use(express.json())
app.use(cors())


app.use('/api/users',userRoutes);

sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log("App running on port 3000")
    })
})