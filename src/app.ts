import express from 'express';
import authController from './controllers/authController';
import userController from './controllers/userController';
import transactionController from './controllers/transactionController';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());

app.use('/auth', authController);
app.use('/user', userController);
app.use('/transaction', transactionController);

app.use(errorMiddleware);

export default app;
