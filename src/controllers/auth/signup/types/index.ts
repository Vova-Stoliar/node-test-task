import { NextFunction, Request, Response } from 'express';
import { PartialPick, User } from '@/shared/types';

type ReqBody = Pick<User, 'password' | 'email' | 'name'>;

export type Locals = PartialPick<User, 'boss' | 'password'> & {
    user?: Omit<User, 'password'>;
};

export type Signup = (
    req: Request<unknown, unknown, ReqBody>,
    res: Response<unknown, Locals>,
    next: NextFunction
) => void;
