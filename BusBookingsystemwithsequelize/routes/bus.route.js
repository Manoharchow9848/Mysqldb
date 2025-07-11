import express from 'express';
import { getAllBuses,createBus,getBusBookingsWithUsers } from '../controllers/bus.controller.js';


const router = express();
router.get('/',getAllBuses);
router.post('/register',createBus);
router.get('/:id/bookings',getBusBookingsWithUsers);


export default router;