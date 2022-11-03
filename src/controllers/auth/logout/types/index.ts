import { NextFunction, Request, Response } from 'express';
import { Document } from 'mongoose';
import { User } from '@/shared/types';

type ReqBody = Pick<User, 'email' | 'id'>;

export type Locals = {
    user?: Document<unknown, unknown, User> & User;
};

export type Logout = (
    req: Request<unknown, unknown, ReqBody>,
    res: Response<unknown, Locals>,
    next: NextFunction
) => void;
