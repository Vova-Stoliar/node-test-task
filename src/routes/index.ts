import express from 'express';
import * as authRouter from './auth';
import * as userRouter from './user';

export const router = express.Router();

router.use(authRouter.router);
router.use('/users', userRouter.router);
