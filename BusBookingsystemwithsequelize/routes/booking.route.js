import express from 'express';
import { createBooking ,getUserBookings} from '../controllers/booking.controller.js';
const router = express.Router();

router.post('/',createBooking)
router.get('/:id',getUserBookings)


export default router