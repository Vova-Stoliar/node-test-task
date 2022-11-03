import { NextFunction, Request, Response } from 'express';
import { User } from '@/shared/types';

export type Locals = {
    user?: Omit<User, 'password'>;
};

export type GetUsers = (
    req: Request<unknown, unknown, Pick<User, 'id'>>,
    res: Response<unknown, Locals>,
    next: NextFunction
) => void;
