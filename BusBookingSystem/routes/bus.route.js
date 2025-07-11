import express from 'express';
import { getAllBuses,registerBus } from '../controllers/bus.controller.js';
const router = express.Router();

router.get('/', getAllBuses);
router.post('/register', registerBus);





export default router;