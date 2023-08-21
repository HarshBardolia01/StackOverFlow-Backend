import express from 'express';
import userRouter from './user.js';
import questionRouter from './question.js';

const router = express.Router();

router.use('/user', userRouter);
router.use('/questions', questionRouter);

export default router;
