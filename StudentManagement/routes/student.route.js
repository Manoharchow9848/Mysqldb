import express from 'express';
import { getAllStudents,getStudentById,createStudent,updateStudent,deleteStudent } from '../controller/student.controller.js';

const router = express.Router();

router.get('/', getAllStudents);
router.get('/:sid', getStudentById);
router.post('/register', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);





export default router;