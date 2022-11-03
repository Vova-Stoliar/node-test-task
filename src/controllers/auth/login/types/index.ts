import { NextFunction, Request, Response } from 'express';
import { Document } from 'mongoose';
import { User } from '@/shared/types';

type ReqBody = Pick<User, 'email' | 'password'>;

export type Locals = {
    user?: Document<unknown, unknown, User> & User;
    normalizedUser?: Omit<User, 'password'>;
};

type LoginRequest = Request<unknown, unknown, ReqBody>;
type LoginResponse = Response<unknown, Locals>;

export type Login = (req: LoginRequest, res: LoginResponse, next: NextFunction) => void;
