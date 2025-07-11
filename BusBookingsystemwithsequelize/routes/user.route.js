import express from 'express';
import { getAllUsers ,createUser} from '../controllers/user.controller.js';

const router = express.Router();


router.get('/',getAllUsers);
router.post('/register',createUser);
export default router;