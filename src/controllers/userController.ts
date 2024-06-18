import { Router } from 'express';
import userService from '../services/userService';

const router = Router();

router.get('/balance', userService.getBalance);

export default router;
