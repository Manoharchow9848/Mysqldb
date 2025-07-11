import express from 'express';
import { getAllUsers,createUser,deleteUser,editUser } from '../controller/user.controller.js';
const router = express();

router.get('/users',getAllUsers);
router.post('/add-user',createUser)
router.delete('/delete/:id',deleteUser)
router.put('/update/:id',editUser)


export default router;