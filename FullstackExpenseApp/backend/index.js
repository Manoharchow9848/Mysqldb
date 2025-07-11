import express from 'express';
import { db,sequelize } from './connectdb/db.js';
import expenses from './model/expense.js';
import expenseRouter from './routes/expense.route.js'
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors())
app.use('/api/expense',expenseRouter)

sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log("App running on port 3000")
    })
})


 

