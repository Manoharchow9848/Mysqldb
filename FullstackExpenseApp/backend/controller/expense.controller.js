import expenses from "../model/expense.js";
import { sequelize } from "../connectdb/db.js";

export const getAllExpenses = async(req,res)=>{

    try {
        const expense = await expenses.findAll();
        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}
export const createExpense = async(req,res)=>{
    const {productName,price,category} = req.body;
    if(!productName || !price || !category){
        res.send('All field required');
    }
    try {
         const newExpense = await expenses.create({productName,price,category});
         res.status(200).json(newExpense)
    } catch (error) {
           res.status(500).json({message:"Internal Server Error"})
    }
}
export const deleteExpense = async(req,res)=>{
    const expenseId = req.params.id;
    
    try {
        const expense = await expenses.findByPk(expenseId);
        if (!expense) {
            return res.status(404).json({ message: 'expense not found' });
        }
        await expense.destroy();
    } catch (error) {
         res.status(500).json({message:error})
    }
}
export const updateExpense = async(req,res)=>{
    const updated = req.body;
    const expenseId = req.params.id;
    try {
       const expense = await expenses.findByPk(expenseId);
         if (!expense) {
            return res.status(404).json({ message: 'expense not found' });
        }
        await expense.update(updated);
    } catch (error) {
         res.status(500).json({message:error})
    }
}