import express from 'express';
import { getAllStudnets, getAttendanceByDate,getAttendanceSummary,submitAttendance } from '../controller/attendance.controller.js';
const router = express.Router();

router.get('/students',getAllStudnets)
router.get('/', getAttendanceByDate);
router.post('/',submitAttendance)
router.get('/summary', getAttendanceSummary);


export default router;