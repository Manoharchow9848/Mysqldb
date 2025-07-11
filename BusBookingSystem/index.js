import express from 'express';
import { db } from './db/connectdb.js';
import userRouter from './routes/user.route.js';
import busRouter from './routes/bus.route.js';
const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/users', userRouter);
//app.use('/api/buses', busRouter);
db().then(()=>{
  app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`);
  });
})