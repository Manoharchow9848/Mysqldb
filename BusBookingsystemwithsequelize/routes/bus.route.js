import express from 'express';
import { getAllBuses,createBus } from './bus.controller.js';


const router = express();
router.get('/',getAllBuses);
router.post('/register',createBus);


export default router;