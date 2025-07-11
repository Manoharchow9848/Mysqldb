import express from 'express';
import { db,sequelize } from './connectdb/db.js';
import student from './models/user.js'
import Buses from './models/bus.js';
import Payments from './models/payment.js';
import Bookings from './models/bookings.js';
import userRoutes from './routes/user.route.js'
import busRoutes from './routes/bus.route.js'
import bookingRoutes from './routes/booking.route.js'
const app = express();
app.use(express.json())


app.use('/users',userRoutes)
app.use('/buses',busRoutes);
app.use('/bookings',bookingRoutes)
sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        db();
        console.log('server running on port 3000');
        
    })
}) 

 
