import { NextFunction, Request, Response } from 'express';
import { Document } from 'mongoose';
import { User } from '@/shared/types';

export type Locals = {
    user?: Document<unknown, unknown, User> & User;
    newBossByUser?: Omit<User, 'password'>;
};

type ReqBody = {
    currentBossByUserId: User['id'];
    newBossByUserId: User['id'];
};

type ReqParams = {
    userId: User['id'];
};

export type SetBossBySubordinate = (
    req: Request<ReqParams, unknown, ReqBody>,
    res: Response<unknown, Locals>,
    next: NextFunction
) => void;
