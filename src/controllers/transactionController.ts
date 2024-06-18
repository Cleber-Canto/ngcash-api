import { Router } from 'express';
import transactionService from '../services/transactionService';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('/transfer', authMiddleware, transactionService.transfer);
router.get('/transactions', authMiddleware, transactionService.getTransactions);

export default router;
