import express from 'express';
import { getAllExpenses,createExpense, deleteExpense ,updateExpense} from '../controller/expense.controller.js';




const router = express.Router();
router.get('/',getAllExpenses)
router.post('/',createExpense)
router.delete('/:id',deleteExpense)
router.put('/:id',updateExpense)


export default router;